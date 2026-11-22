import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartFaceDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartFaceDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartFaceDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
