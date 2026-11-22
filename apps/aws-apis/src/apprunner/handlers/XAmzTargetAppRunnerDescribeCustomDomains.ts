import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDescribeCustomDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerDescribeCustomDomainsHandler = app.openapi(
  postXAmzTargetAppRunnerDescribeCustomDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
