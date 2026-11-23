import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006BatchGetApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006BatchGetApplicationsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006BatchGetApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
