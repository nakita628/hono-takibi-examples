import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchRoomsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessSearchRoomsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchRoomsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
