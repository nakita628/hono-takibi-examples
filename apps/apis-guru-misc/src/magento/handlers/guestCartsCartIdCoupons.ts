import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1GuestCartsCartIdCouponsRoute, getV1GuestCartsCartIdCouponsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdCouponsHandler = app
  .openapi(deleteV1GuestCartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
