import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DeleteMLModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212DeleteMlModelHandler = app.openapi(
  postXAmzTargetAmazonML20141212DeleteMLModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
