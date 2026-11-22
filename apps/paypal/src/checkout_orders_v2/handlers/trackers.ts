import { OpenAPIHono } from '@hono/zod-openapi'
import { patchV2CheckoutOrdersIdTrackersTrackerIdRoute } from '../routes'

const app = new OpenAPIHono()

export const trackersHandler = app.openapi(patchV2CheckoutOrdersIdTrackersTrackerIdRoute, (c) => {
  throw new Error('Not implemented')
})
