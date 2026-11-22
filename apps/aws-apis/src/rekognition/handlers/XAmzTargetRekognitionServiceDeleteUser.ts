import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDeleteUserHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
