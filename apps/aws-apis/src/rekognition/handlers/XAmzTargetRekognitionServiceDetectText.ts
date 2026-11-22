import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectTextRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDetectTextHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectTextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
