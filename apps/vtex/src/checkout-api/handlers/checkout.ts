import { OpenAPIHono } from '@hono/zod-openapi'
import { getCheckoutChangeToAnonymousUserOrderFormIdRoute } from '../routes'

const app = new OpenAPIHono()

export const checkoutHandler = app.openapi(
  getCheckoutChangeToAnonymousUserOrderFormIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
