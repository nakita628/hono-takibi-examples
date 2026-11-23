import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteRouteTableRoute, postActionDeleteRouteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteRouteTableHandler = app
  .openapi(getActionDeleteRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
