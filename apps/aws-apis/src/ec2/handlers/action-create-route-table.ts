import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateRouteTableRoute, postActionCreateRouteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateRouteTableHandler = app
  .openapi(getActionCreateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
