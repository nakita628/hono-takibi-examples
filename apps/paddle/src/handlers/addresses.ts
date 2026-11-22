import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomersCustomerIdAddressesAddressIdRoute,
  getCustomersCustomerIdAddressesRoute,
  patchCustomersCustomerIdAddressesAddressIdRoute,
  postCustomersCustomerIdAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getCustomersCustomerIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersCustomerIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
