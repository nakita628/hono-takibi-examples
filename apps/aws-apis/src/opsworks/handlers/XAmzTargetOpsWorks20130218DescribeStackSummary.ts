import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeStackSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeStackSummaryHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeStackSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
