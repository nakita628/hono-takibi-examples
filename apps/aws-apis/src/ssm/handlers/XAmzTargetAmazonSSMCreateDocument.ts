import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCreateDocumentHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
