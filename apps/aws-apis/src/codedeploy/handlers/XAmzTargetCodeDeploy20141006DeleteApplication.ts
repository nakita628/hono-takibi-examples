import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006DeleteApplicationHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeleteApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
