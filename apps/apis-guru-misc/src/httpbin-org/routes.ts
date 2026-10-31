import { createRoute, z } from '@hono/zod-openapi'

const PostRedirectToRequestBody = {
  content: {
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          status_code: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .exactOptional(),
          url: z.string(),
        })
        .openapi({ required: ['url'] }),
    },
  },
  required: true,
}

export const getAbsoluteRedirectNRoute = createRoute({
  method: 'get',
  path: '/absolute-redirect/{n}',
  tags: ['Redirects'],
  summary: 'Absolutely 302 Redirects n times.',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({ param: { in: 'path', name: 'n', required: true, schema: { type: 'integer' } } }),
    }),
  },
  responses: { 302: { description: 'A redirection.' } },
})

export const getAnythingRoute = createRoute({
  method: 'get',
  path: '/anything',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  responses: { 200: { description: 'Anything passed in request' } },
})

export const putAnythingRoute = createRoute({
  method: 'put',
  path: '/anything',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  responses: { 200: { description: 'Anything passed in request' } },
})

export const postAnythingRoute = createRoute({
  method: 'post',
  path: '/anything',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  responses: { 200: { description: 'Anything passed in request' } },
})

export const deleteAnythingRoute = createRoute({
  method: 'delete',
  path: '/anything',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  responses: { 200: { description: 'Anything passed in request' } },
})

export const patchAnythingRoute = createRoute({
  method: 'patch',
  path: '/anything',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  responses: { 200: { description: 'Anything passed in request' } },
})

export const traceAnythingRoute = createRoute({
  method: 'trace',
  path: '/anything',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  responses: { 200: { description: 'Anything passed in request' } },
})

export const getAnythingAnythingRoute = createRoute({
  method: 'get',
  path: '/anything/{anything}',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  request: {
    params: z.object({
      anything: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'anything',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Anything passed in request' } },
})

export const putAnythingAnythingRoute = createRoute({
  method: 'put',
  path: '/anything/{anything}',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  request: {
    params: z.object({
      anything: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'anything',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Anything passed in request' } },
})

export const postAnythingAnythingRoute = createRoute({
  method: 'post',
  path: '/anything/{anything}',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  request: {
    params: z.object({
      anything: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'anything',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Anything passed in request' } },
})

export const deleteAnythingAnythingRoute = createRoute({
  method: 'delete',
  path: '/anything/{anything}',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  request: {
    params: z.object({
      anything: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'anything',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Anything passed in request' } },
})

export const patchAnythingAnythingRoute = createRoute({
  method: 'patch',
  path: '/anything/{anything}',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  request: {
    params: z.object({
      anything: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'anything',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Anything passed in request' } },
})

export const traceAnythingAnythingRoute = createRoute({
  method: 'trace',
  path: '/anything/{anything}',
  tags: ['Anything'],
  summary: 'Returns anything passed in request data.',
  request: {
    params: z.object({
      anything: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'anything',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Anything passed in request' } },
})

export const getBase64ValueRoute = createRoute({
  method: 'get',
  path: '/base64/{value}',
  tags: ['Dynamic data'],
  summary: 'Decodes base64url-encoded string.',
  request: {
    params: z.object({
      value: z
        .string()
        .default('SFRUUEJJTiBpcyBhd2Vzb21l')
        .openapi({
          param: {
            in: 'path',
            name: 'value',
            required: true,
            schema: { default: 'SFRUUEJJTiBpcyBhd2Vzb21l', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Decoded base64 content.' } },
})

export const getBasicAuthUserPasswdRoute = createRoute({
  method: 'get',
  path: '/basic-auth/{user}/{passwd}',
  tags: ['Auth'],
  summary: 'Prompts the user for authorization using HTTP Basic Auth.',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user', required: true, schema: { type: 'string' } },
        }),
      passwd: z
        .string()
        .openapi({
          param: { in: 'path', name: 'passwd', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Sucessful authentication.' },
    401: { description: 'Unsuccessful authentication.' },
  },
})

export const getBearerRoute = createRoute({
  method: 'get',
  path: '/bearer',
  tags: ['Auth'],
  summary: 'Prompts the user for authorization using bearer authentication.',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Authorization',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Sucessful authentication.' },
    401: { description: 'Unsuccessful authentication.' },
  },
})

export const getBrotliRoute = createRoute({
  method: 'get',
  path: '/brotli',
  tags: ['Response formats'],
  summary: 'Returns Brotli-encoded data.',
  responses: { 200: { description: 'Brotli-encoded data.' } },
})

export const getBytesNRoute = createRoute({
  method: 'get',
  path: '/bytes/{n}',
  tags: ['Dynamic data'],
  summary: 'Returns n random bytes generated with given seed',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({ param: { in: 'path', name: 'n', required: true, schema: { type: 'integer' } } }),
    }),
  },
  responses: { 200: { description: 'Bytes.' } },
})

export const getCacheRoute = createRoute({
  method: 'get',
  path: '/cache',
  tags: ['Response inspection'],
  summary:
    'Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.',
  request: {
    headers: z.object({
      'If-Modified-Since': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Cached response' }, 304: { description: 'Modified' } },
})

export const getCacheValueRoute = createRoute({
  method: 'get',
  path: '/cache/{value}',
  tags: ['Response inspection'],
  summary: 'Sets a Cache-Control header for n seconds.',
  request: {
    params: z.object({
      value: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'value', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'Cache control set' } },
})

export const getCookiesRoute = createRoute({
  method: 'get',
  path: '/cookies',
  tags: ['Cookies'],
  summary: 'Returns cookie data.',
  responses: { 200: { description: 'Set cookies.' } },
})

export const getCookiesDeleteRoute = createRoute({
  method: 'get',
  path: '/cookies/delete',
  tags: ['Cookies'],
  summary: 'Deletes cookie(s) as provided by the query string and redirects to cookie list.',
  request: {
    query: z.object({
      freeform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            explode: true,
            in: 'query',
            name: 'freeform',
            schema: { additionalProperties: { type: 'string' }, type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Redirect to cookie list' } },
})

export const getCookiesSetRoute = createRoute({
  method: 'get',
  path: '/cookies/set',
  tags: ['Cookies'],
  summary: 'Sets cookie(s) as provided by the query string and redirects to cookie list.',
  request: {
    query: z.object({
      freeform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            explode: true,
            in: 'query',
            name: 'freeform',
            schema: { additionalProperties: { type: 'string' }, type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Redirect to cookie list' } },
})

export const getCookiesSetNameValueRoute = createRoute({
  method: 'get',
  path: '/cookies/set/{name}/{value}',
  tags: ['Cookies'],
  summary: 'Sets a cookie and redirects to cookie list.',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
      value: z
        .string()
        .openapi({
          param: { in: 'path', name: 'value', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Set cookies and redirects to cookie list.' } },
})

export const getDeflateRoute = createRoute({
  method: 'get',
  path: '/deflate',
  tags: ['Response formats'],
  summary: 'Returns Deflate-encoded data.',
  responses: { 200: { description: 'Defalte-encoded data.' } },
})

export const getDelayDelayRoute = createRoute({
  method: 'get',
  path: '/delay/{delay}',
  tags: ['Dynamic data'],
  summary: 'Returns a delayed response (max of 10 seconds).',
  request: {
    params: z.object({
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'delay', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'A delayed response.' } },
})

export const putDelayDelayRoute = createRoute({
  method: 'put',
  path: '/delay/{delay}',
  tags: ['Dynamic data'],
  summary: 'Returns a delayed response (max of 10 seconds).',
  request: {
    params: z.object({
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'delay', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'A delayed response.' } },
})

export const postDelayDelayRoute = createRoute({
  method: 'post',
  path: '/delay/{delay}',
  tags: ['Dynamic data'],
  summary: 'Returns a delayed response (max of 10 seconds).',
  request: {
    params: z.object({
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'delay', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'A delayed response.' } },
})

export const deleteDelayDelayRoute = createRoute({
  method: 'delete',
  path: '/delay/{delay}',
  tags: ['Dynamic data'],
  summary: 'Returns a delayed response (max of 10 seconds).',
  request: {
    params: z.object({
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'delay', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'A delayed response.' } },
})

export const patchDelayDelayRoute = createRoute({
  method: 'patch',
  path: '/delay/{delay}',
  tags: ['Dynamic data'],
  summary: 'Returns a delayed response (max of 10 seconds).',
  request: {
    params: z.object({
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'delay', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'A delayed response.' } },
})

export const traceDelayDelayRoute = createRoute({
  method: 'trace',
  path: '/delay/{delay}',
  tags: ['Dynamic data'],
  summary: 'Returns a delayed response (max of 10 seconds).',
  request: {
    params: z.object({
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'delay', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'A delayed response.' } },
})

export const deleteDeleteRoute = createRoute({
  method: 'delete',
  path: '/delete',
  tags: ['HTTP Methods'],
  summary: "The request's DELETE parameters.",
  responses: { 200: { description: "The request's DELETE parameters." } },
})

export const getDenyRoute = createRoute({
  method: 'get',
  path: '/deny',
  tags: ['Response formats'],
  summary: 'Returns page denied by robots.txt rules.',
  responses: { 200: { description: 'Denied message' } },
})

export const getDigestAuthQopUserPasswdRoute = createRoute({
  method: 'get',
  path: '/digest-auth/{qop}/{user}/{passwd}',
  tags: ['Auth'],
  summary: 'Prompts the user for authorization using Digest Auth.',
  request: {
    params: z.object({
      qop: z
        .string()
        .openapi({
          param: {
            description: 'auth or auth-int',
            in: 'path',
            name: 'qop',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user', required: true, schema: { type: 'string' } },
        }),
      passwd: z
        .string()
        .openapi({
          param: { in: 'path', name: 'passwd', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Sucessful authentication.' },
    401: { description: 'Unsuccessful authentication.' },
  },
})

export const getDigestAuthQopUserPasswdAlgorithmRoute = createRoute({
  method: 'get',
  path: '/digest-auth/{qop}/{user}/{passwd}/{algorithm}',
  tags: ['Auth'],
  summary: 'Prompts the user for authorization using Digest Auth + Algorithm.',
  request: {
    params: z.object({
      qop: z
        .string()
        .openapi({
          param: {
            description: 'auth or auth-int',
            in: 'path',
            name: 'qop',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user', required: true, schema: { type: 'string' } },
        }),
      passwd: z
        .string()
        .openapi({
          param: { in: 'path', name: 'passwd', required: true, schema: { type: 'string' } },
        }),
      algorithm: z
        .string()
        .default('MD5')
        .openapi({
          param: {
            description: 'MD5, SHA-256, SHA-512',
            in: 'path',
            name: 'algorithm',
            required: true,
            schema: { default: 'MD5', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Sucessful authentication.' },
    401: { description: 'Unsuccessful authentication.' },
  },
})

export const getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute = createRoute({
  method: 'get',
  path: '/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}',
  tags: ['Auth'],
  summary: 'Prompts the user for authorization using Digest Auth + Algorithm.',
  description: 'allow settings the stale_after argument.\n',
  request: {
    params: z.object({
      qop: z
        .string()
        .openapi({
          param: {
            description: 'auth or auth-int',
            in: 'path',
            name: 'qop',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user', required: true, schema: { type: 'string' } },
        }),
      passwd: z
        .string()
        .openapi({
          param: { in: 'path', name: 'passwd', required: true, schema: { type: 'string' } },
        }),
      algorithm: z
        .string()
        .default('MD5')
        .openapi({
          param: {
            description: 'MD5, SHA-256, SHA-512',
            in: 'path',
            name: 'algorithm',
            required: true,
            schema: { default: 'MD5', type: 'string' },
          },
        }),
      stale_after: z
        .string()
        .default('never')
        .openapi({
          param: {
            in: 'path',
            name: 'stale_after',
            required: true,
            schema: { default: 'never', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Sucessful authentication.' },
    401: { description: 'Unsuccessful authentication.' },
  },
})

export const getDripRoute = createRoute({
  method: 'get',
  path: '/drip',
  tags: ['Dynamic data'],
  summary: 'Drips data over a duration after an optional initial delay.',
  request: {
    query: z.object({
      duration: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of time (in seconds) over which to drip each byte',
            in: 'query',
            name: 'duration',
            required: false,
            schema: { default: 2, type: 'number' },
          },
        }),
      numbytes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of bytes to respond with',
            in: 'query',
            name: 'numbytes',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      code: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            description: 'The response code that will be returned',
            in: 'query',
            name: 'code',
            required: false,
            schema: { default: 200, type: 'integer' },
          },
        }),
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of time (in seconds) to delay before responding',
            in: 'query',
            name: 'delay',
            required: false,
            schema: { default: 2, type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A dripped response.' } },
})

export const getEncodingUtf8Route = createRoute({
  method: 'get',
  path: '/encoding/utf8',
  tags: ['Response formats'],
  summary: 'Returns a UTF-8 encoded body.',
  responses: { 200: { description: 'Encoded UTF-8 content.' } },
})

export const getEtagEtagRoute = createRoute({
  method: 'get',
  path: '/etag/{etag}',
  tags: ['Response inspection'],
  summary:
    'Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'If-Match', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      etag: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'etag',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Normal response' }, 412: { description: 'match' } },
})

export const getGetRoute = createRoute({
  method: 'get',
  path: '/get',
  tags: ['HTTP Methods'],
  summary: "The request's query parameters.",
  responses: { 200: { description: "The request's query parameters." } },
})

export const getGzipRoute = createRoute({
  method: 'get',
  path: '/gzip',
  tags: ['Response formats'],
  summary: 'Returns GZip-encoded data.',
  responses: { 200: { description: 'GZip-encoded data.' } },
})

export const getHeadersRoute = createRoute({
  method: 'get',
  path: '/headers',
  tags: ['Request inspection'],
  summary: "Return the incoming request's HTTP headers.",
  responses: { 200: { description: "The request's headers." } },
})

export const getHiddenBasicAuthUserPasswdRoute = createRoute({
  method: 'get',
  path: '/hidden-basic-auth/{user}/{passwd}',
  tags: ['Auth'],
  summary: 'Prompts the user for authorization using HTTP Basic Auth.',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user', required: true, schema: { type: 'string' } },
        }),
      passwd: z
        .string()
        .openapi({
          param: { in: 'path', name: 'passwd', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Sucessful authentication.' },
    404: { description: 'Unsuccessful authentication.' },
  },
})

export const getHtmlRoute = createRoute({
  method: 'get',
  path: '/html',
  tags: ['Response formats'],
  summary: 'Returns a simple HTML document.',
  responses: { 200: { description: 'An HTML page.' } },
})

export const getImageRoute = createRoute({
  method: 'get',
  path: '/image',
  tags: ['Images'],
  summary: 'Returns a simple image of the type suggest by the Accept header.',
  responses: { 200: { description: 'An image.' } },
})

export const getImageJpegRoute = createRoute({
  method: 'get',
  path: '/image/jpeg',
  tags: ['Images'],
  summary: 'Returns a simple JPEG image.',
  responses: { 200: { description: 'A JPEG image.' } },
})

export const getImagePngRoute = createRoute({
  method: 'get',
  path: '/image/png',
  tags: ['Images'],
  summary: 'Returns a simple PNG image.',
  responses: { 200: { description: 'A PNG image.' } },
})

export const getImageSvgRoute = createRoute({
  method: 'get',
  path: '/image/svg',
  tags: ['Images'],
  summary: 'Returns a simple SVG image.',
  responses: { 200: { description: 'An SVG image.' } },
})

export const getImageWebpRoute = createRoute({
  method: 'get',
  path: '/image/webp',
  tags: ['Images'],
  summary: 'Returns a simple WEBP image.',
  responses: { 200: { description: 'A WEBP image.' } },
})

export const getIpRoute = createRoute({
  method: 'get',
  path: '/ip',
  tags: ['Request inspection'],
  summary: "Returns the requester's IP Address.",
  responses: { 200: { description: "The Requester's IP Address." } },
})

export const getJsonRoute = createRoute({
  method: 'get',
  path: '/json',
  tags: ['Response formats'],
  summary: 'Returns a simple JSON document.',
  responses: { 200: { description: 'An JSON document.' } },
})

export const getLinksNOffsetRoute = createRoute({
  method: 'get',
  path: '/links/{n}/{offset}',
  tags: ['Dynamic data'],
  summary: 'Generate a page containing n links to other pages which do the same.',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({ param: { in: 'path', name: 'n', required: true, schema: { type: 'integer' } } }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'offset', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'HTML links.' } },
})

export const patchPatchRoute = createRoute({
  method: 'patch',
  path: '/patch',
  tags: ['HTTP Methods'],
  summary: "The request's PATCH parameters.",
  responses: { 200: { description: "The request's PATCH parameters." } },
})

export const postPostRoute = createRoute({
  method: 'post',
  path: '/post',
  tags: ['HTTP Methods'],
  summary: "The request's POST parameters.",
  responses: { 200: { description: "The request's POST parameters." } },
})

export const putPutRoute = createRoute({
  method: 'put',
  path: '/put',
  tags: ['HTTP Methods'],
  summary: "The request's PUT parameters.",
  responses: { 200: { description: "The request's PUT parameters." } },
})

export const getRangeNumbytesRoute = createRoute({
  method: 'get',
  path: '/range/{numbytes}',
  tags: ['Dynamic data'],
  summary: 'Streams n random bytes generated with given seed, at given chunk size per packet.',
  request: {
    params: z.object({
      numbytes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'numbytes', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'Bytes.' } },
})

export const getRedirectToRoute = createRoute({
  method: 'get',
  path: '/redirect-to',
  tags: ['Redirects'],
  summary: '302/3XX Redirects to the given URL.',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: { in: 'query', name: 'url', required: true, schema: { type: 'string' } },
        }),
      status_code: z
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
          param: { in: 'query', name: 'status_code', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: { 302: { description: 'A redirection.' } },
})

export const putRedirectToRoute = createRoute({
  method: 'put',
  path: '/redirect-to',
  tags: ['Redirects'],
  summary: '302/3XX Redirects to the given URL.',
  request: { body: PostRedirectToRequestBody },
  responses: { 302: { description: 'A redirection.' } },
})

export const postRedirectToRoute = createRoute({
  method: 'post',
  path: '/redirect-to',
  tags: ['Redirects'],
  summary: '302/3XX Redirects to the given URL.',
  request: { body: PostRedirectToRequestBody },
  responses: { 302: { description: 'A redirection.' } },
})

export const deleteRedirectToRoute = createRoute({
  method: 'delete',
  path: '/redirect-to',
  tags: ['Redirects'],
  summary: '302/3XX Redirects to the given URL.',
  responses: { 302: { description: 'A redirection.' } },
})

export const patchRedirectToRoute = createRoute({
  method: 'patch',
  path: '/redirect-to',
  tags: ['Redirects'],
  summary: '302/3XX Redirects to the given URL.',
  responses: { 302: { description: 'A redirection.' } },
})

export const traceRedirectToRoute = createRoute({
  method: 'trace',
  path: '/redirect-to',
  tags: ['Redirects'],
  summary: '302/3XX Redirects to the given URL.',
  responses: { 302: { description: 'A redirection.' } },
})

export const getRedirectNRoute = createRoute({
  method: 'get',
  path: '/redirect/{n}',
  tags: ['Redirects'],
  summary: '302 Redirects n times.',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({ param: { in: 'path', name: 'n', required: true, schema: { type: 'integer' } } }),
    }),
  },
  responses: { 302: { description: 'A redirection.' } },
})

export const getRelativeRedirectNRoute = createRoute({
  method: 'get',
  path: '/relative-redirect/{n}',
  tags: ['Redirects'],
  summary: 'Relatively 302 Redirects n times.',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({ param: { in: 'path', name: 'n', required: true, schema: { type: 'integer' } } }),
    }),
  },
  responses: { 302: { description: 'A redirection.' } },
})

export const getResponseHeadersRoute = createRoute({
  method: 'get',
  path: '/response-headers',
  tags: ['Response inspection'],
  summary: 'Returns a set of response headers from the query string.',
  request: {
    query: z.object({
      freeform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            explode: true,
            in: 'query',
            name: 'freeform',
            schema: { additionalProperties: { type: 'string' }, type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Response headers' } },
})

export const postResponseHeadersRoute = createRoute({
  method: 'post',
  path: '/response-headers',
  tags: ['Response inspection'],
  summary: 'Returns a set of response headers from the query string.',
  request: {
    query: z.object({
      freeform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            explode: true,
            in: 'query',
            name: 'freeform',
            schema: { additionalProperties: { type: 'string' }, type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Response headers' } },
})

export const getRobotsTxtRoute = createRoute({
  method: 'get',
  path: '/robots.txt',
  tags: ['Response formats'],
  summary: 'Returns some robots.txt rules.',
  responses: { 200: { description: 'Robots file' } },
})

export const getStatusCodesRoute = createRoute({
  method: 'get',
  path: '/status/{codes}',
  tags: ['Status codes'],
  summary: 'Return status code or random status code if more than one are given',
  request: {
    params: z.object({
      codes: z
        .string()
        .openapi({
          param: { in: 'path', name: 'codes', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    100: { description: 'Informational responses' },
    200: { description: 'Success' },
    300: { description: 'Redirection' },
    400: { description: 'Client Errors' },
    500: { description: 'Server Errors' },
  },
})

export const putStatusCodesRoute = createRoute({
  method: 'put',
  path: '/status/{codes}',
  tags: ['Status codes'],
  summary: 'Return status code or random status code if more than one are given',
  request: {
    params: z.object({
      codes: z
        .string()
        .openapi({
          param: { in: 'path', name: 'codes', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    100: { description: 'Informational responses' },
    200: { description: 'Success' },
    300: { description: 'Redirection' },
    400: { description: 'Client Errors' },
    500: { description: 'Server Errors' },
  },
})

export const postStatusCodesRoute = createRoute({
  method: 'post',
  path: '/status/{codes}',
  tags: ['Status codes'],
  summary: 'Return status code or random status code if more than one are given',
  request: {
    params: z.object({
      codes: z
        .string()
        .openapi({
          param: { in: 'path', name: 'codes', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    100: { description: 'Informational responses' },
    200: { description: 'Success' },
    300: { description: 'Redirection' },
    400: { description: 'Client Errors' },
    500: { description: 'Server Errors' },
  },
})

export const deleteStatusCodesRoute = createRoute({
  method: 'delete',
  path: '/status/{codes}',
  tags: ['Status codes'],
  summary: 'Return status code or random status code if more than one are given',
  request: {
    params: z.object({
      codes: z
        .string()
        .openapi({
          param: { in: 'path', name: 'codes', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    100: { description: 'Informational responses' },
    200: { description: 'Success' },
    300: { description: 'Redirection' },
    400: { description: 'Client Errors' },
    500: { description: 'Server Errors' },
  },
})

export const patchStatusCodesRoute = createRoute({
  method: 'patch',
  path: '/status/{codes}',
  tags: ['Status codes'],
  summary: 'Return status code or random status code if more than one are given',
  request: {
    params: z.object({
      codes: z
        .string()
        .openapi({
          param: { in: 'path', name: 'codes', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    100: { description: 'Informational responses' },
    200: { description: 'Success' },
    300: { description: 'Redirection' },
    400: { description: 'Client Errors' },
    500: { description: 'Server Errors' },
  },
})

export const traceStatusCodesRoute = createRoute({
  method: 'trace',
  path: '/status/{codes}',
  tags: ['Status codes'],
  summary: 'Return status code or random status code if more than one are given',
  request: {
    params: z.object({
      codes: z
        .string()
        .openapi({
          param: { in: 'path', name: 'codes', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    100: { description: 'Informational responses' },
    200: { description: 'Success' },
    300: { description: 'Redirection' },
    400: { description: 'Client Errors' },
    500: { description: 'Server Errors' },
  },
})

export const getStreamBytesNRoute = createRoute({
  method: 'get',
  path: '/stream-bytes/{n}',
  tags: ['Dynamic data'],
  summary: 'Streams n random bytes generated with given seed, at given chunk size per packet.',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({ param: { in: 'path', name: 'n', required: true, schema: { type: 'integer' } } }),
    }),
  },
  responses: { 200: { description: 'Bytes.' } },
})

export const getStreamNRoute = createRoute({
  method: 'get',
  path: '/stream/{n}',
  tags: ['Dynamic data'],
  summary: 'Stream n JSON responses',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({ param: { in: 'path', name: 'n', required: true, schema: { type: 'integer' } } }),
    }),
  },
  responses: { 200: { description: 'Streamed JSON responses.' } },
})

export const getUserAgentRoute = createRoute({
  method: 'get',
  path: '/user-agent',
  tags: ['Request inspection'],
  summary: "Return the incoming requests's User-Agent header.",
  responses: { 200: { description: "The request's User-Agent header." } },
})

export const getUuidRoute = createRoute({
  method: 'get',
  path: '/uuid',
  tags: ['Dynamic data'],
  summary: 'Return a UUID4.',
  responses: { 200: { description: 'A UUID4.' } },
})

export const getXmlRoute = createRoute({
  method: 'get',
  path: '/xml',
  tags: ['Response formats'],
  summary: 'Returns a simple XML document.',
  responses: { 200: { description: 'An XML document.' } },
})
