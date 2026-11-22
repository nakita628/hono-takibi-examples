import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328AssociateKmsKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328AssociateKmsKeyHandler = app.openapi(
  postXAmzTargetLogs20140328AssociateKmsKeyRoute,
  (c) => {},
)
