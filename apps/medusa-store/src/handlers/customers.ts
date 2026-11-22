import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoreCustomersMeAddressesAddressIdRoute,
  getStoreCustomersMeAddressesAddressIdRoute,
  getStoreCustomersMeAddressesRoute,
  getStoreCustomersMeRoute,
  postStoreCustomersMeAddressesAddressIdRoute,
  postStoreCustomersMeAddressesRoute,
  postStoreCustomersMeRoute,
  postStoreCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postStoreCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCustomersMeAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCustomersMeAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCustomersMeAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCustomersMeAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoreCustomersMeAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
