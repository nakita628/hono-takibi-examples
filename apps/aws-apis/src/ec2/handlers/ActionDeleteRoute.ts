import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteRouteRoute, postActionDeleteRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteRouteHandler = app
  .openapi(getActionDeleteRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
