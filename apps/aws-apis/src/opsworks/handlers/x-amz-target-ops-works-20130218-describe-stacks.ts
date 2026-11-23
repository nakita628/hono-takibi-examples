import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeStacksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeStacksHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeStacksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
