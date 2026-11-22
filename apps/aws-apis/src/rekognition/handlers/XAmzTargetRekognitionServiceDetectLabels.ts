import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDetectLabelsHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
