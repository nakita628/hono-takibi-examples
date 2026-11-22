import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceSearchUsersByImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceSearchUsersByImageHandler = app.openapi(
  postXAmzTargetRekognitionServiceSearchUsersByImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
