import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
