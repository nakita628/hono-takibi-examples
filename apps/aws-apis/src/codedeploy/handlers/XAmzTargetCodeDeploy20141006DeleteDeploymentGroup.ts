import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeleteDeploymentGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006DeleteDeploymentGroupHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeleteDeploymentGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
