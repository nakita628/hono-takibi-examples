import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallsParticipantsAddRoute } from '../routes'

const app = new OpenAPIHono()

export const callsParticipantsAddHandler = app.openapi(postCallsParticipantsAddRoute, (c) => {
  throw new Error('Not implemented')
})
