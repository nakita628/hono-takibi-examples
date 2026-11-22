import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomersCustomerIdCreditBalancesRoute,
  getCustomersCustomerIdRoute,
  getCustomersRoute,
  patchCustomersCustomerIdRoute,
  postCustomersCustomerIdAuthTokenRoute,
  postCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdCreditBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
