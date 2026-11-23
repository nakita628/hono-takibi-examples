import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006CreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006CreateApplicationHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006CreateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
