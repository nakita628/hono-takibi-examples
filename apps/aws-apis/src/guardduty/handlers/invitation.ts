import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvitationCountRoute,
  getInvitationRoute,
  postInvitationDeclineRoute,
  postInvitationDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationHandler = app
  .openapi(postInvitationDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
