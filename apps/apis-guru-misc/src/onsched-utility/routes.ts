import { createRoute, z } from '@hono/zod-openapi'

const ThreadPoolInfoSchema = z
  .strictObject({
    availableCompletionThreads: z.int32().exactOptional(),
    availableWorkerThreads: z.int32().exactOptional(),
    maxCompletionThreads: z.int32().exactOptional(),
    maxWorkerThreads: z.int32().exactOptional(),
    minCompletionThreads: z.int32().exactOptional(),
    minWorkerThreads: z.int32().exactOptional(),
    occupiedCompletionThreads: z.int32().exactOptional(),
    occupiedWorkerThreads: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ThreadPoolInfo')

const Oauth2SecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: {
        OnSchedApi: 'Consumer and Setup Interface',
        distance: 'Travel and Distance calculations',
      },
      tokenUrl: 'https://sandbox-identity.onsched.com/connect/token',
    },
  },
  type: 'oauth2',
}

export const getUtilityV1HealthHeartbeatRoute = createRoute({
  method: 'get',
  path: '/utility/v1/health/heartbeat',
  tags: ['Health'],
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.string() } } },
  },
})

export const getUtilityV1HealthThreadinfoRoute = createRoute({
  method: 'get',
  path: '/utility/v1/health/threadinfo',
  tags: ['Health'],
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThreadPoolInfoSchema } },
    },
  },
})
