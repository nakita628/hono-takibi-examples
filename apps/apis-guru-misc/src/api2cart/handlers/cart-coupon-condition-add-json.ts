import { OpenAPIHono } from '@hono/zod-openapi'
import { postCartCouponConditionAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCouponConditionAddJsonHandler = app.openapi(
  postCartCouponConditionAddJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
