import { createRoute, z } from '@hono/zod-openapi'

export const getEmployeesIdRoute = createRoute({
  method: 'get',
  path: '/employees/{id}',
  operationId: 'getEmployeeById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'A representation of an employee',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              username: z.string().exactOptional(),
              managerId: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      links: {
        userManager: {
          operationId: 'getEmployeeById',
          parameters: { id: '$response.body#managerId' },
        },
      },
    },
  },
})
