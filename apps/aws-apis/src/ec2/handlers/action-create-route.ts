import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateRouteRoute, postActionCreateRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateRouteHandler = app
  .openapi(getActionCreateRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
