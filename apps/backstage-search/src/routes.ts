import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({
    error: z
      .object({ name: z.string(), message: z.string() })
      .openapi({ required: ['name', 'message'] }),
    request: z
      .object({ method: z.string(), url: z.string() })
      .openapi({ required: ['method', 'url'] }),
    response: z.object({ statusCode: z.number() }).openapi({ required: ['statusCode'] }),
  })
  .openapi({ required: ['error', 'request', 'response'] })
  .openapi('Error')

const JsonObjectSchema = z.record(z.string(), z.any()).openapi('JsonObject')

const ErrorResponseResponse = {
  description: 'An error response from the backend.',
  content: { 'application/json; charset=utf-8': { schema: ErrorSchema } },
}

const JWTSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const getQueryRoute = createRoute({
  method: 'get',
  path: '/query',
  tags: ['Search'],
  description: 'Query documents with a given filter.',
  operationId: 'Query',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filters']
        const open: string[] = ['unknown']
        const taken: string[] = ['term', 'types', 'pageCursor', 'pageLimit']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          term: z
            .string()
            .default('')
            .exactOptional()
            .openapi({
              param: {
                name: 'term',
                in: 'query',
                required: false,
                allowReserved: true,
                schema: { type: 'string', default: '' },
              },
            }),
          filters: JsonObjectSchema.openapi({
            param: {
              name: 'filters',
              in: 'query',
              required: false,
              style: 'deepObject',
              allowReserved: true,
              schema: { $ref: '#/components/schemas/JsonObject' },
            },
          }).exactOptional(),
          types: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'types',
                in: 'query',
                required: false,
                allowReserved: true,
                schema: { type: 'array', items: { type: 'string' } },
              },
            }),
          pageCursor: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'pageCursor',
                in: 'query',
                required: false,
                allowReserved: true,
                schema: { type: 'string' },
              },
            }),
          pageLimit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'pageLimit',
                in: 'query',
                required: false,
                allowReserved: true,
                schema: { type: 'integer' },
              },
            }),
          unknown: z
            .record(z.string(), z.any())
            .exactOptional()
            .openapi({
              param: {
                name: 'unknown',
                in: 'query',
                required: false,
                style: 'form',
                explode: true,
                allowReserved: true,
                schema: { type: 'object', additionalProperties: {} },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: z
            .object({
              results: z.array(
                z
                  .strictObject({
                    type: z.string().openapi({ description: 'The "type" of the given document.' }),
                    document: z
                      .object({
                        title: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The primary name of the document (e.g. name, title, identifier, etc).',
                          }),
                        text: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Free-form text of the document (e.g. description, content, etc).',
                          }),
                        location: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The relative or absolute URL of the document (target when a search result is clicked).',
                          }),
                      })
                      .openapi({
                        description: 'The raw value of the document, as indexed.',
                        required: [],
                      }),
                    highlight: z
                      .object({})
                      .exactOptional()
                      .openapi({
                        description:
                          'Optional result highlight. Useful for improving the search result\ndisplay/experience.',
                      }),
                    rank: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Optional result rank, where 1 is the first/top result returned. \nUseful for understanding search effectiveness in analytics.',
                      }),
                  })
                  .openapi({ required: ['type', 'document'] }),
              ),
              nextPageCursor: z.string().exactOptional(),
              previousPageCursor: z.string().exactOptional(),
              numberOfResults: z.int().exactOptional(),
            })
            .openapi({ required: ['results'] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})
