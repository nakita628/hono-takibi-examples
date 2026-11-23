import { OpenAPIHono } from '@hono/zod-openapi'
import { postInviteToAppRoute } from '../routes'

const app = new OpenAPIHono()

export const inviteToAppHandler = app.openapi(postInviteToAppRoute, (c) => {
  throw new Error('Not implemented')
})
