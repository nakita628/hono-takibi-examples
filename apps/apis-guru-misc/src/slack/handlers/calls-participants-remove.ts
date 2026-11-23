import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallsParticipantsRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const callsParticipantsRemoveHandler = app.openapi(postCallsParticipantsRemoveRoute, (c) => {
  throw new Error('Not implemented')
})
