import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeStudioLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeStudioLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerDescribeStudioLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
