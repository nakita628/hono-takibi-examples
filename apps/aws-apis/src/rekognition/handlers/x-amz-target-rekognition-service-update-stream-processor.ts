import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceUpdateStreamProcessorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceUpdateStreamProcessorHandler = app.openapi(
  postXAmzTargetRekognitionServiceUpdateStreamProcessorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
