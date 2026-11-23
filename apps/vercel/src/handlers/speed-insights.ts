import { OpenAPIHono } from '@hono/zod-openapi'
import { postSpeedInsightsToggleRoute } from '../routes'

const app = new OpenAPIHono()

export const speedInsightsHandler = app.openapi(postSpeedInsightsToggleRoute, (c) => {
  throw new Error('Not implemented')
})
