import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeConfigurationRecordersHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
