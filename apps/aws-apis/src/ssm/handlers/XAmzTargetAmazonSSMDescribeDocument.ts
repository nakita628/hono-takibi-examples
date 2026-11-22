import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeDocumentHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
