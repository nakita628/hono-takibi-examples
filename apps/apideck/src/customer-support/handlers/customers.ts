import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomerSupportCustomersIdRoute,
  getCustomerSupportCustomersIdRoute,
  getCustomerSupportCustomersRoute,
  patchCustomerSupportCustomersIdRoute,
  postCustomerSupportCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getCustomerSupportCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomerSupportCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomerSupportCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerSupportCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomerSupportCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
