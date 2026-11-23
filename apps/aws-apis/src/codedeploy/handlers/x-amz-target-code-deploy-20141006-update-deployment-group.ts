import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006UpdateDeploymentGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006UpdateDeploymentGroupHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006UpdateDeploymentGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
