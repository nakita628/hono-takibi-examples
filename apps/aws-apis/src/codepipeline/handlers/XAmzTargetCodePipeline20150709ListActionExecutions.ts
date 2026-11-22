import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709ListActionExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709ListActionExecutionsHandler = app.openapi(
  postXAmzTargetCodePipeline20150709ListActionExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
