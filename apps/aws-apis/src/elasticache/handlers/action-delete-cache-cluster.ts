import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteCacheClusterRoute, postActionDeleteCacheClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteCacheClusterHandler = app
  .openapi(getActionDeleteCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
