import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006UpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006UpdateApplicationHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006UpdateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
