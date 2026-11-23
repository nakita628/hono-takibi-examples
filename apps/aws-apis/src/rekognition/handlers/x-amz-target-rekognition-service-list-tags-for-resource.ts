import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetRekognitionServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
