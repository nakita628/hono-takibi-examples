import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartCelebrityRecognitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartCelebrityRecognitionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartCelebrityRecognitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
