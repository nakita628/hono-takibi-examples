import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006CreateDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006CreateDeploymentHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006CreateDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
