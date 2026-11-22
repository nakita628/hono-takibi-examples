import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709DeleteCustomActionTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709DeleteCustomActionTypeHandler = app.openapi(
  postXAmzTargetCodePipeline20150709DeleteCustomActionTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
