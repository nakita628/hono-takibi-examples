import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectCustomLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDetectCustomLabelsHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectCustomLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
