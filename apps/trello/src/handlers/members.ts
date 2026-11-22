import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMembersIdBoardBackgroundsIdBackgroundRoute,
  deleteMembersIdBoardStarsIdStarRoute,
  deleteMembersIdCustomBoardBackgroundsIdBackgroundRoute,
  deleteMembersIdCustomStickersIdStickerRoute,
  deleteMembersIdSavedSearchesIdSearchRoute,
  getMembersIdActionsRoute,
  getMembersIdBoardBackgroundsIdBackgroundRoute,
  getMembersIdBoardBackgroundsRoute,
  getMembersIdBoardsInvitedRoute,
  getMembersIdBoardsRoute,
  getMembersIdBoardStarsIdStarRoute,
  getMembersIdBoardStarsRoute,
  getMembersIdCardsRoute,
  getMembersIdCustomBoardBackgroundsIdBackgroundRoute,
  getMembersIdCustomBoardBackgroundsRoute,
  getMembersIdCustomEmojiIdEmojiRoute,
  getMembersIdCustomEmojiRoute,
  getMembersIdCustomStickersIdStickerRoute,
  getMembersIdCustomStickersRoute,
  getMembersIdFieldRoute,
  getMembersIdNotificationChannelSettingsChannelRoute,
  getMembersIdNotificationChannelSettingsRoute,
  getMembersIdNotificationsRoute,
  getMembersIdOrganizationsInvitedRoute,
  getMembersIdOrganizationsRoute,
  getMembersIdRoute,
  getMembersIdSavedSearchesIdSearchRoute,
  getMembersIdSavedSearchesRoute,
  getMembersIdTokensRoute,
  postMembersIdAvatarRoute,
  postMembersIdBoardBackgroundsRoute,
  postMembersIdBoardStarsRoute,
  postMembersIdCustomBoardBackgroundsRoute,
  postMembersIdCustomEmojiRoute,
  postMembersIdCustomStickersRoute,
  postMembersIdOneTimeMessagesDismissedRoute,
  postMembersIdSavedSearchesRoute,
  putMembersIdBoardBackgroundsIdBackgroundRoute,
  putMembersIdBoardStarsIdStarRoute,
  putMembersIdCustomBoardBackgroundsIdBackgroundRoute,
  putMembersIdNotificationChannelSettingsChannelBlockedKeysRoute,
  putMembersIdNotificationChannelSettingsChannelRoute,
  putMembersIdNotificationChannelSettingsRoute,
  putMembersIdRoute,
  putMembersIdSavedSearchesIdSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getMembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdBoardBackgroundsIdBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdBoardBackgroundsIdBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdBoardBackgroundsIdBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdBoardStarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdBoardStarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdBoardStarsIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdBoardStarsIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdBoardStarsIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdBoardsInvitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdCustomBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdCustomBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdCustomBoardBackgroundsIdBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdCustomBoardBackgroundsIdBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdCustomBoardBackgroundsIdBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdCustomEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdCustomEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdCustomEmojiIdEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdCustomStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdCustomStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdCustomStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdCustomStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdOrganizationsInvitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdSavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdSavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdSavedSearchesIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdSavedSearchesIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdSavedSearchesIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdOneTimeMessagesDismissedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdNotificationChannelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdNotificationChannelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdNotificationChannelSettingsChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdNotificationChannelSettingsChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdNotificationChannelSettingsChannelBlockedKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
