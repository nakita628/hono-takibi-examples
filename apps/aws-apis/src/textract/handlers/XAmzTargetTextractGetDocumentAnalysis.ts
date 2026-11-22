import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetDocumentAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractGetDocumentAnalysisHandler = app.openapi(
  postXAmzTargetTextractGetDocumentAnalysisRoute,
  (c) => {},
)
