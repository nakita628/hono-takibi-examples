import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMModifyDocumentPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMModifyDocumentPermissionHandler = app.openapi(
  postXAmzTargetAmazonSSMModifyDocumentPermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
