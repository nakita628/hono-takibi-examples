import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSearchLocalGatewayRoutesRoute,
  postActionSearchLocalGatewayRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSearchLocalGatewayRoutesHandler = app
  .openapi(getActionSearchLocalGatewayRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSearchLocalGatewayRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
