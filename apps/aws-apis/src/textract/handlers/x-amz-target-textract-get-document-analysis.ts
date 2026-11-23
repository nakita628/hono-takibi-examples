import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetDocumentAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractGetDocumentAnalysisHandler = app.openapi(
  postXAmzTargetTextractGetDocumentAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
