import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DisassociateKmsKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DisassociateKmsKeyHandler = app.openapi(
  postXAmzTargetLogs20140328DisassociateKmsKeyRoute,
  (c) => {},
)
