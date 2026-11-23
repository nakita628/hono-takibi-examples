import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
