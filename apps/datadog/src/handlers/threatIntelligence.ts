import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2SecurityThreatIntelStixRoute } from '../routes'

const app = new OpenAPIHono()

export const threatIntelligenceHandler = app.openapi(postApiV2SecurityThreatIntelStixRoute, (c) => {
  throw new Error('Not implemented')
})
