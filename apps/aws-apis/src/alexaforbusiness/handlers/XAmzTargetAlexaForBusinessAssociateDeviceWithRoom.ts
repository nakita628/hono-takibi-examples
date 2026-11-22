import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateDeviceWithRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessAssociateDeviceWithRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateDeviceWithRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
