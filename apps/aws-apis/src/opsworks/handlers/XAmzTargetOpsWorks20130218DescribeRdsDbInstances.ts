import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeRdsDbInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeRdsDbInstancesHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeRdsDbInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
