import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractStartDocumentTextDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractStartDocumentTextDetectionHandler = app.openapi(
  postXAmzTargetTextractStartDocumentTextDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
