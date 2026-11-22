import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateRouteRoute, postActionCreateRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateRouteHandler = app
  .openapi(getActionCreateRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
