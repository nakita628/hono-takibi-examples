import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminConversationsGetConversationPrefsRoute,
  getAdminConversationsGetTeamsRoute,
  getAdminConversationsSearchRoute,
  postAdminConversationsArchiveRoute,
  postAdminConversationsConvertToPrivateRoute,
  postAdminConversationsCreateRoute,
  postAdminConversationsDeleteRoute,
  postAdminConversationsDisconnectSharedRoute,
  postAdminConversationsInviteRoute,
  postAdminConversationsRenameRoute,
  postAdminConversationsSetConversationPrefsRoute,
  postAdminConversationsSetTeamsRoute,
  postAdminConversationsUnarchiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminConversationsHandler = app
  .openapi(postAdminConversationsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsConvertToPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsDisconnectSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConversationsGetConversationPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConversationsGetTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConversationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsSetConversationPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsSetTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
