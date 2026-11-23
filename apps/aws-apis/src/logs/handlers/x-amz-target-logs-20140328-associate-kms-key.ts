import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328AssociateKmsKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328AssociateKmsKeyHandler = app.openapi(
  postXAmzTargetLogs20140328AssociateKmsKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
