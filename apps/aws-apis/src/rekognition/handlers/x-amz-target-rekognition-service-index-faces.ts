import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceIndexFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceIndexFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceIndexFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
