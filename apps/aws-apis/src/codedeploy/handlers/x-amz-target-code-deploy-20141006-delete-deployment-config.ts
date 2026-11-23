import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeleteDeploymentConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006DeleteDeploymentConfigHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeleteDeploymentConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
