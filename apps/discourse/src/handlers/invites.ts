import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvitesCreateMultipleJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app.openapi(postInvitesCreateMultipleJsonRoute, (c) => {
  throw new Error('Not implemented')
})
