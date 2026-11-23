import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeDeliveryChannelsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
