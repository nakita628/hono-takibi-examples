import { OpenAPIHono } from '@hono/zod-openapi'
import { postCartCouponAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCouponAddJsonHandler = app.openapi(postCartCouponAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
