import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeUntagResourceHandler = app.openapi(
  postXAmzTargetTranscribeUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
