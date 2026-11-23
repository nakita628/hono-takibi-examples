import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteEgressOnlyInternetGatewayRoute,
  postActionDeleteEgressOnlyInternetGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteEgressOnlyInternetGatewayHandler = app
  .openapi(getActionDeleteEgressOnlyInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteEgressOnlyInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
