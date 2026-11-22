import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInvitesInviteIdRoute,
  deleteInvitesMultiuseInviteIdRoute,
  getInvitesRoute,
  postInvitesInviteIdResendRoute,
  postInvitesMultiuseRoute,
  postInvitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app
  .openapi(getInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitesMultiuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvitesMultiuseInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitesInviteIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
