import { createRoute, z } from '@hono/zod-openapi'

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  summary: 'List API versions',
  operationId: 'listVersionsv2',
  responses: {
    200: { description: '200 response', content: {} },
    300: { description: '300 response', content: {} },
  },
})

export const getV2Route = createRoute({
  method: 'get',
  path: '/v2',
  summary: 'Show API version details',
  operationId: 'getVersionDetailsv2',
  responses: {
    200: { description: '200 response', content: {} },
    203: { description: '203 response', content: {} },
  },
})
