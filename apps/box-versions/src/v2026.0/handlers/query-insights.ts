import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryInsightsRoute } from '../routes'

const app = new OpenAPIHono()

export const queryInsightsHandler = app.openapi(postQueryInsightsRoute, (c) => {
  throw new Error('Not implemented')
})
