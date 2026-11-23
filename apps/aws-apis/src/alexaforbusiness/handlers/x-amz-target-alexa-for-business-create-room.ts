import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessCreateRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
