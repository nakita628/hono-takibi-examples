import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyCacheClusterRoute, postActionModifyCacheClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyCacheClusterHandler = app
  .openapi(getActionModifyCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCacheClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
