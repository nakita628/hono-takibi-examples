import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
