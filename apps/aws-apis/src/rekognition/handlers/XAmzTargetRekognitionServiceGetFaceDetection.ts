import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetFaceDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceGetFaceDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetFaceDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
