import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListDeploymentInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006ListDeploymentInstancesHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListDeploymentInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
