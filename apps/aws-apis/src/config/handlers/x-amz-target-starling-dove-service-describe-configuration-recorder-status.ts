import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
