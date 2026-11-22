import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsMicrosoftGraphGetAllMessagesRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsFunctionsHandler = app
  .openapi(getTeamsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
