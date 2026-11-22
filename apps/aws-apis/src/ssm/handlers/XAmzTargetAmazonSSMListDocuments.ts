import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListDocumentsHandler = app.openapi(
  postXAmzTargetAmazonSSMListDocumentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
