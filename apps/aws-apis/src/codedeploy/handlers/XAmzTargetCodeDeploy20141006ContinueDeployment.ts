import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ContinueDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006ContinueDeploymentHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ContinueDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
