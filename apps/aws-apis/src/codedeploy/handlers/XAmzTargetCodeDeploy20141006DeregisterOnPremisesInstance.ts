import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
