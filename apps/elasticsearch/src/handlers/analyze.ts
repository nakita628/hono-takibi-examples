import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyzeRoute, postAnalyzeRoute } from '../routes'

const app = new OpenAPIHono()

export const analyzeHandler = app
  .openapi(getAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
