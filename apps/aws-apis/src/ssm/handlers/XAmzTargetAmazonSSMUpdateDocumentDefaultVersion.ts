import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateDocumentDefaultVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateDocumentDefaultVersionHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateDocumentDefaultVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
