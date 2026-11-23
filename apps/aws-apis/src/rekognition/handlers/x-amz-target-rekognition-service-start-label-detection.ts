import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartLabelDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceStartLabelDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartLabelDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
