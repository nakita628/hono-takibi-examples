import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvitationRemovalRoute, putInvitationRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationHandler = app
  .openapi(putInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationRemovalRoute, (c) => {
    throw new Error('Not implemented')
  })
