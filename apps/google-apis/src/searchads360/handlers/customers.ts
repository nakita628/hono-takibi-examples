import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV0CustomersCustomerIdCustomColumnsRoute,
  postV0CustomersCustomerIdSearchAds360SearchRoute,
  postV0CustomersCustomerIdSearchAds360SearchStreamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getV0CustomersCustomerIdCustomColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0CustomersCustomerIdSearchAds360SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0CustomersCustomerIdSearchAds360SearchStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
