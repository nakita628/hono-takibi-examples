import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLobbiesLobbyIdMembersMeRoute,
  deleteLobbiesLobbyIdMembersUserIdRoute,
  deleteLobbiesLobbyIdRoute,
  getLobbiesLobbyIdMessagesRoute,
  getLobbiesLobbyIdRoute,
  patchLobbiesLobbyIdChannelLinkingRoute,
  patchLobbiesLobbyIdRoute,
  postLobbiesLobbyIdMembersBulkRoute,
  postLobbiesLobbyIdMembersMeInvitesRoute,
  postLobbiesLobbyIdMembersUserIdInvitesRoute,
  postLobbiesLobbyIdMessagesRoute,
  postLobbiesRoute,
  putLobbiesLobbyIdMembersUserIdRoute,
  putLobbiesLobbyIdMessagesMessageIdModerationMetadataRoute,
  putLobbiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lobbiesHandler = app
  .openapi(putLobbiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLobbiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLobbiesLobbyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLobbiesLobbyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLobbiesLobbyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLobbiesLobbyIdChannelLinkingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLobbiesLobbyIdMembersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLobbiesLobbyIdMembersMeInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLobbiesLobbyIdMembersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLobbiesLobbyIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLobbiesLobbyIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLobbiesLobbyIdMembersUserIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLobbiesLobbyIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLobbiesLobbyIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLobbiesLobbyIdMessagesMessageIdModerationMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
