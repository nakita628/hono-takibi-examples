import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeAgentVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeAgentVersionsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeAgentVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
