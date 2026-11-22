import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709GetJobDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709GetJobDetailsHandler = app.openapi(
  postXAmzTargetCodePipeline20150709GetJobDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
