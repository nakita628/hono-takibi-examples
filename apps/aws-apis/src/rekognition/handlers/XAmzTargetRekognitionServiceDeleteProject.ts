import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDeleteProjectHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
