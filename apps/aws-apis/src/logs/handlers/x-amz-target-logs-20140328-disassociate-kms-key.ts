import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DisassociateKmsKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DisassociateKmsKeyHandler = app.openapi(
  postXAmzTargetLogs20140328DisassociateKmsKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
