import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
