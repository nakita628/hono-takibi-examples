import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceUntagResourceHandler = app.openapi(
  postXAmzTargetRekognitionServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
