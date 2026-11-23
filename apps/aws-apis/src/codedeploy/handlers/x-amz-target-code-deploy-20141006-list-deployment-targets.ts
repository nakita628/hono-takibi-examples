import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListDeploymentTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006ListDeploymentTargetsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListDeploymentTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
