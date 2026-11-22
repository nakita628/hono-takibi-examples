import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartFaceSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartFaceSearchHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartFaceSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
