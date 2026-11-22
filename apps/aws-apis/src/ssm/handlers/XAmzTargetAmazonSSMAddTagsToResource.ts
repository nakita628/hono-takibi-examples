import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMAddTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMAddTagsToResourceHandler = app.openapi(
  postXAmzTargetAmazonSSMAddTagsToResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
