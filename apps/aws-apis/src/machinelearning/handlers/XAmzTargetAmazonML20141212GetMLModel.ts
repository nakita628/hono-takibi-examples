import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212GetMLModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212GetMLModelHandler = app.openapi(
  postXAmzTargetAmazonML20141212GetMLModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
