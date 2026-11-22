import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709UntagResourceHandler = app.openapi(
  postXAmzTargetCodePipeline20150709UntagResourceRoute,
  (c) => {},
)
