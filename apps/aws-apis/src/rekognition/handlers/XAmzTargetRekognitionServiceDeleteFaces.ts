import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDeleteFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
