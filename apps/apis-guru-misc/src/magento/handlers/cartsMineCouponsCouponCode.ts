import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CartsMineCouponsCouponCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineCouponsCouponCodeHandler = app.openapi(
  putV1CartsMineCouponsCouponCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
