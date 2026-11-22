import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceListFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceListFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
