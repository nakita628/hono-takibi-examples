import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnalyzeRoute } from '../routes'

const app = new OpenAPIHono()

export const analyzeHandler = app.openapi(postAnalyzeRoute, (c) => {
  throw new Error('Not implemented')
})
