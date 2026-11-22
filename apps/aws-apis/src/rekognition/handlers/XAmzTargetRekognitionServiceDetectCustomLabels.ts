import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectCustomLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDetectCustomLabelsHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectCustomLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
