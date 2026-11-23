import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006GetApplicationHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
