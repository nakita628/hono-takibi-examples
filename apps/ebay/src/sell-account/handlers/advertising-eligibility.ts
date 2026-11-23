import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdvertisingEligibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const advertisingEligibilityHandler = app.openapi(getAdvertisingEligibilityRoute, (c) => {
  throw new Error('Not implemented')
})
