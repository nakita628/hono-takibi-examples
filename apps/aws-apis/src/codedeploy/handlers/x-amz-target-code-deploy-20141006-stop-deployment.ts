import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006StopDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006StopDeploymentHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006StopDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
