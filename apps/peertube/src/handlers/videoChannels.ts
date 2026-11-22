import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideoChannelsChannelHandleAvatarRoute,
  deleteApiV1VideoChannelsChannelHandleBannerRoute,
  deleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRoute,
  deleteApiV1VideoChannelsChannelHandleRoute,
  getApiV1AccountsNameVideoChannelsRoute,
  getApiV1AccountsNameVideoChannelSyncsRoute,
  getApiV1VideoChannelsChannelHandleActivitiesRoute,
  getApiV1VideoChannelsChannelHandleCollaboratorsRoute,
  getApiV1VideoChannelsChannelHandleFollowersRoute,
  getApiV1VideoChannelsChannelHandleRoute,
  getApiV1VideoChannelsRoute,
  postApiV1VideoChannelsChannelHandleAvatarPickRoute,
  postApiV1VideoChannelsChannelHandleBannerPickRoute,
  postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptRoute,
  postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectRoute,
  postApiV1VideoChannelsChannelHandleCollaboratorsInviteRoute,
  postApiV1VideoChannelsChannelHandleImportVideosRoute,
  postApiV1VideoChannelsRoute,
  putApiV1VideoChannelsChannelHandleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoChannelsHandler = app
  .openapi(getApiV1VideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleBannerPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleImportVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoChannelSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleCollaboratorsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
