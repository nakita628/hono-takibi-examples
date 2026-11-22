import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListDeploymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006ListDeploymentsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListDeploymentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
