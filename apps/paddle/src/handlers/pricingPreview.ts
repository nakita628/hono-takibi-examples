import { OpenAPIHono } from '@hono/zod-openapi'
import { postPricingPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const pricingPreviewHandler = app.openapi(postPricingPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
