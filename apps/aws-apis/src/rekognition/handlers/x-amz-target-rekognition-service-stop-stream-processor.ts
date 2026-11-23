import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStopStreamProcessorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceStopStreamProcessorHandler = app.openapi(
  postXAmzTargetRekognitionServiceStopStreamProcessorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
