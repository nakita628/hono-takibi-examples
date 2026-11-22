import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1GuestCartsCartIdBillingAddressRoute,
  postV1GuestCartsCartIdBillingAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdBillingAddressHandler = app
  .openapi(getV1GuestCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
