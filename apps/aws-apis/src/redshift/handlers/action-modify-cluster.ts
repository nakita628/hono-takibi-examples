import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyClusterRoute, postActionModifyClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyClusterHandler = app
  .openapi(getActionModifyClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
