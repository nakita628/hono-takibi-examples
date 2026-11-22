import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteDeliveryChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteDeliveryChannelHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteDeliveryChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
