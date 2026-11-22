import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CartsCartIdCouponsCouponCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdCouponsCouponCodeHandler = app.openapi(
  putV1CartsCartIdCouponsCouponCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
