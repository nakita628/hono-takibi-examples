import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDisassociateFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDisassociateFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceDisassociateFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
