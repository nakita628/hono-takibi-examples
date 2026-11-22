import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateMLModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212CreateMLModelHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateMLModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
