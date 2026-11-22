import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
