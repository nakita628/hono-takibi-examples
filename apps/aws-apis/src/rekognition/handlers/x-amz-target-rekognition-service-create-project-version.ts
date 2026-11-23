import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateProjectVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceCreateProjectVersionHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateProjectVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
