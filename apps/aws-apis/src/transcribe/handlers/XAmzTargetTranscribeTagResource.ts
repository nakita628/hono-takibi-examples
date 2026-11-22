import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeTagResourceHandler = app.openapi(
  postXAmzTargetTranscribeTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
