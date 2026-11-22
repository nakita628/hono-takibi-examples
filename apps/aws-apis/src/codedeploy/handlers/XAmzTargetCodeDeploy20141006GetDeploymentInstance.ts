import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetDeploymentInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006GetDeploymentInstanceHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetDeploymentInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
