import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateDocumentDefaultVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateDocumentDefaultVersionHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateDocumentDefaultVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
