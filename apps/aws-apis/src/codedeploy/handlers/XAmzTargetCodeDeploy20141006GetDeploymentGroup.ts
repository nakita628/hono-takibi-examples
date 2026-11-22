import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetDeploymentGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006GetDeploymentGroupHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetDeploymentGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
