import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceAssociateFacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceAssociateFacesHandler = app.openapi(
  postXAmzTargetRekognitionServiceAssociateFacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
