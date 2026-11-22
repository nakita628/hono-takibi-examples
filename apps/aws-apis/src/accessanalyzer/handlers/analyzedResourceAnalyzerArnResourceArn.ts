import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyzedResourceAnalyzerArnResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const analyzedResourceAnalyzerArnResourceArnHandler = app.openapi(
  getAnalyzedResourceAnalyzerArnResourceArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
