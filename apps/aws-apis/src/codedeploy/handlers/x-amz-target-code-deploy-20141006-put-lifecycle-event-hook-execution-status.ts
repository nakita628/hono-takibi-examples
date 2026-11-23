import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
