import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractDetectDocumentTextRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractDetectDocumentTextHandler = app.openapi(
  postXAmzTargetTextractDetectDocumentTextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
