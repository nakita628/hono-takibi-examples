import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCheckoutPubRegionsRegionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const regionHandler = app.openapi(getApiCheckoutPubRegionsRegionIdRoute, (c) => {
  throw new Error('Not implemented')
})
