import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeAppsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeAppsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
