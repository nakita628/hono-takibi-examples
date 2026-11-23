import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetDocumentHandler = app.openapi(
  postXAmzTargetAmazonSSMGetDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
