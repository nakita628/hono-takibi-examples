import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteStreamProcessorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDeleteStreamProcessorHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteStreamProcessorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
