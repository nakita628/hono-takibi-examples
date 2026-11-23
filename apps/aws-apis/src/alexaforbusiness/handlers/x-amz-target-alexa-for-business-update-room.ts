import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
