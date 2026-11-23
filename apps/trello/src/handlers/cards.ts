import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCardsIdActionsIdActionCommentsRoute,
  deleteCardsIdAttachmentsIdAttachmentRoute,
  deleteCardsIdCheckItemIdCheckItemRoute,
  deleteCardsIdChecklistsIdChecklistRoute,
  deleteCardsIdIdLabelsIdLabelRoute,
  deleteCardsIdIdMembersIdMemberRoute,
  deleteCardsIdMembersVotedIdMemberRoute,
  deleteCardsIdRoute,
  deleteCardsIdStickersIdStickerRoute,
  getCardsIdActionsRoute,
  getCardsIdAttachmentsIdAttachmentRoute,
  getCardsIdAttachmentsRoute,
  getCardsIdBoardRoute,
  getCardsIdCheckItemIdCheckItemRoute,
  getCardsIdCheckItemStatesRoute,
  getCardsIdChecklistsRoute,
  getCardsIdCustomFieldItemsRoute,
  getCardsIdFieldRoute,
  getCardsIdListRoute,
  getCardsIdMembersRoute,
  getCardsIdMembersVotedRoute,
  getCardsIdPluginDataRoute,
  getCardsIdRoute,
  getCardsIdStickersIdStickerRoute,
  getCardsIdStickersRoute,
  postCardsIdActionsCommentsRoute,
  postCardsIdAttachmentsRoute,
  postCardsIdChecklistsRoute,
  postCardsIdIdLabelsRoute,
  postCardsIdIdMembersRoute,
  postCardsIdLabelsRoute,
  postCardsIdMarkAssociatedNotificationsReadRoute,
  postCardsIdMembersVotedRoute,
  postCardsIdStickersRoute,
  postCardsRoute,
  putCardsIdActionsIdActionCommentsRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute,
  putCardsIdCardCustomFieldIdCustomFieldItemRoute,
  putCardsIdCardCustomFieldsRoute,
  putCardsIdCheckItemIdCheckItemRoute,
  putCardsIdRoute,
  putCardsIdStickersIdStickerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app
  .openapi(postCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdAttachmentsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdAttachmentsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCheckItemStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCheckItemIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCheckItemIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdCheckItemIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdMembersVotedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdMembersVotedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdPluginDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdStickersIdStickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdActionsIdActionCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdActionsIdActionCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardCustomFieldIdCustomFieldItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsIdCustomFieldItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdActionsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsIdMarkAssociatedNotificationsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdIdLabelsIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdIdMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdMembersVotedIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsIdChecklistsIdChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
