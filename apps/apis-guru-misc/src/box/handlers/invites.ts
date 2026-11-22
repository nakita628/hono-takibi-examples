import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvitesInviteIdRoute, postInvitesRoute } from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app
  .openapi(postInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
