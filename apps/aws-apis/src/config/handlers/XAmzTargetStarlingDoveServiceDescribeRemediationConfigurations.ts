import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
