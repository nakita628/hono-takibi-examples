import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006ListApplicationsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
