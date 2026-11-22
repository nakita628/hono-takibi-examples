import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateContinuousBackupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810UpdateContinuousBackupsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateContinuousBackupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
