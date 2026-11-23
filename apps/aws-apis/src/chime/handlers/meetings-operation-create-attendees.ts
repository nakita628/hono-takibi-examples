import { OpenAPIHono } from '@hono/zod-openapi'
import { postMeetingsOperationCreateAttendeesRoute } from '../routes'

const app = new OpenAPIHono()

export const meetingsOperationCreateAttendeesHandler = app.openapi(
  postMeetingsOperationCreateAttendeesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
