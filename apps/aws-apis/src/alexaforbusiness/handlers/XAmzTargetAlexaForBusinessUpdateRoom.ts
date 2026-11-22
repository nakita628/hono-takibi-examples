import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
