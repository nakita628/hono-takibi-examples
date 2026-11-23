import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectTextRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDetectTextHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectTextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
