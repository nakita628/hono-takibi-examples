import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
