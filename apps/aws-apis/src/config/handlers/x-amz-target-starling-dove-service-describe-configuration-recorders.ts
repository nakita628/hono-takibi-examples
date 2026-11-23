import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeConfigurationRecordersHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
