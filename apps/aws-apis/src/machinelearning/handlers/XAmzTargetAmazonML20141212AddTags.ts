import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212AddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212AddTagsHandler = app.openapi(
  postXAmzTargetAmazonML20141212AddTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
