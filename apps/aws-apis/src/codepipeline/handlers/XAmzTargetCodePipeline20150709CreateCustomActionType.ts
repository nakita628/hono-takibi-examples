import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709CreateCustomActionTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709CreateCustomActionTypeHandler = app.openapi(
  postXAmzTargetCodePipeline20150709CreateCustomActionTypeRoute,
  (c) => {},
)
