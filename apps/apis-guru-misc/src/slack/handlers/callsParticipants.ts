import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallsParticipantsAddRoute, postCallsParticipantsRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const callsParticipantsHandler = app
  .openapi(postCallsParticipantsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsParticipantsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
