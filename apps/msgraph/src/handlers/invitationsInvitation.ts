import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvitationsCountRoute, getInvitationsRoute, postInvitationsRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationsInvitationHandler = app
  .openapi(getInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
