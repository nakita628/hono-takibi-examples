import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceTagResourceHandler = app.openapi(
  postXAmzTargetRekognitionServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
