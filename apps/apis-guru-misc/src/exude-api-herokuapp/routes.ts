import { createRoute, z } from '@hono/zod-openapi'

const ExudeBeanSchema = z
  .object({ data: z.string().exactOptional(), links: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('ExudeBean')

const ExudeResponseBeanSchema = z
  .object({ data: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ExudeResponseBean')

export const postExudeTypeDataRoute = createRoute({
  method: 'post',
  path: '/exude/{type}/data',
  tags: ['exude'],
  summary: 'Filter the stopping words from the provided input data or links',
  operationId: 'filterStoppings',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'provide the type of filtering required stopping/swear',
            examples: {
              type: {
                summary: 'provide the type of filtering required stopping/swear',
                value: 'stopping',
              },
            },
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Filter the stopping words from the provided input data or links',
      content: { 'multipart/form-data': { schema: ExudeBeanSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Exude response',
      content: { 'application/json': { schema: ExudeResponseBeanSchema } },
    },
  },
})

export const postExudeTypeFileRoute = createRoute({
  method: 'post',
  path: '/exude/{type}/file',
  tags: ['exude'],
  summary: 'Filter the stopping words from the provided input file',
  operationId: 'filterFileDataStoppings',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'provide the type of filtering required stopping/swear',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Filter the stopping words from the provided input file',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'model response',
      content: { 'application/json': { schema: ExudeResponseBeanSchema } },
    },
  },
})
