import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdRoute,
  getV2CustomersCustomerIdRoute,
  getV2CustomersRequirementsRoute,
  getV2CustomersRoute,
  postV2CustomersRoute,
  putV2CustomersCustomerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
