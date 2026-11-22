import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartPersonTrackingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartPersonTrackingHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartPersonTrackingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
