import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvitationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app.openapi(postInvitationsListRoute, (c) => {
  throw new Error('Not implemented')
})
