import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteProjectVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDeleteProjectVersionHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteProjectVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
