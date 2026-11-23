import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
