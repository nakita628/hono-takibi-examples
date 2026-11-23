import { OpenAPIHono } from '@hono/zod-openapi'
import { postInviteFromWaitlistRoute } from '../routes'

const app = new OpenAPIHono()

export const inviteFromWaitlistHandler = app.openapi(postInviteFromWaitlistRoute, (c) => {
  throw new Error('Not implemented')
})
