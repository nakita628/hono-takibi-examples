import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1NegotiableCartsCartIdCouponsCouponCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdCouponsCouponCodeHandler = app.openapi(
  putV1NegotiableCartsCartIdCouponsCouponCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
