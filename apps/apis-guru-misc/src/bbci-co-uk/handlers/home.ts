import { OpenAPIHono } from '@hono/zod-openapi'
import { getHomeHighlightsRoute } from '../routes'

const app = new OpenAPIHono()

export const homeHandler = app.openapi(getHomeHighlightsRoute, (c) => {
  throw new Error('Not implemented')
})
