import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppsResellerV1CustomersCustomerIdRoute,
  patchAppsResellerV1CustomersCustomerIdRoute,
  postAppsResellerV1CustomersRoute,
  putAppsResellerV1CustomersCustomerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postAppsResellerV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsResellerV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsResellerV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppsResellerV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
