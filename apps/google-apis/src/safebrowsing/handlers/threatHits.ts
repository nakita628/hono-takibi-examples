import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4ThreatHitsRoute } from '../routes'

const app = new OpenAPIHono()

export const threatHitsHandler = app.openapi(postV4ThreatHitsRoute, (c) => {
  throw new Error('Not implemented')
})
