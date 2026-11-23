import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListStreamProcessorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceListStreamProcessorsHandler = app.openapi(
  postXAmzTargetRekognitionServiceListStreamProcessorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
