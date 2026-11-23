import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyGlobalClusterRoute, postActionModifyGlobalClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyGlobalClusterHandler = app
  .openapi(getActionModifyGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
