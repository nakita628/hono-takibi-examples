import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTeamInvitationIdRoute,
  getApiTeamInvitationIdRoute,
  getApiTeamInvitationRoute,
  postApiTeamInvitationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamInvitationHandler = app
  .openapi(getApiTeamInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTeamInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
