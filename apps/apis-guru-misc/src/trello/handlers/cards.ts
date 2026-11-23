import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCardsIdCardActionsIdActionCommentsRoute,
  deleteCardsIdCardAttachmentsIdAttachmentRoute,
  deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute,
  deleteCardsIdCardChecklistsIdChecklistRoute,
  deleteCardsIdCardIdLabelsIdLabelRoute,
  deleteCardsIdCardIdMembersIdMemberRoute,
  deleteCardsIdCardLabelsColorRoute,
  deleteCardsIdCardMembersVotedIdMemberRoute,
  deleteCardsIdCardRoute,
  deleteCardsIdCardStickersIdStickerRoute,
  getCardsIdCardActionsRoute,
  getCardsIdCardAttachmentsIdAttachmentRoute,
  getCardsIdCardAttachmentsRoute,
  getCardsIdCardBoardFieldRoute,
  getCardsIdCardBoardRoute,
  getCardsIdCardCheckItemStatesRoute,
  getCardsIdCardChecklistsRoute,
  getCardsIdCardFieldRoute,
  getCardsIdCardListFieldRoute,
  getCardsIdCardListRoute,
  getCardsIdCardMembersRoute,
  getCardsIdCardMembersVotedRoute,
  getCardsIdCardRoute,
  getCardsIdCardStickersIdStickerRoute,
  getCardsIdCardStickersRoute,
  postCardsIdCardActionsCommentsRoute,
  postCardsIdCardAttachmentsRoute,
  postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardRoute,
  postCardsIdCardChecklistIdChecklistCheckItemRoute,
  postCardsIdCardChecklistsRoute,
  postCardsIdCardIdLabelsRoute,
  postCardsIdCardIdMembersRoute,
  postCardsIdCardLabelsRoute,
  postCardsIdCardMarkAssociatedNotificationsReadRoute,
  postCardsIdCardMembersVotedRoute,
  postCardsIdCardStickersRoute,
  postCardsRoute,
  putCardsIdCardActionsIdActionCommentsRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateRoute,
  putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemRoute,
  putCardsIdCardClosedRoute,
  putCardsIdCardDescRoute,
  putCardsIdCardDueRoute,
  putCardsIdCardIdAttachmentCoverRoute,
  putCardsIdCardIdBoardRoute,
  putCardsIdCardIdListRoute,
  putCardsIdCardIdMembersRoute,
  putCardsIdCardLabelsRoute,
  putCardsIdCardNameRoute,
  putCardsIdCardPosRoute,
  putCardsIdCardRoute,
  putCardsIdCardStickersIdStickerRoute,
  putCardsIdCardSubscribedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app
  .openapi(postCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardActionsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardActionsIdActionCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardActionsIdActionCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardAttachmentsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardAttachmentsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardBoardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardCheckItemStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardChecklistIdChecklistCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardChecklistsIdChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardClosedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardDescRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardDueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardIdAttachmentCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardIdLabelsIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardIdMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardLabelsColorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardListFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardMarkAssociatedNotificationsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardMembersVotedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardMembersVotedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardMembersVotedIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardPosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdCardStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCardStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardSubscribedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
