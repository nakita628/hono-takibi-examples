import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetDocumentTextDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractGetDocumentTextDetectionHandler = app.openapi(
  postXAmzTargetTextractGetDocumentTextDetectionRoute,
  (c) => {},
)
