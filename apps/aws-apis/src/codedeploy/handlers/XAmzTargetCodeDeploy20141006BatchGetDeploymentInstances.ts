import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
