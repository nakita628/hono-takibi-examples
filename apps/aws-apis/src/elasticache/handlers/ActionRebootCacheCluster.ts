import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRebootCacheClusterRoute, postActionRebootCacheClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRebootCacheClusterHandler = app
  .openapi(getActionRebootCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRebootCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
