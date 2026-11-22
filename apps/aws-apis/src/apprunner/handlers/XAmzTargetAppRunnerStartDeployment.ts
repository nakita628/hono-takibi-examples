import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerStartDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerStartDeploymentHandler = app.openapi(
  postXAmzTargetAppRunnerStartDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
