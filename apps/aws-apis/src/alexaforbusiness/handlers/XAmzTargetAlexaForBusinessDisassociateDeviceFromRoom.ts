import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDisassociateDeviceFromRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
