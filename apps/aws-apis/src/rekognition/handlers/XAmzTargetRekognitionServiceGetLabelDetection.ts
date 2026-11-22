import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetLabelDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceGetLabelDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetLabelDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
