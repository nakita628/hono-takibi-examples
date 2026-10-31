import { createRoute, z } from '@hono/zod-openapi'

export const getApiV1CloudPluginRoute = createRoute({
  method: 'get',
  path: '/api/v1/cloud-plugin',
  summary: 'Evaluate Wolfram Language code',
  externalDocs: { url: 'https://reference.wolfram.com/language/' },
  operationId: 'getWolframCloudResults',
  request: {
    query: z.object({
      input: z
        .string()
        .openapi({
          param: {
            description: 'the input expression',
            in: 'query',
            name: 'input',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The result of the Wolfram Language evaluation', content: {} },
    400: { description: "The request is missing the 'input' parameter" },
    403: { description: 'Unauthorized' },
    500: { description: 'Wolfram Cloud was unable to generate a result' },
    503: {
      description: 'Service temporarily unavailable. This may be the result of too many requests.',
    },
  },
})

export const getApiV1LlmApiRoute = createRoute({
  method: 'get',
  path: '/api/v1/llm-api',
  summary: 'Get Wolfram|Alpha results',
  externalDocs: { url: 'https://products.wolframalpha.com/api' },
  operationId: 'getWolframAlphaResults',
  request: {
    query: z.object({
      input: z
        .string()
        .openapi({
          param: {
            description: 'the input',
            in: 'query',
            name: 'input',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The result of the Wolfram|Alpha query', content: {} },
    400: { description: "The request is missing the 'input' parameter" },
    403: { description: 'Unauthorized' },
    500: { description: 'Wolfram|Alpha was unable to generate a result' },
    501: { description: 'Wolfram|Alpha was unable to generate a result' },
    503: {
      description: 'Service temporarily unavailable. This may be the result of too many requests.',
    },
  },
})
