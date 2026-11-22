import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminInvitesIdRoute,
  getAdminInvitesIdRoute,
  getAdminInvitesRoute,
  postAdminInvitesAcceptRoute,
  postAdminInvitesIdResendRoute,
  postAdminInvitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app
  .openapi(getAdminInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInvitesAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInvitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminInvitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInvitesIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
