import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PutActionRevisionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709PutActionRevisionHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PutActionRevisionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
