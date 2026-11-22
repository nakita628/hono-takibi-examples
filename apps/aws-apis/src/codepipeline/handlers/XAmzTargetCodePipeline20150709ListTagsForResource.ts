import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709ListTagsForResourceHandler = app.openapi(
  postXAmzTargetCodePipeline20150709ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
