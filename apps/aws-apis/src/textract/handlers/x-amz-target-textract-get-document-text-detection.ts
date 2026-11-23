import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetDocumentTextDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractGetDocumentTextDetectionHandler = app.openapi(
  postXAmzTargetTextractGetDocumentTextDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
