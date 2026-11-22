import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DescribeDataSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212DescribeDataSourcesHandler = app.openapi(
  postXAmzTargetAmazonML20141212DescribeDataSourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
