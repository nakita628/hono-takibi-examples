import { OpenAPIHono } from '@hono/zod-openapi'
import { getInviteTokenValidateRoute, postInviteTokenSignupRoute } from '../routes'

const app = new OpenAPIHono()

export const inviteHandler = app
  .openapi(getInviteTokenValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInviteTokenSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
