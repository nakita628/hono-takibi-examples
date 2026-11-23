import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DescribeTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212DescribeTagsHandler = app.openapi(
  postXAmzTargetAmazonML20141212DescribeTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
