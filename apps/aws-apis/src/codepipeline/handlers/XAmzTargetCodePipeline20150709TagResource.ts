import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709TagResourceHandler = app.openapi(
  postXAmzTargetCodePipeline20150709TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
