import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteInvitationsIdRoute, getInvitationsIdRoute, putInvitationsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(deleteInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
