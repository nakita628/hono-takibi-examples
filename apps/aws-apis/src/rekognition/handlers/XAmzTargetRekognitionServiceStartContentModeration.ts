import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartContentModerationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartContentModerationHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartContentModerationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
