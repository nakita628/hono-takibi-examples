import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsPublishStateMachineVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsPublishStateMachineVersionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsPublishStateMachineVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
