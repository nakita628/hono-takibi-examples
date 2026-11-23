import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvitationsCountRoute,
  getInvitationsRoute,
  postInvitationsAcceptRoute,
  postInvitationsDeclineRoute,
  postInvitationsDeleteRoute,
  postInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(postInvitationsAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
