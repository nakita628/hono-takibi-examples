import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartProjectVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceStartProjectVersionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartProjectVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
