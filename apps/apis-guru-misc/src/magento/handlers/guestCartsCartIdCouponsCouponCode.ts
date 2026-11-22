import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1GuestCartsCartIdCouponsCouponCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdCouponsCouponCodeHandler = app.openapi(
  putV1GuestCartsCartIdCouponsCouponCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
