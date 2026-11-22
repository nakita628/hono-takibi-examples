import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListOnPremisesInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006ListOnPremisesInstancesHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListOnPremisesInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
