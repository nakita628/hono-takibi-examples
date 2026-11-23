import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribePermissionsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
