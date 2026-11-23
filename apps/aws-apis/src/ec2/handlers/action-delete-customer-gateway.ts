import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteCustomerGatewayRoute,
  postActionDeleteCustomerGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteCustomerGatewayHandler = app
  .openapi(getActionDeleteCustomerGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCustomerGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
