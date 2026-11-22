import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV3AccountsAccountIdInvitesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app.openapi(postApiV3AccountsAccountIdInvitesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
