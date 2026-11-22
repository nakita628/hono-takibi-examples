import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractDetectDocumentTextRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractDetectDocumentTextHandler = app.openapi(
  postXAmzTargetTextractDetectDocumentTextRoute,
  (c) => {},
)
