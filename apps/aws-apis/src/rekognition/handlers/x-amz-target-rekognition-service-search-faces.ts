import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceSearchFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceSearchFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceSearchFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
