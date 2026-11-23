import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCartCouponDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCouponDeleteJsonHandler = app.openapi(deleteCartCouponDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
