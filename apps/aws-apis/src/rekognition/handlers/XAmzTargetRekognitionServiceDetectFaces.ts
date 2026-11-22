import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDetectFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
