import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartStreamProcessorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceStartStreamProcessorHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartStreamProcessorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
