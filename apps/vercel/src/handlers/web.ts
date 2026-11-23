import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebInsightsToggleRoute } from '../routes'

const app = new OpenAPIHono()

export const webHandler = app.openapi(postWebInsightsToggleRoute, (c) => {
  throw new Error('Not implemented')
})
