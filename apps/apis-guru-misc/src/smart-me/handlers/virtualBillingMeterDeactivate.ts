import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiVirtualBillingMeterDeactivateRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualBillingMeterDeactivateHandler = app.openapi(
  postApiVirtualBillingMeterDeactivateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
