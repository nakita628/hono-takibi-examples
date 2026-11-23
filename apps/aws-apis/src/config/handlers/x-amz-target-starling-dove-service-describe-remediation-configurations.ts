import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
