import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlternativeEaseeLastSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const easeeHandler = app.openapi(getAlternativeEaseeLastSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
