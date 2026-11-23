import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetPersonTrackingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceGetPersonTrackingHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetPersonTrackingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
