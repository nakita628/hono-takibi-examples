import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomersCustomerIdBusinessesBusinessIdRoute,
  getCustomersCustomerIdBusinessesRoute,
  patchCustomersCustomerIdBusinessesBusinessIdRoute,
  postCustomersCustomerIdBusinessesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessesHandler = app
  .openapi(getCustomersCustomerIdBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdBusinessesBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersCustomerIdBusinessesBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
