import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListDeploymentGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006ListDeploymentGroupsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListDeploymentGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
