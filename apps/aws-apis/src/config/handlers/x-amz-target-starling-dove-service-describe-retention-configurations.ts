import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
