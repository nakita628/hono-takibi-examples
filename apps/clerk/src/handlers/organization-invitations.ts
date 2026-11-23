import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationInvitationsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationInvitationsHandler = app.openapi(getOrganizationInvitationsRoute, (c) => {
  throw new Error('Not implemented')
})
