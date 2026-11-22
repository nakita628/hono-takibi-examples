import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutDeliveryChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutDeliveryChannelHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutDeliveryChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
