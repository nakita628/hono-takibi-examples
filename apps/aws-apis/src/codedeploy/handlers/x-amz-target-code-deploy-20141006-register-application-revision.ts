import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006RegisterApplicationRevisionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006RegisterApplicationRevisionHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006RegisterApplicationRevisionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
