import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvitesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app.openapi(postInvitesJsonRoute, (c) => {
  throw new Error('Not implemented')
})
