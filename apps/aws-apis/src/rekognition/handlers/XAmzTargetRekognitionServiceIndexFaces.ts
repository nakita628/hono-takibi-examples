import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceIndexFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceIndexFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceIndexFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
