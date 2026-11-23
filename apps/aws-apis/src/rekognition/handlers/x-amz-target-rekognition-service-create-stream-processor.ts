import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateStreamProcessorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceCreateStreamProcessorHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateStreamProcessorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
