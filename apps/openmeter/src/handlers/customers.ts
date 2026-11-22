import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRoute,
  deleteApiV1CustomersCustomerIdOrKeyRoute,
  getApiV1CustomersCustomerIdOrKeyAppsRoute,
  getApiV1CustomersCustomerIdOrKeyRoute,
  getApiV1CustomersCustomerIdOrKeyStripeRoute,
  getApiV1CustomersCustomerIdOrKeySubscriptionsRoute,
  getApiV1CustomersRoute,
  postApiV1CustomersCustomerIdOrKeyStripePortalRoute,
  postApiV1CustomersRoute,
  putApiV1CustomersCustomerIdOrKeyAppsRoute,
  putApiV1CustomersCustomerIdOrKeyRoute,
  putApiV1CustomersCustomerIdOrKeyStripeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postApiV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomersCustomerIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomersCustomerIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomersCustomerIdOrKeyAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomersCustomerIdOrKeyStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomersCustomerIdOrKeyStripePortalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
