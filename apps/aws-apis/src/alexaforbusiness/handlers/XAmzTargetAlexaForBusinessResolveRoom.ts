import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessResolveRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessResolveRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessResolveRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
