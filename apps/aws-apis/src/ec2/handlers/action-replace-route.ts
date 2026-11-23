import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionReplaceRouteRoute, postActionReplaceRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const actionReplaceRouteHandler = app
  .openapi(getActionReplaceRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReplaceRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
