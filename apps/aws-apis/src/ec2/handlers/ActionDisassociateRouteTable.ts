import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateRouteTableRoute,
  postActionDisassociateRouteTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateRouteTableHandler = app
  .openapi(getActionDisassociateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
