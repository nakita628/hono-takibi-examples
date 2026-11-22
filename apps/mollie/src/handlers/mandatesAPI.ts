import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdMandatesMandateIdRoute,
  getV2CustomersCustomerIdMandatesMandateIdRoute,
  getV2CustomersCustomerIdMandatesRoute,
  postV2CustomersCustomerIdMandatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mandatesAPIHandler = app
  .openapi(postV2CustomersCustomerIdMandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdMandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdMandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdMandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
