import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetContentModerationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceGetContentModerationHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetContentModerationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
