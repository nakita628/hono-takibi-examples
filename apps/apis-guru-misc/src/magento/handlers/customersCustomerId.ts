import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CustomersCustomerIdRoute,
  getV1CustomersCustomerIdRoute,
  putV1CustomersCustomerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersCustomerIdHandler = app
  .openapi(deleteV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
