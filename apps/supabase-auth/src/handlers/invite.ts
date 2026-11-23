import { OpenAPIHono } from '@hono/zod-openapi'
import { postInviteRoute } from '../routes'

const app = new OpenAPIHono()

export const inviteHandler = app.openapi(postInviteRoute, (c) => {
  throw new Error('Not implemented')
})
