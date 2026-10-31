import { createRoute, z } from '@hono/zod-openapi'

const BearerHeaderSecurityScheme = {
  description: 'Generate an API key in settings -> api keys',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getApiV1ClipsRoute = createRoute({
  method: 'get',
  path: '/api/v1/clips',
  summary: 'list clips',
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
        const deep: string[] = ['filter', 'page']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
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
          filter: z
            .object({})
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Filters to be applied to the query.\n\nQuery params in the url must look like this: "filter[attributeName_*matcher*]"\n\n(i.e. filter[name_eq]=chimp%20into%20space)\n\nAvailable matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/\n\n',
                example:
                  '{\n  "filter[name_eq]": "john h. glenn, kindly air force base hospital",\n  "filter[text_start]": "He landed in the sea"\n}',
                explode: true,
                in: 'query',
                name: 'filter',
                required: false,
                schema: { type: 'object' },
                style: 'deepObject',
              },
            }),
          page: z
            .object({})
            .exactOptional()
            .openapi({
              param: {
                description: 'Specify page number and page size for the query',
                example: '{\n  "page[number]": 1,\n  "page[size]": 5\n}',
                explode: true,
                in: 'query',
                name: 'page',
                required: false,
                schema: { type: 'object' },
                style: 'deepObject',
              },
            }),
          sort: z
            .enum([
              'created_at',
              '-created_at',
              'original_created_at',
              '-original_created_at',
              'name',
              '-name',
            ])
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting',
                in: 'query',
                name: 'sort',
                required: false,
                schema: {
                  enum: [
                    'created_at',
                    '-created_at',
                    'original_created_at',
                    '-original_created_at',
                    'name',
                    '-name',
                  ],
                  type: 'string',
                },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const postApiV1ClipsRoute = createRoute({
  method: 'post',
  path: '/api/v1/clips',
  summary: 'create clip',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  attributes: z
                    .object({
                      end_time: z.number().openapi({ example: 12.3 }),
                      media_id: z
                        .string()
                        .openapi({ example: '9b9a2e82-5b47-4f59-831d-4c239824b983' }),
                      name: z.string().openapi({ example: 'Example New Clip' }),
                      start_time: z.number().openapi({ example: 10.1 }),
                    })
                    .openapi({ required: ['name', 'media_id', 'start_time', 'end_time'] }),
                })
                .openapi({ required: ['attributes'] }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    402: { description: 'payment required', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const getApiV1ClipsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/clips/{id}',
  summary: 'show clip',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the clip to be retrieved',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'not authorized', content: {} },
    404: { description: 'not found', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const putApiV1ClipsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/clips/{id}',
  summary: 'update clip',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the clip to be retrieved',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  attributes: z
                    .object({
                      end_time: z.number().exactOptional().openapi({ example: 12.3 }),
                      name: z.string().exactOptional().openapi({ example: 'Example Clip' }),
                      start_time: z.number().exactOptional().openapi({ example: 10.1 }),
                    })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['attributes'] }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'not authorized', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const deleteApiV1ClipsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/clips/{id}',
  summary: 'delete clip',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the clip to be retrieved',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'no content' },
    401: { description: 'not authorized', content: {} },
    404: { description: 'not found', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const getApiV1DirectUploadsRoute = createRoute({
  method: 'get',
  path: '/api/v1/direct_uploads',
  summary: 'prepare presigned upload url',
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const getApiV1MediasRoute = createRoute({
  method: 'get',
  path: '/api/v1/medias',
  summary: 'list medias',
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
        const deep: string[] = ['filter', 'page']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
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
          filter: z
            .object({})
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Filters to be applied to the query.\n\nQuery params in the url must look like this: "filter[attributeName_*matcher*]"\n\n(i.e. filter[name_eq]=chimp%20into%20space)\n\nAvailable matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/\n\n',
                example:
                  '{\n  "filter[name_eq]": "chimp into space",\n  "filter[sourceUrl_start]": "https://archive.org"\n}',
                explode: true,
                in: 'query',
                name: 'filter',
                required: false,
                schema: { type: 'object' },
                style: 'deepObject',
              },
            }),
          page: z
            .object({})
            .exactOptional()
            .openapi({
              param: {
                description: 'Specify page number and page size for the query',
                example: '{\n  "page[number]": 1,\n  "page[size]": 5\n}',
                explode: true,
                in: 'query',
                name: 'page',
                required: false,
                schema: { type: 'object' },
                style: 'deepObject',
              },
            }),
          sort: z
            .enum([
              'created_at',
              '-created_at',
              'original_created_at',
              '-original_created_at',
              'name',
              '-name',
            ])
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting',
                in: 'query',
                name: 'sort',
                required: false,
                schema: {
                  enum: [
                    'created_at',
                    '-created_at',
                    'original_created_at',
                    '-original_created_at',
                    'name',
                    '-name',
                  ],
                  type: 'string',
                },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const postApiV1MediasRoute = createRoute({
  method: 'post',
  path: '/api/v1/medias',
  summary: 'create media',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  attributes: z
                    .object({
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Video description' }),
                      name: z.string().exactOptional().openapi({ example: 'Video name' }),
                      source_url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            '(required if importing a video from a source url) https://archive.org/download/SF143/SF143_512kb.mp4',
                        }),
                      upload_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            '(required if uploading a local file) ey399vjdkdjf0jslcjd0wjc0ujffj3432lo23kk2o22',
                        }),
                    })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['attributes'] }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    402: { description: 'payment required', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  callbacks: {
    'media.processing_finished': {
      'Provided URL in /webhook_subscriptions': {
        post: {
          summary: 'The webhook that is sent after the media is finished processing',
          requestBody: {
            content: {
              'application/json': {
                schema: z
                  .object({
                    event: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'media.processing_finished' }),
                    payload: z
                      .object({
                        data: z
                          .object({
                            attributes: z
                              .object({
                                created_at: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: '2022-10-14T21:23:42.659Z' }),
                                description: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    example:
                                      "Enos was the second chimpanzee launched into space by NASA. He was the first and only chimpanzee, and third hominid after cosmonauts Yuri Gagarin and Gherman Titov, to achieve Earth orbit. Enos's flight occurred on November 29, 1961. More details: https://en.wikipedia.org/wiki/Enos_(chimpanzee)",
                                  }),
                                external_id: z.string().exactOptional().openapi({ example: '1' }),
                                has_fetch_error: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({ example: false }),
                                is_processing: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({ example: false }),
                                name: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'Chimp Into Space' }),
                                original_created_at: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: '2022-10-14T21:23:42.659Z' }),
                                processing_started_at: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: '2022-10-14T21:23:42.628Z' }),
                                source_created_at: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: '2022-10-14T21:23:42.659Z' }),
                                source_file_content_type: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'video/mp4' }),
                                source_file_duration: z
                                  .number()
                                  .exactOptional()
                                  .openapi({ example: '98.865532' }),
                                source_file_height: z
                                  .number()
                                  .exactOptional()
                                  .openapi({ example: 280 }),
                                source_file_preview_image_url: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ example: 'https://www.example.com/path-to-image' }),
                                source_file_width: z
                                  .number()
                                  .exactOptional()
                                  .openapi({ example: 320 }),
                                source_url: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    example: 'https://archive.org/download/SF143/SF143_512kb.mp4',
                                  }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            id: z
                              .string()
                              .exactOptional()
                              .openapi({ example: '9b9a2e82-5b47-4f59-831d-4c239824b983' }),
                            relationships: z
                              .object({
                                clips: z
                                  .object({
                                    data: z
                                      .array(
                                        z
                                          .object({
                                            id: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                example: '9b9a2e82-5b47-4f59-831d-4c239824b983',
                                              }),
                                            type: z
                                              .string()
                                              .exactOptional()
                                              .openapi({ example: 'clips' }),
                                          })
                                          .openapi({ required: [] }),
                                      )
                                      .exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            transcription: z
                              .object({
                                data: z
                                  .object({
                                    id: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '9b9a2e82-5b47-4f59-831d-4c239824b983' }),
                                    type: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 'transcriptions' }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            type: z.string().exactOptional().openapi({ example: 'medias' }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        included: z
                          .array(
                            z.xor([
                              z
                                .object({
                                  attributes: z
                                    .object({
                                      created_at: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '2022-10-14T21:23:42.628Z' }),
                                      end_char: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 1303 }),
                                      end_time: z
                                        .number()
                                        .exactOptional()
                                        .openapi({ example: '96.63' }),
                                      external_id: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '1' }),
                                      media_file_content_type: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'video/mp4' }),
                                      media_file_duration: z
                                        .number()
                                        .exactOptional()
                                        .openapi({ example: 38.938939 }),
                                      media_file_height: z
                                        .number()
                                        .exactOptional()
                                        .openapi({ example: 240 }),
                                      media_file_preview_image_url: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'https://www.example.com/path-to-image',
                                        }),
                                      media_file_url: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'https://www.example.com/path-to-video',
                                        }),
                                      media_file_width: z
                                        .number()
                                        .exactOptional()
                                        .openapi({ example: 320 }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'john h. glenn, kindly air force base hospital',
                                        }),
                                      rank: z.int().exactOptional().openapi({ example: 0 }),
                                      start_char: z.int().exactOptional().openapi({ example: 737 }),
                                      start_time: z
                                        .number()
                                        .exactOptional()
                                        .openapi({ example: '57.71' }),
                                      text: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example:
                                            'He landed in the sea south of Bermuda and has brought to the islands for quick medical checks before he is taken back to Cape Canaveral for a thorough examination. Scientists are related at the condition of both chimp and capsule. They came through the test in a manner that brings a man flight closer to reality for the U. S. Space team at Kindly Air Force Base Hospital, Enos appears sound, if not happy to examining doctors. He performed his task well, not missing a trick in the complex series of work assignments next in orbit, Lieutenant Colonel John H. Glenn.',
                                        }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '9b9a2e82-5b47-4f59-831d-4c239824b983' }),
                                  relationships: z
                                    .object({
                                      media: z
                                        .object({
                                          data: z
                                            .object({
                                              id: z
                                                .string()
                                                .exactOptional()
                                                .openapi({
                                                  example: '9b9a2e82-5b47-4f59-831d-4c239824b983',
                                                }),
                                              type: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ example: 'medias' }),
                                            })
                                            .exactOptional()
                                            .openapi({ required: [] }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  type: z.string().exactOptional().openapi({ example: 'clips' }),
                                })
                                .openapi({ required: [] }),
                              z
                                .object({
                                  attributes: z
                                    .object({
                                      text: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example:
                                            'He landed in the sea south of Bermuda and has brought to the islands for quick medical checks before he is taken back to Cape Canaveral for a thorough examination. Scientists are related at the condition of both chimp and capsule. They came through the test in a manner that brings a man flight closer to reality for the U. S. Space team at Kindly Air Force Base Hospital, Enos appears sound, if not happy to examining doctors. He performed his task well, not missing a trick in the complex series of work assignments next in orbit, Lieutenant Colonel John H. Glenn.',
                                        }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '9b9a2e82-5b47-4f59-831d-4c239824b983' }),
                                  relationships: z.object({}).exactOptional(),
                                  type: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'transcriptions' }),
                                })
                                .openapi({ required: [] }),
                            ]),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({ required: [] }),
              },
            },
          },
          responses: { 200: { description: 'successful' } },
          security: [],
        },
      },
    },
  },
  security: [{ BearerHeader: [] }],
})

export const getApiV1MediasIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/medias/{id}',
  summary: 'show media',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'not authorized', content: {} },
    404: { description: 'not found', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const putApiV1MediasIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/medias/{id}',
  summary: 'update media',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  attributes: z
                    .object({
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: 'Writing by Sam Denby; Research by Sam Denby and Tristan Purdy',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Why Electric Planes are Inevitably Coming' }),
                    })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['attributes'] }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'not authorized', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const deleteApiV1MediasIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/medias/{id}',
  summary: 'delete media',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'no content' },
    401: { description: 'not authorized', content: {} },
    404: { description: 'not found', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const getApiV1WebhookSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/webhook_subscriptions',
  summary: 'list webhook subscriptions',
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
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
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
          filter: z
            .object({})
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Filters to be applied to the query.\n\nQuery params in the url must look like this: "filter[attributeName_*matcher*]"\n\n(i.e. filter[name_eq]=chimp%20into%20space)\n\nAvailable matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/\n\n',
                example: '{\n  "filter[name_eq]": "chimp into space"\n}',
                explode: true,
                in: 'query',
                name: 'filter',
                required: false,
                schema: { type: 'object' },
                style: 'deepObject',
              },
            }),
          sort: z
            .enum([
              'created_at',
              '-created_at',
              'original_created_at',
              '-original_created_at',
              'name',
              '-name',
            ])
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting',
                in: 'query',
                name: 'sort',
                required: false,
                schema: {
                  enum: [
                    'created_at',
                    '-created_at',
                    'original_created_at',
                    '-original_created_at',
                    'name',
                    '-name',
                  ],
                  type: 'string',
                },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const postApiV1WebhookSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/webhook_subscriptions',
  summary: 'create webhook subscription',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  attributes: z
                    .object({
                      subscribed_events: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ example: ['media.processing_finished'] }),
                      url: z
                        .string()
                        .openapi({ example: 'https://example.com/contentgroove_webhooks/12345' }),
                    })
                    .openapi({ required: ['url'] }),
                })
                .openapi({ required: ['attributes'] }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const getApiV1WebhookSubscriptionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/webhook_subscriptions/{id}',
  summary: 'show webhook subscription',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the webhook subscription to be retrieved',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'not authorized', content: {} },
    404: { description: 'not found', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})

export const deleteApiV1WebhookSubscriptionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/webhook_subscriptions/{id}',
  summary: 'delete webhook subscription',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the webhook subscription to be retrieved',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'no content' },
    401: { description: 'not authorized', content: {} },
    404: { description: 'not found', content: {} },
    429: { description: 'too many requests', content: {} },
  },
  security: [{ BearerHeader: [] }],
})
