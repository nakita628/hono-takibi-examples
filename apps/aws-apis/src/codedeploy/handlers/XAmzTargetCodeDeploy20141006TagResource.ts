import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006TagResourceHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
