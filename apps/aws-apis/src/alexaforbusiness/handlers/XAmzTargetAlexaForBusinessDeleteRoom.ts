import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
