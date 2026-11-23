import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetDeploymentConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006GetDeploymentConfigHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetDeploymentConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
