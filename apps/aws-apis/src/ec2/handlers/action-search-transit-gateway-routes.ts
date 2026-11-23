import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSearchTransitGatewayRoutesRoute,
  postActionSearchTransitGatewayRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSearchTransitGatewayRoutesHandler = app
  .openapi(getActionSearchTransitGatewayRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSearchTransitGatewayRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
