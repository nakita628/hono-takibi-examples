import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnalyzeLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const analyzeLocationHandler = app.openapi(postAnalyzeLocationRoute, (c) => {
  throw new Error('Not implemented')
})
