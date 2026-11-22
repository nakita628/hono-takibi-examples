import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssociateRouteTableRoute, postActionAssociateRouteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAssociateRouteTableHandler = app
  .openapi(getActionAssociateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
