import { createRoute, z } from '@hono/zod-openapi'

export const getTestRoute = createRoute({
  method: 'get',
  path: '/test',
  responses: { 200: { description: 'OK' } },
})

export const getTest2Route = createRoute({
  method: 'get',
  path: '/test2',
  responses: { 200: { description: 'OK' } },
})
