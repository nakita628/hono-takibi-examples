import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCustomerGatewayRoute,
  postActionCreateCustomerGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateCustomerGatewayHandler = app
  .openapi(getActionCreateCustomerGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCustomerGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
