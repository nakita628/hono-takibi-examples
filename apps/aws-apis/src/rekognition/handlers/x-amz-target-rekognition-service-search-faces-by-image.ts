import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceSearchFacesByImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceSearchFacesByImageHandler = app.openapi(
  postXAmzTargetRekognitionServiceSearchFacesByImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
