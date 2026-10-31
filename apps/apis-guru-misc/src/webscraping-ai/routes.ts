import { createRoute, z } from '@hono/zod-openapi'

const AccountSchema = z
  .object({
    remaining_api_calls: z
      .int()
      .exactOptional()
      .openapi({ description: 'Remaining API calls quota' }),
    remaining_concurrency: z
      .int()
      .exactOptional()
      .openapi({ description: 'Remaining concurrent requests' }),
    resets_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Next billing cycle start time (UNIX timestamp)' }),
  })
  .openapi({ title: 'Account limits info', required: [] })
  .openapi('Account')

const ErrorSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'Error description' }) })
  .openapi({ title: 'Generic error', required: [] })
  .openapi('Error')

const PageErrorSchema = z
  .object({
    status_code: z
      .int()
      .exactOptional()
      .openapi({ description: 'Response HTTP status code (403, 500, etc)' }),
    status_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Response HTTP status message' }),
  })
  .openapi({ title: 'Non-2xx and non-404 HTTP status code on the target page', required: [] })
  .openapi('PageError')

const SelectedAreasSchema = z
  .array(z.string())
  .openapi({
    description: 'Array of elements matched by selectors',
    title: 'HTML for selected page areas',
  })
  .openapi('SelectedAreas')

const _400Response = {
  description: 'Parameters validation error',
  content: {
    'application/json': { schema: ErrorSchema, example: { message: 'Invalid CSS selector' } },
  },
}

const _402Response = {
  description: "Billing issue, probably you've ran out of credits",
  content: { 'application/json': { schema: ErrorSchema, example: { message: 'Some error' } } },
}

const _403Response = {
  description: 'Wrong API key',
  content: { 'application/json': { schema: ErrorSchema, example: { message: 'Some error' } } },
}

const _429Response = {
  description: 'Too many concurrent requests',
  content: { 'application/json': { schema: ErrorSchema, example: { message: 'Some error' } } },
}

const _500Response = {
  description: 'Unexpected error, try again or contact support@webscraping.ai',
  content: { 'application/json': { schema: ErrorSchema, example: { message: 'Some error' } } },
}

const _502Response = {
  description: 'Non-2xx and non-404 HTTP status code on the target page',
  content: {
    'application/json': {
      schema: PageErrorSchema,
      example: { status_code: 500, status_message: 'Some website error' },
    },
  },
}

const _504Response = {
  description: 'Timeout error, try increasing timeout parameter value',
  content: { 'application/json': { schema: ErrorSchema, example: { message: 'Some error' } } },
}

const CountryParamsSchema = z
  .enum(['us', 'gb', 'de', 'it', 'fr', 'ca', 'es', 'ru', 'jp', 'kr'])
  .default('us')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Country of the proxy to use (US by default). Only available on Startup and Custom plans.',
      example: 'us',
      in: 'query',
      name: 'country',
      schema: {
        default: 'us',
        enum: ['us', 'gb', 'de', 'it', 'fr', 'ca', 'es', 'ru', 'jp', 'kr'],
        type: 'string',
      },
      required: false,
    },
  })

const DeviceParamsSchema = z
  .enum(['desktop', 'mobile', 'tablet'])
  .default('desktop')
  .exactOptional()
  .openapi({
    param: {
      description: 'Type of device emulation.',
      example: 'desktop',
      in: 'query',
      name: 'device',
      schema: { default: 'desktop', enum: ['desktop', 'mobile', 'tablet'], type: 'string' },
      required: false,
    },
  })

const ErrorOn_404ParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Return error on 404 HTTP status on the target page (false by default).',
      example: false,
      in: 'query',
      name: 'error_on_404',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const ErrorOnRedirectParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Return error on redirect on the target page (false by default).',
      example: false,
      in: 'query',
      name: 'error_on_redirect',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const HeadersParamsSchema = z
  .record(z.string(), z.string())
  .exactOptional()
  .openapi({
    param: {
      description:
        'HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})',
      example: '{"Cookie":"session=some_id"}',
      in: 'query',
      name: 'headers',
      schema: { additionalProperties: { type: 'string' }, type: 'object' },
      required: false,
    },
  })

const JsParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Execute on-page JavaScript using a headless browser (true by default)',
      example: true,
      in: 'query',
      name: 'js',
      schema: { default: true, type: 'boolean' },
      required: false,
    },
  })

const JsTimeoutParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(20000),
  )
  .default(2000)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Maximum JavaScript rendering time in ms. Increase it in case if you see a loading indicator instead of data on the target page.',
      example: 2000,
      in: 'query',
      name: 'js_timeout',
      schema: { default: 2000, maximum: 20000, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const PostUrlParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'URL of the target page',
      example: 'https://httpbin.org/post',
      in: 'query',
      name: 'url',
      required: true,
      schema: { type: 'string' },
    },
  })

const ProxyParamsSchema = z
  .enum(['datacenter', 'residential'])
  .default('datacenter')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.',
      example: 'datacenter',
      in: 'query',
      name: 'proxy',
      schema: { default: 'datacenter', enum: ['datacenter', 'residential'], type: 'string' },
      required: false,
    },
  })

const TimeoutParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(30000),
  )
  .default(10000)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Maximum processing time in ms. Increase it in case of timeout errors (10000 by default, maximum is 30000)',
      example: 10000,
      in: 'query',
      name: 'timeout',
      schema: { default: 10000, maximum: 30000, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const UrlParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'URL of the target page',
      example: 'https://example.com',
      in: 'query',
      name: 'url',
      required: true,
      schema: { type: 'string' },
    },
  })

const BodyRequestBody = {
  description: 'Request body to pass to the target page',
  content: {
    'application/json': { schema: z.looseObject({}) },
    'application/x-www-form-urlencoded': { schema: z.looseObject({}) },
    'application/xml': { schema: z.looseObject({}) },
    'text/plain': { schema: z.string() },
  },
}

const ApiKeySecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Account'],
  summary: 'Information about your account calls quota',
  description: 'Always returns JSON',
  operationId: 'account',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AccountSchema,
          example: {
            remaining_api_calls: 200000,
            remaining_concurrency: 100,
            resets_at: 1617073667,
          },
        },
      },
    },
    403: _403Response,
  },
})

export const getHtmlRoute = createRoute({
  method: 'get',
  path: '/html',
  tags: ['HTML'],
  summary: 'Page HTML by URL',
  description: 'Returns just HTML on success, JSON on error',
  operationId: 'getHTML',
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
        const open: string[] = ['headers']
        const taken: string[] = [
          'url',
          'timeout',
          'js',
          'js_timeout',
          'proxy',
          'country',
          'device',
          'error_on_404',
          'error_on_redirect',
        ]
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          url: UrlParamsSchema,
          headers: HeadersParamsSchema,
          timeout: TimeoutParamsSchema,
          js: JsParamsSchema,
          js_timeout: JsTimeoutParamsSchema,
          proxy: ProxyParamsSchema,
          country: CountryParamsSchema,
          device: DeviceParamsSchema,
          error_on_404: ErrorOn_404ParamsSchema,
          error_on_redirect: ErrorOnRedirectParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'text/html': {
          schema: z.string(),
          example:
            '<html><head>\n    <title>Example Domain</title>\n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n</body></html>',
        },
      },
    },
    400: _400Response,
    402: _402Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
})

export const getSelectedRoute = createRoute({
  method: 'get',
  path: '/selected',
  tags: ['Selected HTML'],
  summary: 'HTML of a selected page area by URL and CSS selector',
  description: 'Returns just HTML on success, JSON on error',
  operationId: 'getSelected',
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
        const open: string[] = ['headers']
        const taken: string[] = [
          'selector',
          'url',
          'timeout',
          'js',
          'js_timeout',
          'proxy',
          'country',
          'device',
          'error_on_404',
          'error_on_redirect',
        ]
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          selector: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                description: 'CSS selector (null by default, returns whole page HTML)',
                example: 'h1',
                in: 'query',
                name: 'selector',
                schema: { type: 'string' },
                required: false,
              },
            }),
          url: UrlParamsSchema,
          headers: HeadersParamsSchema,
          timeout: TimeoutParamsSchema,
          js: JsParamsSchema,
          js_timeout: JsTimeoutParamsSchema,
          proxy: ProxyParamsSchema,
          country: CountryParamsSchema,
          device: DeviceParamsSchema,
          error_on_404: ErrorOn_404ParamsSchema,
          error_on_redirect: ErrorOnRedirectParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'text/html': {
          schema: z.string(),
          example: '<a href="https://www.iana.org/domains/example">More information...</a>',
        },
      },
    },
    400: _400Response,
    402: _402Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
})

export const getSelectedMultipleRoute = createRoute({
  method: 'get',
  path: '/selected-multiple',
  tags: ['Selected HTML'],
  summary: 'HTML of multiple page areas by URL and CSS selectors',
  description: 'Always returns JSON',
  operationId: 'getSelectedMultiple',
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
        const open: string[] = ['headers']
        const taken: string[] = [
          'selectors',
          'url',
          'timeout',
          'js',
          'js_timeout',
          'proxy',
          'country',
          'device',
          'error_on_404',
          'error_on_redirect',
        ]
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          selectors: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .exactOptional()
            .openapi({
              param: {
                description: 'Multiple CSS selectors (null by default, returns whole page HTML)',
                example: ['h1'],
                in: 'query',
                name: 'selectors',
                schema: { items: { type: 'string' }, type: 'array' },
                required: false,
              },
            }),
          url: UrlParamsSchema,
          headers: HeadersParamsSchema,
          timeout: TimeoutParamsSchema,
          js: JsParamsSchema,
          js_timeout: JsTimeoutParamsSchema,
          proxy: ProxyParamsSchema,
          country: CountryParamsSchema,
          device: DeviceParamsSchema,
          error_on_404: ErrorOn_404ParamsSchema,
          error_on_redirect: ErrorOnRedirectParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: SelectedAreasSchema,
          example: ["<a href='/test'>some link</a>", 'Hello'],
        },
      },
    },
    400: _400Response,
    402: _402Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
})
