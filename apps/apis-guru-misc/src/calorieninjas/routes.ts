import { createRoute, z } from '@hono/zod-openapi'

const XApiKeySecurityScheme = { in: 'header', name: 'api_key', type: 'apiKey' }

export const getV1NutritionRoute = createRoute({
  method: 'get',
  path: '/v1/nutrition',
  summary: 'Get nutrition text for an input string containing food and beverage words.',
  description:
    'Returns a list of food item nutrition facts extracted from an input string containing food and beverage words. ',
  externalDocs: { url: 'www.calorieninjas.com/api' },
  request: {
    query: z.object({
      query: z
        .string()
        .min(0)
        .max(1500)
        .openapi({
          param: {
            description: 'Input query containing food and/or beverage words.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { maxLength: 1500, minLength: 0, type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})
