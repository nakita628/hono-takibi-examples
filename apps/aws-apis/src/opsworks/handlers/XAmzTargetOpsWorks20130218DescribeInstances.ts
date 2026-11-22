import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeInstancesHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
