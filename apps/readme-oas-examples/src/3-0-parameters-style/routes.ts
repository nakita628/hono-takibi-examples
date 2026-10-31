import { createRoute, z } from '@hono/zod-openapi'

export const getCookiesRoute = createRoute({
  method: 'get',
  path: '/cookies',
  tags: ['Cookie'],
  summary: 'Standard (no style)',
  description:
    'Support and handling of cookie parameters without `style` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)\n\n> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.',
  operationId: 'cookies_standard',
  request: {
    cookies: z
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
        const spread = new Map<string, string[]>([
          ['name', ['object']],
          ['description', ['object']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          primitive: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'primitive',
                in: 'cookie',
                description: 'A standard primitive.',
                schema: { type: 'string' },
                required: false,
              },
            }),
          array: z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
              z.array(z.string()),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'array',
                in: 'cookie',
                description: 'A standard array.',
                schema: { type: 'array', items: { type: 'string' } },
                required: false,
              },
            }),
          object: z
            .object({ name: z.string().exactOptional(), description: z.string().exactOptional() })
            .exactOptional()
            .openapi({
              param: {
                name: 'object',
                in: 'cookie',
                description: 'A standard object.',
                schema: {
                  type: 'object',
                  properties: { name: { type: 'string' }, description: { type: 'string' } },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: { 200: { description: 'OK' } },
})

export const getCookiesFormNonExplodedRoute = createRoute({
  method: 'get',
  path: '/cookies#formNonExploded',
  tags: ['Cookie'],
  summary: 'Form (non-exploded)',
  description:
    'Support and handling of cookie parameters with `style: form` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)\n\n> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.',
  operationId: 'cookies_form_nonExploded',
  request: {
    cookies: z.object({
      primitive: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'primitive',
            in: 'cookie',
            description: 'A `form` style, non-exploded primitive.',
            style: 'form',
            explode: false,
            schema: { type: 'string' },
            required: false,
          },
        }),
      array: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'array',
            in: 'cookie',
            description:
              "A `form` style, non-exploded array.\n\n> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.",
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'object',
            in: 'cookie',
            description:
              "A `form` style, non-exploded object\n\n> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.",
            style: 'form',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
            required: false,
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getCookiesFormExplodedRoute = createRoute({
  method: 'get',
  path: '/cookies#formExploded',
  tags: ['Cookie'],
  summary: 'Form (exploded)',
  description:
    'Support and handling of cookie parameters with `style: form` and `explode: true` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)\n\n> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.',
  operationId: 'cookies_form_exploded',
  request: {
    cookies: z
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
        const spread = new Map<string, string[]>([
          ['name', ['object']],
          ['description', ['object']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          primitive: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'primitive',
                in: 'cookie',
                description: 'A `form` style, exploded primitive.',
                style: 'form',
                explode: true,
                schema: { type: 'string' },
                required: false,
              },
            }),
          array: z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
              z.array(z.string()),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'array',
                in: 'cookie',
                description:
                  "A `form` style, exploded array.\n\n> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.",
                style: 'form',
                explode: true,
                schema: { type: 'array', items: { type: 'string' } },
                required: false,
              },
            }),
          object: z
            .object({ name: z.string().exactOptional(), description: z.string().exactOptional() })
            .exactOptional()
            .openapi({
              param: {
                name: 'object',
                in: 'cookie',
                description:
                  "A `form` style, exploded object.\n\n> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.",
                style: 'form',
                explode: true,
                schema: {
                  type: 'object',
                  properties: { name: { type: 'string' }, description: { type: 'string' } },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingHeadersRoute = createRoute({
  method: 'get',
  path: '/anything/headers',
  tags: ['Header'],
  summary: 'Standard (no style)',
  description:
    'Support and handling of header parameters without `style` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)',
  operationId: 'headers_standard',
  request: {
    headers: z.object({
      primitive: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'primitive',
            in: 'header',
            description: 'A standard primitive.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      array: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'array',
            in: 'header',
            description:
              "A standard array.\n\n> Because headers cannot be duplicated, for an array'd header parameter to be sent it **must** have a `style` property present.",
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',').map((part) => part.trim())
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'object',
            in: 'header',
            description: 'A standard object.',
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
            required: false,
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingHeadersSimpleRoute = createRoute({
  method: 'get',
  path: '/anything/headers/simple',
  tags: ['Header'],
  summary: 'Simple (non-exploded)',
  description:
    'Support and handling of header parameters with `style: simple` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'headers_simple_nonExploded',
  request: {
    headers: z.object({
      primitive: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'primitive',
            in: 'header',
            description: 'A `simple` style, non-exploded primitive.',
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            required: false,
          },
        }),
      array: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'array',
            in: 'header',
            description: 'A `simple` style, non-exploded array.',
            style: 'simple',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',').map((part) => part.trim())
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'object',
            in: 'header',
            description: 'A `simple` style, non-exploded object.',
            style: 'simple',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
            required: false,
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingHeadersSimpleRoute = createRoute({
  method: 'post',
  path: '/anything/headers/simple',
  tags: ['Header'],
  summary: 'Simple (exploded)',
  description:
    'Support and handling of header parameters with `style: simple` and `explode: true` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'headers_simple_exploded',
  request: {
    headers: z.object({
      primitive: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'primitive',
            in: 'header',
            description: 'A `simple` style, exploded primitive.',
            style: 'simple',
            explode: true,
            schema: { type: 'string' },
            required: false,
          },
        }),
      array: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'array',
            in: 'header',
            description: 'A `simple` style, exploded array.',
            style: 'simple',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',').map((part) => part.trim())
            const entries: [string, string][] = []
            for (const part of parts) {
              const at = part.indexOf('=')
              const last = entries.at(-1)
              if (at >= 0) {
                entries.push([part.slice(0, at), part.slice(at + 1)])
              } else if (last === undefined) {
                return val
              } else {
                last[1] += ',' + part
              }
            }
            return Object.fromEntries(entries)
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'object',
            in: 'header',
            description: 'A `simple` style, exploded object.',
            style: 'simple',
            explode: true,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
            required: false,
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingPathPrimitiveArrayObjectRoute = createRoute({
  method: 'get',
  path: '/anything/path/{primitive}/{array}/{object}',
  tags: ['Path'],
  summary: 'Standard (no style)',
  description:
    'Support and handling of path parameters without `style` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)',
  operationId: 'paths_standard',
  request: {
    params: z.object({
      primitive: z
        .string()
        .openapi({
          param: {
            name: 'primitive',
            in: 'path',
            description: 'A standard primitive.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      array: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            name: 'array',
            in: 'path',
            description: 'A standard array.',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .openapi({
          param: {
            name: 'object',
            in: 'path',
            description: 'A standard object.',
            required: true,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingPathMatrixPrimitiveArrayObjectRoute = createRoute({
  method: 'get',
  path: '/anything/path/matrix/{primitive}/{array}/{object}',
  tags: ['Path'],
  summary: 'Matrix (non-exploded)',
  description:
    'Support and handling of path parameters with `style: matrix` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'paths_matrix_nonExploded',
  request: {
    params: z.object({
      primitive: z
        .preprocess(
          (val) =>
            typeof val !== 'string'
              ? val
              : val === ';primitive'
                ? ''
                : val.startsWith(';primitive=')
                  ? val.slice(11)
                  : undefined,
          z.string(),
        )
        .openapi({
          param: {
            name: 'primitive',
            in: 'path',
            description: 'A `matrix` style, non-exploded primitive.',
            required: true,
            style: 'matrix',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      array: z
        .preprocess(
          (val) =>
            typeof val !== 'string'
              ? val
              : (val === ';array'
                  ? ''
                  : val.startsWith(';array=')
                    ? val.slice(7)
                    : undefined
                )?.split(','),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'array',
            in: 'path',
            description: 'A `matrix` style, non-exploded array.',
            required: true,
            style: 'matrix',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            if (!val.startsWith(';object=')) return undefined
            const parts = val.slice(8).split(',')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.preprocess(
            (val) =>
              typeof val !== 'string'
                ? val
                : val === ';object'
                  ? ''
                  : val.startsWith(';object=')
                    ? val.slice(8)
                    : undefined,
            z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
          ),
        )
        .openapi({
          param: {
            name: 'object',
            in: 'path',
            description: 'A `matrix` style, non-exploded object.',
            required: true,
            style: 'matrix',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingPathMatrixPrimitiveArrayObjectRoute = createRoute({
  method: 'post',
  path: '/anything/path/matrix/{primitive}/{array}/{object}',
  tags: ['Path'],
  summary: 'Matrix (exploded)',
  description:
    'Support and handling of path parameters with `style: matrix` and `explode: true` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'paths_matrix_exploded',
  request: {
    params: z.object({
      primitive: z
        .preprocess(
          (val) =>
            typeof val !== 'string'
              ? val
              : val === ';primitive'
                ? ''
                : val.startsWith(';primitive=')
                  ? val.slice(11)
                  : undefined,
          z.string(),
        )
        .openapi({
          param: {
            name: 'primitive',
            in: 'path',
            description: 'A `matrix` style, exploded primitive.',
            required: true,
            style: 'matrix',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      array: z
        .preprocess(
          (val) =>
            typeof val !== 'string'
              ? val
              : (val === ';array'
                  ? ''
                  : val.startsWith(';array=')
                    ? val.slice(7)
                    : undefined
                )?.split(';array='),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'array',
            in: 'path',
            description: 'A `matrix` style, exploded array.',
            required: true,
            style: 'matrix',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            if (!val.startsWith(';')) return undefined
            const parts = val.slice(1).split(';')
            const entries: [string, string][] = []
            for (const part of parts) {
              const at = part.indexOf('=')
              const last = entries.at(-1)
              if (at >= 0) {
                entries.push([part.slice(0, at), part.slice(at + 1)])
              } else if (last === undefined) {
                return val
              } else {
                last[1] += ';' + part
              }
            }
            return Object.fromEntries(entries)
          },
          z.preprocess(
            (val) =>
              typeof val !== 'string'
                ? val
                : val === ';object'
                  ? ''
                  : val.startsWith(';object=')
                    ? val.slice(8)
                    : undefined,
            z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
          ),
        )
        .openapi({
          param: {
            name: 'object',
            in: 'path',
            description: 'A `matrix` style, exploded object.',
            required: true,
            style: 'matrix',
            explode: true,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingPathLabelPrimitiveArrayObjectRoute = createRoute({
  method: 'get',
  path: '/anything/path/label/{primitive}/{array}/{object}',
  tags: ['Path'],
  summary: 'Label (non-exploded)',
  description:
    'Support and handling of path parameters with `style: label` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'paths_label_nonExploded',
  request: {
    params: z.object({
      primitive: z
        .preprocess(
          (val) => (typeof val !== 'string' ? val : val.startsWith('.') ? val.slice(1) : undefined),
          z.string(),
        )
        .openapi({
          param: {
            name: 'primitive',
            in: 'path',
            description: 'A `label` style, non-exploded primitive.',
            required: true,
            style: 'label',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      array: z
        .preprocess(
          (val) =>
            typeof val !== 'string'
              ? val
              : (val.startsWith('.') ? val.slice(1) : undefined)?.split(','),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'array',
            in: 'path',
            description: 'A `label` style, non-exploded array.',
            required: true,
            style: 'label',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            if (!val.startsWith('.')) return undefined
            const parts = val.slice(1).split(',')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.preprocess(
            (val) =>
              typeof val !== 'string' ? val : val.startsWith('.') ? val.slice(1) : undefined,
            z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
          ),
        )
        .openapi({
          param: {
            name: 'object',
            in: 'path',
            description: 'A `label` style, non-exploded object.',
            required: true,
            style: 'label',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingPathLabelPrimitiveArrayObjectRoute = createRoute({
  method: 'post',
  path: '/anything/path/label/{primitive}/{array}/{object}',
  tags: ['Path'],
  summary: 'Label (exploded)',
  description:
    'Support and handling of cookie parameters with `style: label` and `explode: true` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'paths_label_exploded',
  request: {
    params: z.object({
      primitive: z
        .preprocess(
          (val) => (typeof val !== 'string' ? val : val.startsWith('.') ? val.slice(1) : undefined),
          z.string(),
        )
        .openapi({
          param: {
            name: 'primitive',
            in: 'path',
            description: 'A `label` style, exploded primitive.',
            required: true,
            style: 'label',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      array: z
        .preprocess(
          (val) =>
            typeof val !== 'string'
              ? val
              : (val.startsWith('.') ? val.slice(1) : undefined)?.split('.'),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'array',
            in: 'path',
            description: 'A `label` style, exploded array.',
            required: true,
            style: 'label',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            if (!val.startsWith('.')) return undefined
            const parts = val.slice(1).split('.')
            const entries: [string, string][] = []
            for (const part of parts) {
              const at = part.indexOf('=')
              const last = entries.at(-1)
              if (at >= 0) {
                entries.push([part.slice(0, at), part.slice(at + 1)])
              } else if (last === undefined) {
                return val
              } else {
                last[1] += '.' + part
              }
            }
            return Object.fromEntries(entries)
          },
          z.preprocess(
            (val) =>
              typeof val !== 'string' ? val : val.startsWith('.') ? val.slice(1) : undefined,
            z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
          ),
        )
        .openapi({
          param: {
            name: 'object',
            in: 'path',
            description: 'A `label` style, exploded object.',
            required: true,
            style: 'label',
            explode: true,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingPathSimplePrimitiveArrayObjectRoute = createRoute({
  method: 'get',
  path: '/anything/path/simple/{primitive}/{array}/{object}',
  tags: ['Path'],
  summary: 'Simple (non-exploded)',
  description:
    'Support and handling of path parameters with `style: simple` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'paths_simple_nonExploded',
  request: {
    params: z.object({
      primitive: z
        .string()
        .openapi({
          param: {
            name: 'primitive',
            in: 'path',
            description: 'A `simple` style, non-exploded primitive.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      array: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            name: 'array',
            in: 'path',
            description: 'A `simple` style, non-exploded array.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .openapi({
          param: {
            name: 'object',
            in: 'path',
            description: 'A `simple` style, non-exploded object.',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingPathSimplePrimitiveArrayObjectRoute = createRoute({
  method: 'post',
  path: '/anything/path/simple/{primitive}/{array}/{object}',
  tags: ['Path'],
  summary: 'Simple (exploded)',
  description:
    'Support and handling of path parameters with `style: simple` and `explode: true` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'paths_simple_exploded',
  request: {
    params: z.object({
      primitive: z
        .string()
        .openapi({
          param: {
            name: 'primitive',
            in: 'path',
            description: 'A `simple` style, exploded primitive.',
            required: true,
            style: 'simple',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      array: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            name: 'array',
            in: 'path',
            description: 'A `simple` style, exploded array.',
            required: true,
            style: 'simple',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',')
            const entries: [string, string][] = []
            for (const part of parts) {
              const at = part.indexOf('=')
              const last = entries.at(-1)
              if (at >= 0) {
                entries.push([part.slice(0, at), part.slice(at + 1)])
              } else if (last === undefined) {
                return val
              } else {
                last[1] += ',' + part
              }
            }
            return Object.fromEntries(entries)
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .openapi({
          param: {
            name: 'object',
            in: 'path',
            description: 'A `simple` style, exploded object.',
            required: true,
            style: 'simple',
            explode: true,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingQueryRoute = createRoute({
  method: 'get',
  path: '/anything/query',
  tags: ['Query'],
  summary: 'Standard (no style)',
  description:
    'Support and handling of query parameters without `style` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)',
  operationId: 'query_standard',
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
        const spread = new Map<string, string[]>([
          ['name', ['object']],
          ['description', ['object']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          primitive: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'primitive',
                in: 'query',
                description: 'A standard primitive.',
                schema: { type: 'string' },
                required: false,
              },
            }),
          array: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'array',
                in: 'query',
                description: 'A standard array.',
                schema: { type: 'array', items: { type: 'string' } },
                required: false,
              },
            }),
          object: z
            .object({ name: z.string().exactOptional(), description: z.string().exactOptional() })
            .exactOptional()
            .openapi({
              param: {
                name: 'object',
                in: 'query',
                description: 'A standard object.',
                schema: {
                  type: 'object',
                  properties: { name: { type: 'string' }, description: { type: 'string' } },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingQueryFormRoute = createRoute({
  method: 'get',
  path: '/anything/query/form',
  tags: ['Query'],
  summary: 'Form (non-exploded)',
  description:
    'Support and handling of query parameters with `style: form` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'query_form_nonExploded',
  request: {
    query: z.object({
      primitive: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'primitive',
            in: 'query',
            description: 'A `form` style, non-exploded primitive.',
            style: 'form',
            explode: false,
            schema: { type: 'string' },
            required: false,
          },
        }),
      array: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'array',
            in: 'query',
            description: 'A `form` style, non-exploded array.',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'object',
            in: 'query',
            description: 'A `form` style, non-exploded object.',
            style: 'form',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
            required: false,
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingQueryFormRoute = createRoute({
  method: 'post',
  path: '/anything/query/form',
  tags: ['Query'],
  summary: 'Form (exploded)',
  description:
    'Support and handling of cookie parameters with `style: form` and `explode: true` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'query_form_exploded',
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
        const spread = new Map<string, string[]>([
          ['name', ['object']],
          ['description', ['object']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          primitive: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'primitive',
                in: 'query',
                description: 'A `form` style, exploded primitive.',
                style: 'form',
                explode: true,
                schema: { type: 'string' },
                required: false,
              },
            }),
          array: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'array',
                in: 'query',
                description: 'A `form` style, exploded array.',
                style: 'form',
                explode: true,
                schema: { type: 'array', items: { type: 'string' } },
                required: false,
              },
            }),
          object: z
            .object({ name: z.string().exactOptional(), description: z.string().exactOptional() })
            .exactOptional()
            .openapi({
              param: {
                name: 'object',
                in: 'query',
                description: 'A `form` style, exploded object.',
                style: 'form',
                explode: true,
                schema: {
                  type: 'object',
                  properties: { name: { type: 'string' }, description: { type: 'string' } },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingQuerySpaceDelimitedRoute = createRoute({
  method: 'get',
  path: '/anything/query/spaceDelimited',
  tags: ['Query'],
  summary: 'spaceDelimited (non-exploded)',
  description:
    'Support and handling of cookie parameters with `style: spaceDelimited` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'query_spaceDelimited_nonExploded',
  request: {
    query: z.object({
      array: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(' ') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'array',
            in: 'query',
            description: 'A `spaceDelimited` style, non-exploded primitive.',
            style: 'spaceDelimited',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(' ')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'object',
            in: 'query',
            description:
              'A `spaceDelimited` style, non-exploded array.\n\n>⚠️ This is currently unsupported.',
            style: 'spaceDelimited',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
            required: false,
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingQueryPipeDelimitedRoute = createRoute({
  method: 'get',
  path: '/anything/query/pipeDelimited',
  tags: ['Query'],
  summary: 'pipeDelimited (non-exploded)',
  description:
    'Support and handling of cookie parameters with `style: pipeDelimited` and `explode: false` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'query_pipeDelimited_nonExploded',
  request: {
    query: z.object({
      array: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split('|') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'array',
            in: 'query',
            description: 'A `pipeDelimited` style, non-exploded primitive.',
            style: 'pipeDelimited',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      object: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split('|')
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({ name: z.string().exactOptional(), description: z.string().exactOptional() }),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'object',
            in: 'query',
            description:
              'A `pipeDelimited` style, non-exploded object.\n\n>⚠️ This is currently unsupported.',
            style: 'pipeDelimited',
            explode: false,
            schema: {
              type: 'object',
              properties: { name: { type: 'string' }, description: { type: 'string' } },
            },
            required: false,
          },
          required: [],
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingQueryDeepObjectRoute = createRoute({
  method: 'get',
  path: '/anything/query/deepObject',
  tags: ['Query'],
  summary: 'deepObject (exploded)',
  description:
    'Support and handling of cookie parameters with `style: deepObject` and `explode: true` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)',
  operationId: 'query_deepObject_nonExploded',
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
        const deep: string[] = ['object']
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
          object: z
            .object({ name: z.string().exactOptional(), description: z.string().exactOptional() })
            .exactOptional()
            .openapi({
              param: {
                name: 'object',
                in: 'query',
                description: 'A `deepObject` style, exploded object.',
                style: 'deepObject',
                explode: true,
                schema: {
                  type: 'object',
                  properties: { name: { type: 'string' }, description: { type: 'string' } },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingFormDataRoute = createRoute({
  method: 'post',
  path: '/anything/form-data',
  tags: ['multipart/form-data Encoding'],
  summary: 'Standard (no encoding)',
  description:
    'Support and handling of a `multipart/form-data` request body without `encoding` serialization.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)',
  operationId: 'formData_standard',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              primitive: z
                .string()
                .exactOptional()
                .openapi({ description: 'A standard primitive.' }),
              array: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'A standard array.' }),
              object: z
                .object({ foo: z.string().exactOptional(), bar: z.string().exactOptional() })
                .exactOptional()
                .openapi({ description: 'A standard object.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putAnythingFormDataFormRoute = createRoute({
  method: 'put',
  path: '/anything/form-data/form',
  tags: ['multipart/form-data Encoding'],
  summary: 'Form (exploded)',
  description:
    'Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: true`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)',
  operationId: 'form_data_form_exploded',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              primitive: z
                .string()
                .exactOptional()
                .openapi({ description: 'A `form` style, exploded primitive.' }),
              array: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'A `form` style, exploded array.' }),
              object: z
                .object({ foo: z.string().exactOptional(), bar: z.string().exactOptional() })
                .exactOptional()
                .openapi({ description: 'A `form` style, exploded object.', required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { primitive: {}, array: {}, object: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingFormDataFormRoute = createRoute({
  method: 'post',
  path: '/anything/form-data/form',
  tags: ['multipart/form-data Encoding'],
  summary: 'Form (non-exploded)',
  description:
    'Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: false`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)',
  operationId: 'formData_form_nonExploded',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              primitive: z
                .string()
                .exactOptional()
                .openapi({ description: 'A `form` style, non-exploded primitive.' }),
              array: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'A `form` style, non-exploded array.' }),
              object: z
                .object({ foo: z.string().exactOptional(), bar: z.string().exactOptional() })
                .exactOptional()
                .openapi({ description: 'A `form` style, non-exploded object.', required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { primitive: {}, array: {}, object: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingFormDataSpaceDelimitedRoute = createRoute({
  method: 'post',
  path: '/anything/form-data/spaceDelimited',
  tags: ['multipart/form-data Encoding'],
  summary: 'spaceDelimited (non-exploded)',
  description:
    'Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: spaceDelimited` and `explode: false`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)',
  operationId: 'formData_spaceDelimited_nonExploded',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              array: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'A `spaceDelimited` style, non-exploded array.' }),
              object: z
                .object({ foo: z.string().exactOptional(), bar: z.string().exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'A `spaceDelimited` style, non-exploded object.\n\n>⚠️ This is currently unsupported.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
          encoding: { primitive: {}, array: {}, object: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingFormDataPipeDelimitedRoute = createRoute({
  method: 'post',
  path: '/anything/form-data/pipeDelimited',
  tags: ['multipart/form-data Encoding'],
  summary: 'pipeDelimited (non-exploded)',
  description:
    'Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: pipeDelimited` and `explode: false`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)',
  operationId: 'form_data_pipeDelimited_nonExploded',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              array: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'A `pipeDelimited` style, non-exploded array.' }),
              object: z
                .object({ foo: z.string().exactOptional(), bar: z.string().exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'A `pipeDelimited` style, non-exploded object.\n\n>⚠️ This is currently unsupported.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
          encoding: { primitive: {}, array: {}, object: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingFormDataDeepObjectRoute = createRoute({
  method: 'post',
  path: '/anything/form-data/deepObject',
  tags: ['multipart/form-data Encoding'],
  summary: 'deepObject (exploded)',
  description:
    'Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: deepObject` and `explode: false`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)',
  operationId: 'form_data_deepObject_exploded',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              primitive: z
                .string()
                .exactOptional()
                .openapi({ description: 'A `deepObject` style, non-exploded primitive.' }),
              array: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'A `deepObject` style, non-exploded array.' }),
              object: z
                .object({ foo: z.string().exactOptional(), bar: z.string().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'A `deepObject` style, non-exploded object.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
          encoding: { primitive: {}, array: {}, object: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})
