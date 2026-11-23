import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DescribeEvaluationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212DescribeEvaluationsHandler = app.openapi(
  postXAmzTargetAmazonML20141212DescribeEvaluationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
