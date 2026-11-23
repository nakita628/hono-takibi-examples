import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetApplicationRevisionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006GetApplicationRevisionHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetApplicationRevisionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
