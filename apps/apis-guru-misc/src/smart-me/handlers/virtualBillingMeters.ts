import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVirtualBillingMetersRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualBillingMetersHandler = app.openapi(getApiVirtualBillingMetersRoute, (c) => {
  throw new Error('Not implemented')
})
