import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelArnBansMemberArnRoute,
  deleteChannelsChannelArnMembershipsMemberArnRoute,
  deleteChannelsChannelArnMessagesMessageIdRoute,
  deleteChannelsChannelArnModeratorsChannelModeratorArnRoute,
  deleteChannelsChannelArnRoute,
  getChannelsChannelArnBansMemberArnRoute,
  getChannelsChannelArnBansRoute,
  getChannelsChannelArnMembershipsMemberArnRoute,
  getChannelsChannelArnMembershipsRoute,
  getChannelsChannelArnMessagesMessageIdRoute,
  getChannelsChannelArnMessagesRoute,
  getChannelsChannelArnModeratorsChannelModeratorArnRoute,
  getChannelsChannelArnModeratorsRoute,
  getChannelsChannelArnRoute,
  getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnRoute,
  getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnRoute,
  postChannelsChannelArnBansRoute,
  postChannelsChannelArnMembershipsOperationBatchCreateRoute,
  postChannelsChannelArnMembershipsRoute,
  postChannelsChannelArnMessagesMessageIdOperationRedactRoute,
  postChannelsChannelArnMessagesRoute,
  postChannelsChannelArnModeratorsRoute,
  postChannelsRoute,
  putChannelsChannelArnMessagesMessageIdRoute,
  putChannelsChannelArnReadMarkerRoute,
  putChannelsChannelArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(postChannelsChannelArnMembershipsOperationBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelArnBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelArnMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelArnModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelArnBansMemberArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnBansMemberArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelArnMembershipsMemberArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnMembershipsMemberArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelArnMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelArnMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelArnModeratorsChannelModeratorArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnModeratorsChannelModeratorArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getChannelsChannelArnMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelArnMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelArnMessagesMessageIdOperationRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelArnReadMarkerRoute, (c) => {
    throw new Error('Not implemented')
  })
