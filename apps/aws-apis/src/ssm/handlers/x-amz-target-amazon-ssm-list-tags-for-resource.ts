import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonSSMListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
