import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006DeleteApplicationHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeleteApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
