import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceCreateUserHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
