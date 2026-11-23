import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCompareFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceCompareFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceCompareFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
