import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetCelebrityRecognitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceGetCelebrityRecognitionHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetCelebrityRecognitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
