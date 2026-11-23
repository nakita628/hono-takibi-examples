import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeStudioLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeStudioLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerDescribeStudioLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
