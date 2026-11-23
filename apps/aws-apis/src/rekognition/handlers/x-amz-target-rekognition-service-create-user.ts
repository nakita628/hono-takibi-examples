import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceCreateUserHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
