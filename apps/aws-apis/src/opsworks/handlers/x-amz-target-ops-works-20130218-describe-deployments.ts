import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeDeploymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeDeploymentsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeDeploymentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
