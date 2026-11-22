import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartStreamProcessorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartStreamProcessorHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartStreamProcessorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
