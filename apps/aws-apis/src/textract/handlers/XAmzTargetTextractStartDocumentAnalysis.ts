import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractStartDocumentAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractStartDocumentAnalysisHandler = app.openapi(
  postXAmzTargetTextractStartDocumentAnalysisRoute,
  (c) => {},
)
