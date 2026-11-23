import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetCelebrityInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceGetCelebrityInfoHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetCelebrityInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
