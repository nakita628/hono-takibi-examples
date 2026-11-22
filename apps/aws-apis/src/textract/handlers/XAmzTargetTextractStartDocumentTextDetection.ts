import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractStartDocumentTextDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractStartDocumentTextDetectionHandler = app.openapi(
  postXAmzTargetTextractStartDocumentTextDetectionRoute,
  (c) => {},
)
