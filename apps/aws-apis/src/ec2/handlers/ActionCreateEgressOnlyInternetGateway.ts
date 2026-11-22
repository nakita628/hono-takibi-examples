import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateEgressOnlyInternetGatewayRoute,
  postActionCreateEgressOnlyInternetGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateEgressOnlyInternetGatewayHandler = app
  .openapi(getActionCreateEgressOnlyInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateEgressOnlyInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
