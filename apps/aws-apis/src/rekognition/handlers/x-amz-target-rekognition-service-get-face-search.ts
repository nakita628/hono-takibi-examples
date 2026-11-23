import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetFaceSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceGetFaceSearchHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetFaceSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
