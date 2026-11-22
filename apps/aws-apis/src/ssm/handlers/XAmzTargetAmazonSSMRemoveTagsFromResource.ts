import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMRemoveTagsFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMRemoveTagsFromResourceHandler = app.openapi(
  postXAmzTargetAmazonSSMRemoveTagsFromResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
