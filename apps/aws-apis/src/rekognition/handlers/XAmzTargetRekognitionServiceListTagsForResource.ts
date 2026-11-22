import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetRekognitionServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
