import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListTagsForResourceHandler = app.openapi(
  postXAmzTargetTranscribeListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
