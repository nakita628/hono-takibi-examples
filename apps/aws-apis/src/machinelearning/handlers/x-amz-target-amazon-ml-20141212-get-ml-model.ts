import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212GetMLModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212GetMlModelHandler = app.openapi(
  postXAmzTargetAmazonML20141212GetMLModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
