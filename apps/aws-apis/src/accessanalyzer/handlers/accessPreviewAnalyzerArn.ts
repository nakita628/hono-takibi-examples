import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccessPreviewAnalyzerArnRoute } from '../routes'

const app = new OpenAPIHono()

export const accessPreviewAnalyzerArnHandler = app.openapi(
  getAccessPreviewAnalyzerArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
