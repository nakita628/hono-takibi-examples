import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchRoomsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessSearchRoomsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchRoomsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
