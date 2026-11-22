import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetTextDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceGetTextDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetTextDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
