import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStopProjectVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceStopProjectVersionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStopProjectVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
