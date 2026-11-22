import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UserInvitationsIdRoute,
  getV1UserInvitationsIdRoute,
  getV1UserInvitationsIdVisibleAppsRoute,
  getV1UserInvitationsRoute,
  postV1UserInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userInvitationsHandler = app
  .openapi(getV1UserInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserInvitationsIdVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
