import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006GetDeploymentHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
