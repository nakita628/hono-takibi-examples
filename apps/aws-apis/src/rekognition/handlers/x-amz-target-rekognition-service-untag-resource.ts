import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceUntagResourceHandler = app.openapi(
  postXAmzTargetRekognitionServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
