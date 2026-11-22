import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceCreateProjectHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
