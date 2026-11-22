import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeDocumentPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeDocumentPermissionHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeDocumentPermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
