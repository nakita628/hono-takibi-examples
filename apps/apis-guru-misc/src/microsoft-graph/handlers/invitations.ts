import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvitationsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app.openapi(getInvitationsCountRoute, (c) => {
  throw new Error('Not implemented')
})
