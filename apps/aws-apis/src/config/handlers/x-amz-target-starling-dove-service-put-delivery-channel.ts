import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutDeliveryChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutDeliveryChannelHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutDeliveryChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
