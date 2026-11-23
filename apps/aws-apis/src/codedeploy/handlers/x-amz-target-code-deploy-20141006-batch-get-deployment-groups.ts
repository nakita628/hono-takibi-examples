import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
