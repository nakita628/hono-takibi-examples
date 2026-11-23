import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetDeploymentTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006GetDeploymentTargetHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetDeploymentTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
