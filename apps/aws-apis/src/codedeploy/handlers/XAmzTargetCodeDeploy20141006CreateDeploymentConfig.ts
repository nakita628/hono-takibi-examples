import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006CreateDeploymentConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006CreateDeploymentConfigHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006CreateDeploymentConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
