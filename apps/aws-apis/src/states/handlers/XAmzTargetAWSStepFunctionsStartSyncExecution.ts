import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsStartSyncExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsStartSyncExecutionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsStartSyncExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
