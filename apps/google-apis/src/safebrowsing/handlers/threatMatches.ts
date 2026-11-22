import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4ThreatMatchesFindRoute } from '../routes'

const app = new OpenAPIHono()

export const threatMatchesHandler = app.openapi(postV4ThreatMatchesFindRoute, (c) => {
  throw new Error('Not implemented')
})
