import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCheckoutTenantCheckoutIdRoute,
  patchCheckoutTenantCheckoutIdRoute,
  getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checkoutHandler = app
  .openapi(getCheckoutTenantCheckoutIdRoute, (c) => {})
  .openapi(patchCheckoutTenantCheckoutIdRoute, (c) => {})
  .openapi(getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRoute, (c) => {})
