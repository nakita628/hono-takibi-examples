import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListDeploymentConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006ListDeploymentConfigsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListDeploymentConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
