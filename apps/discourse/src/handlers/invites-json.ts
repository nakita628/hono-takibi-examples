import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvitesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const invitesJsonHandler = app.openapi(postInvitesJsonRoute, (c) => {
  throw new Error('Not implemented')
})
