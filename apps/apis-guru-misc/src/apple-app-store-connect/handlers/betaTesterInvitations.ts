import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1BetaTesterInvitationsRoute } from '../routes'

const app = new OpenAPIHono()

export const betaTesterInvitationsHandler = app.openapi(postV1BetaTesterInvitationsRoute, (c) => {
  throw new Error('Not implemented')
})
