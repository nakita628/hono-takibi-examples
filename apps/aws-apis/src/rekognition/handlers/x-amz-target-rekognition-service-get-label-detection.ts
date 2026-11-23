import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetLabelDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceGetLabelDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetLabelDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
