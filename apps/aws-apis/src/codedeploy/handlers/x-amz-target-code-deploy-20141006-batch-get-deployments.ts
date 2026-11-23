import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006BatchGetDeploymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006BatchGetDeploymentsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006BatchGetDeploymentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
