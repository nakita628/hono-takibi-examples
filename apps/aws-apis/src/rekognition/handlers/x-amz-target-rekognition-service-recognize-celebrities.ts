import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceRecognizeCelebritiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceRecognizeCelebritiesHandler = app.openapi(
  postXAmzTargetRekognitionServiceRecognizeCelebritiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
