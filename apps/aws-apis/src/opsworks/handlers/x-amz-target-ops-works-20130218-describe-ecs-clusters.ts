import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeEcsClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeEcsClustersHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeEcsClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
