import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvitationVendorsRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationHandler = app.openapi(postInvitationVendorsRoute, (c) => {
  throw new Error('Not implemented')
})
