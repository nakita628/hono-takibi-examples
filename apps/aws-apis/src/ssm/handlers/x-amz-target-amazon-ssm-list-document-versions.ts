import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListDocumentVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListDocumentVersionsHandler = app.openapi(
  postXAmzTargetAmazonSSMListDocumentVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
