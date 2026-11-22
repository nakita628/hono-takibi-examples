import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportGatewayApiIdRoute,
  getApiTransportGatewayApiIdRoute,
  getApiTransportGatewayApiRoute,
  postApiTransportGatewayApiRoute,
  putApiTransportGatewayApiIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportGatewayApiHandler = app
  .openapi(getApiTransportGatewayApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGatewayApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGatewayApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGatewayApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGatewayApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
