import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateCacheClusterRoute, postActionCreateCacheClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateCacheClusterHandler = app
  .openapi(getActionCreateCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
