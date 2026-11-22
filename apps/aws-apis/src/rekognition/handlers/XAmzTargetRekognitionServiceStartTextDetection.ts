import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartTextDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartTextDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartTextDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
