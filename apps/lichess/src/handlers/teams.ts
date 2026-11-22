import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiTeamAllRoute,
  getApiTeamOfUsernameRoute,
  getApiTeamSearchRoute,
  getApiTeamTeamIdArenaRoute,
  getApiTeamTeamIdRequestsRoute,
  getApiTeamTeamIdRoute,
  getApiTeamTeamIdSwissRoute,
  getApiTeamTeamIdUsersRoute,
  getTeamUpdatesRoute,
  getTeamUpdatesTeamIdRoute,
  postApiTeamTeamIdKickUserIdRoute,
  postApiTeamTeamIdRequestUserIdAcceptRoute,
  postApiTeamTeamIdRequestUserIdDeclineRoute,
  postTeamTeamIdJoinRoute,
  postTeamTeamIdPmAllRoute,
  postTeamTeamIdQuitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getApiTeamTeamIdSwissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamOfUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdArenaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamTeamIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamTeamIdQuitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamTeamIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamTeamIdRequestUserIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamTeamIdRequestUserIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamTeamIdKickUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamUpdatesTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamTeamIdPmAllRoute, (c) => {
    throw new Error('Not implemented')
  })
