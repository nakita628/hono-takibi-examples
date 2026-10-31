import { createRoute, z } from '@hono/zod-openapi'

const TagSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const PetSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().openapi({ example: 'doggie' }),
    photoUrls: z.array(z.string()),
    tags: z.array(TagSchema).exactOptional(),
    status: z
      .enum(['available', 'pending', 'sold'])
      .exactOptional()
      .openapi({ description: 'pet status in the store' }),
  })
  .openapi({ required: ['name', 'photoUrls'] })
  .openapi('Pet')

const PetstoreAuthSecurityScheme = {
  type: 'oauth2',
  flows: {
    implicit: {
      authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
      scopes: { 'write:pets': 'modify pets in your account', 'read:pets': 'read your pets' },
    },
  },
}

export const getXCodeSamplesRoute = createRoute({
  method: 'get',
  path: '/x-code-samples',
  tags: ['Custom code samples'],
  summary: 'Custom code samples with the "x-code-samples" extension',
  description:
    'This is a demonstration of our handling of our `x-code-samples` extension.\n\n> If this is present alongside `x-readme.code-samples` then the `x-readme.code-samples` extension will take precedence over this extension.\n\nhttps://docs.readme.com/docs/openapi-extensions#custom-code-samples',
  operationId: 'x-code-samples',
  responses: { 200: { description: 'OK' } },
})

export const postXCodeSamplesRoute = createRoute({
  method: 'post',
  path: '/x-code-samples',
  tags: ['Custom code samples'],
  summary: 'Custom code samples with the "x-readme.code-samples" extension',
  description:
    'This is a demonstration of our handling of our `x-readme.code-samples` extension.\n\nhttps://docs.readme.com/docs/openapi-extensions#custom-code-samples',
  operationId: 'x-readme_code-samples',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TagSchema,
          examples: {
            userRegistration: {
              value: { id: 1234, email: 'test@example.com', name: 'Test user name' },
            },
            'userRegistration alt': {
              value: { id: 5678, email: 'test@example.com', name: 'Test user name' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postXHeadersRoute = createRoute({
  method: 'post',
  path: '/x-headers',
  tags: ['Statically defined headers'],
  summary: 'Static headers with the "x-readme.headers" extension',
  description:
    'This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.\n\nIn this case we have statically defined an `x-api-key` header with the value of `static-value`.\n\nhttps://docs.readme.com/docs/openapi-extensions#static-headers',
  operationId: 'x-readme_headers',
  responses: { 200: { description: 'OK' } },
})

export const patchXHeadersRoute = createRoute({
  method: 'patch',
  path: '/x-headers',
  tags: ['Statically defined headers'],
  summary: 'Static headers with the "x-headers" extension',
  description:
    'This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.\n\nIn this case we have statically defined an `x-api-key` header with the value of `static-value`.\n\n> If this is present alongside `x-readme.headers` then the `x-readme.headers` extension will take precedence over this extension.\n\nhttps://docs.readme.com/docs/openapi-extensions#static-headers',
  operationId: 'x-headers',
  responses: { 200: { description: 'OK' } },
})

export const postXExplorerEnabledRoute = createRoute({
  method: 'post',
  path: '/x-explorer-enabled',
  tags: ['Toggling interactivity'],
  summary: 'Disable interactivity with the "x-readme.explorer-enabled" extension',
  description:
    'When `x-readme.explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.\n\nhttps://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer',
  operationId: 'x-readme_explorer-enabled',
  request: { body: { content: { 'application/json': { schema: PetSchema } }, required: true } },
  responses: { 200: { description: 'OK' } },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const patchXExplorerEnabledRoute = createRoute({
  method: 'patch',
  path: '/x-explorer-enabled',
  tags: ['Toggling interactivity'],
  summary: 'Disable interactivity with the "x-explorer-enabled" extension',
  description:
    'When `x-explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.\n\nIn this case we have statically defined an `x-api-key` header with the value of `static-value`.\n\n> If this is present alongside `x-readme.explorer-enabled` then the `x-readme.explorer-enabled` extension will take precedence over this extension.\n\nhttps://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer',
  operationId: 'x-explorer-enabled',
  request: { body: { content: { 'application/json': { schema: PetSchema } }, required: true } },
  responses: { 200: { description: 'OK' } },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getXSamplesLanguagesRoute = createRoute({
  method: 'get',
  path: '/x-samples-languages',
  tags: ['Designate code sample languages'],
  summary: 'Control available code sample languages the "x-readme.samples-languages" extension',
  description:
    'With an array of languages present in `x-readme.samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.\n\nhttps://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages',
  operationId: 'x-readme_samples-languages',
  responses: { 200: { description: 'OK' } },
})

export const postXSamplesLanguagesRoute = createRoute({
  method: 'post',
  path: '/x-samples-languages',
  tags: ['Designate code sample languages'],
  summary: 'Control available code sample languages the "x-samples-languages" extension',
  description:
    'With an array of languages present in `x-samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.\n\n> If this is present alongside `x-readme.samples-languages` then the `x-readme.samples-languages` extension will take precedence over this extension.\n\nhttps://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages',
  operationId: 'x-samples-languages',
  responses: { 200: { description: 'OK' } },
})

export const postXProxyEnabledRoute = createRoute({
  method: 'post',
  path: '/x-proxy-enabled',
  tags: ['Toggling our CORS proxy'],
  summary:
    'Disable funneling requests through our CORS proxy with the "x-readme.proxy-enabled" extension',
  description:
    'When `x-readme.proxy-enabled` is set to `false` all requests from the interactive API Explorer will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.\n\nhttps://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled',
  operationId: 'x-readme_proxy-enabled',
  responses: { 200: { description: 'OK' } },
})

export const patchXProxyEnabledRoute = createRoute({
  method: 'patch',
  path: '/x-proxy-enabled',
  tags: ['Toggling our CORS proxy'],
  summary: 'Disable funneling requests through our CORS proxy with the "x-proxy-enabled" extension',
  description:
    'When `x-proxy-enabled` is set to `false` all requests from the interactive API Explorer will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.\n\n> If this is present alongside `x-readme.proxy-enabled` then the `x-readme.proxy-enabled` extension will take precedence over this extension.\n\nhttps://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled',
  operationId: 'x-proxy-enabled',
  responses: { 200: { description: 'OK' } },
})

export const postXMetricsEnabledRoute = createRoute({
  method: 'post',
  path: '/x-metrics-enabled',
  tags: ['Toggling API Metrics'],
  summary:
    'Disable tracking requests through our API Metrics product with the "x-readme.metrics-enabled" extension',
  description:
    'When `x-readme.metrics-enabled` is set to `false` all requests from the interactive API Explorer will not be tracked for you within our [API Metrics product](https://readme.com/metrics) and you will not see any requests on that operations reference page that may have been logged to API Metrics through one of our many SDKs.\n\nhttps://docs.readme.com/docs/openapi-extensions#disable-api-metrics',
  operationId: 'x-readme_metrics-enabled',
  responses: { 200: { description: 'OK' } },
})

export const patchXMetricsEnabledRoute = createRoute({
  method: 'patch',
  path: '/x-metrics-enabled',
  tags: ['Toggling API Metrics'],
  summary:
    'Disable tracking requests through our API Metrics product with the "x-metrics-enabled" extension',
  description:
    'When `x-metrics-enabled` is set to `false` all requests from the interactive API Explorer will not be tracked for you within our [API Metrics product](https://readme.com/metrics) and you will not see any requests on that operations reference page that may have been logged to API Metrics through one of our many SDKs.\n\nhttps://docs.readme.com/docs/openapi-extensions#disable-api-metrics',
  operationId: 'x-metrics-enabled',
  responses: { 200: { description: 'OK' } },
})
