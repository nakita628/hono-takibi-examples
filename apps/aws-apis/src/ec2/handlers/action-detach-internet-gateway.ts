import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDetachInternetGatewayRoute,
  postActionDetachInternetGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDetachInternetGatewayHandler = app
  .openapi(getActionDetachInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
