import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006ListTagsForResourceHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
