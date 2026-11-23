import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateMLModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212CreateMlModelHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateMLModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
