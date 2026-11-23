import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartCouponCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCouponCountJsonHandler = app.openapi(getCartCouponCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
