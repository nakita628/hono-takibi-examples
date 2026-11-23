import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDisassociateDeviceFromRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
