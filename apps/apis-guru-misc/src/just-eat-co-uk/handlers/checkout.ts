import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRoute,
  getCheckoutTenantCheckoutIdRoute,
  patchCheckoutTenantCheckoutIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checkoutHandler = app
  .openapi(getCheckoutTenantCheckoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCheckoutTenantCheckoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRoute, (c) => {
    throw new Error('Not implemented')
  })
