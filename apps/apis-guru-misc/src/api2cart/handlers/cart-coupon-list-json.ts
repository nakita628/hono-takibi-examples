import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartCouponListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCouponListJsonHandler = app.openapi(getCartCouponListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
