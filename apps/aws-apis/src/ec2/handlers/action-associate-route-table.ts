import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssociateRouteTableRoute, postActionAssociateRouteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAssociateRouteTableHandler = app
  .openapi(getActionAssociateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
