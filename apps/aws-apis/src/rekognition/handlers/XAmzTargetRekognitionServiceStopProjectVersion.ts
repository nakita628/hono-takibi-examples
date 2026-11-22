import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStopProjectVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStopProjectVersionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStopProjectVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
