import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006CreateDeploymentGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006CreateDeploymentGroupHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006CreateDeploymentGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
