import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdRoute,
  getV2CustomersCustomerIdPaymentsRoute,
  getV2CustomersCustomerIdRoute,
  getV2CustomersRoute,
  patchV2CustomersCustomerIdRoute,
  postV2CustomersCustomerIdPaymentsRoute,
  postV2CustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersAPIHandler = app
  .openapi(postV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
