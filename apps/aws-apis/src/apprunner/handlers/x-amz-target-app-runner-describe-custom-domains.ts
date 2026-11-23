import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDescribeCustomDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDescribeCustomDomainsHandler = app.openapi(
  postXAmzTargetAppRunnerDescribeCustomDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
