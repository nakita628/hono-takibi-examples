import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteRouteTableRoute, postActionDeleteRouteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteRouteTableHandler = app
  .openapi(getActionDeleteRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
