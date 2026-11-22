import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetPersonTrackingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceGetPersonTrackingHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetPersonTrackingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
