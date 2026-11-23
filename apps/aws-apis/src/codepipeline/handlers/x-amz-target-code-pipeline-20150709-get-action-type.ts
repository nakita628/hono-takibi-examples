import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709GetActionTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709GetActionTypeHandler = app.openapi(
  postXAmzTargetCodePipeline20150709GetActionTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
