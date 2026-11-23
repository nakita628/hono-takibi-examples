import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
