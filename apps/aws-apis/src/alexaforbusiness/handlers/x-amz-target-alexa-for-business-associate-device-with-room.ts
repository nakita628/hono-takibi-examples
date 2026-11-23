import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateDeviceWithRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessAssociateDeviceWithRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateDeviceWithRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
