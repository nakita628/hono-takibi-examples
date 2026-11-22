import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3ListTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3ListTagsHandler = app.openapi(
  postXAmzTargetAmazonDAXV3ListTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
