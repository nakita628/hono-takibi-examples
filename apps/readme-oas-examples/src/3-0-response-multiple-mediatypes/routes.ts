import { createRoute, z } from '@hono/zod-openapi'

export const postMultipleTypesMultipleExamplesRoute = createRoute({
  method: 'post',
  path: '/multiple-types-multiple-examples',
  summary: 'Multiple response types with multiple examples',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'string (format: date)': z.iso.date().exactOptional(),
              'string (format: date-time)': z.iso.datetime({ offset: true }).exactOptional(),
              'string (format: string)': z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    400: { description: 'Validation failed', content: {} },
  },
})

export const postMultipleTypesSingleExampleRoute = createRoute({
  method: 'post',
  path: '/multiple-types-single-example',
  summary: 'Multiple response types with a single example',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'string (format: date)': z.iso.date().exactOptional(),
              'string (format: date-time)': z.iso.datetime({ offset: true }).exactOptional(),
              'string (format: string)': z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    400: { description: 'Validation failed', content: {} },
  },
})

export const getSingleTypeMultipleExamplesRoute = createRoute({
  method: 'get',
  path: '/single-type-multiple-examples',
  summary: 'Single media type with multiple examples',
  responses: {
    200: { description: 'OK', content: {} },
    400: { description: 'Validation failed', content: {} },
  },
})

export const getSingleTypeSingleExampleRoute = createRoute({
  method: 'get',
  path: '/single-type-single-example',
  summary: 'Single media type with a single example',
  responses: {
    200: { description: 'OK', content: {} },
    400: { description: 'Validation failed', content: {} },
  },
})
