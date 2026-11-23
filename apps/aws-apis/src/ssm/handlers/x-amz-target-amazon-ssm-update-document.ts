import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateDocumentHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
