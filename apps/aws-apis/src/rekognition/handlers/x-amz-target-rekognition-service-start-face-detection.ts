import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartFaceDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceStartFaceDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartFaceDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
