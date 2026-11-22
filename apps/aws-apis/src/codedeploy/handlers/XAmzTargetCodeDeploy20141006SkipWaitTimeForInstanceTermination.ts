import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
