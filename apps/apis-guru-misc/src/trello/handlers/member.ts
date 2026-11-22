import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
  deleteMembersIdMemberBoardStarsIdBoardStarRoute,
  deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
  deleteMembersIdMemberCustomStickersIdCustomStickerRoute,
  deleteMembersIdMemberSavedSearchesIdSavedSearchRoute,
  getMembersIdMemberActionsRoute,
  getMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
  getMembersIdMemberBoardBackgroundsRoute,
  getMembersIdMemberBoardsFilterRoute,
  getMembersIdMemberBoardsInvitedFieldRoute,
  getMembersIdMemberBoardsInvitedRoute,
  getMembersIdMemberBoardsRoute,
  getMembersIdMemberBoardStarsIdBoardStarRoute,
  getMembersIdMemberBoardStarsRoute,
  getMembersIdMemberCardsFilterRoute,
  getMembersIdMemberCardsRoute,
  getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
  getMembersIdMemberCustomBoardBackgroundsRoute,
  getMembersIdMemberCustomEmojiIdCustomEmojiRoute,
  getMembersIdMemberCustomEmojiRoute,
  getMembersIdMemberCustomStickersIdCustomStickerRoute,
  getMembersIdMemberCustomStickersRoute,
  getMembersIdMemberDeltasRoute,
  getMembersIdMemberFieldRoute,
  getMembersIdMemberNotificationsFilterRoute,
  getMembersIdMemberNotificationsRoute,
  getMembersIdMemberOrganizationsFilterRoute,
  getMembersIdMemberOrganizationsInvitedFieldRoute,
  getMembersIdMemberOrganizationsInvitedRoute,
  getMembersIdMemberOrganizationsRoute,
  getMembersIdMemberRoute,
  getMembersIdMemberSavedSearchesIdSavedSearchRoute,
  getMembersIdMemberSavedSearchesRoute,
  getMembersIdMemberTokensRoute,
  postMembersIdMemberAvatarRoute,
  postMembersIdMemberBoardBackgroundsRoute,
  postMembersIdMemberBoardStarsRoute,
  postMembersIdMemberCustomBoardBackgroundsRoute,
  postMembersIdMemberCustomEmojiRoute,
  postMembersIdMemberCustomStickersRoute,
  postMembersIdMemberOneTimeMessagesDismissedRoute,
  postMembersIdMemberSavedSearchesRoute,
  putMembersIdMemberAvatarSourceRoute,
  putMembersIdMemberBioRoute,
  putMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
  putMembersIdMemberBoardStarsIdBoardStarIdBoardRoute,
  putMembersIdMemberBoardStarsIdBoardStarPosRoute,
  putMembersIdMemberBoardStarsIdBoardStarRoute,
  putMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
  putMembersIdMemberFullNameRoute,
  putMembersIdMemberInitialsRoute,
  putMembersIdMemberPrefsColorBlindRoute,
  putMembersIdMemberPrefsLocaleRoute,
  putMembersIdMemberPrefsMinutesBetweenSummariesRoute,
  putMembersIdMemberRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchNameRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchPosRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchQueryRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchRoute,
  putMembersIdMemberUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memberHandler = app
  .openapi(getMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberAvatarSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberBioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardStarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberBoardStarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdMemberBoardStarsIdBoardStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardStarsIdBoardStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberBoardStarsIdBoardStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberBoardStarsIdBoardStarIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberBoardStarsIdBoardStarPosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardsInvitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberBoardsInvitedFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCardsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCustomBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberCustomBoardBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCustomEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberCustomEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCustomEmojiIdCustomEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCustomStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberCustomStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdMemberCustomStickersIdCustomStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberCustomStickersIdCustomStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberInitialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberNotificationsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberOneTimeMessagesDismissedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberOrganizationsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberOrganizationsInvitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberOrganizationsInvitedFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberPrefsColorBlindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberPrefsLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberPrefsMinutesBetweenSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberSavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersIdMemberSavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdMemberSavedSearchesIdSavedSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberSavedSearchesIdSavedSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberSavedSearchesIdSavedSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberSavedSearchesIdSavedSearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberSavedSearchesIdSavedSearchPosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberSavedSearchesIdSavedSearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembersIdMemberUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdMemberFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
