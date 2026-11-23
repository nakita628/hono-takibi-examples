import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006UntagResourceHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
