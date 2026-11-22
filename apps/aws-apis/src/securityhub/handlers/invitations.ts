import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvitationsCountRoute,
  getInvitationsRoute,
  postInvitationsDeclineRoute,
  postInvitationsDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(postInvitationsDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
