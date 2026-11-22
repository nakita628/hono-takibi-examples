import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AuditRoomsMembersRoute,
  getApiV1RoomsAdminRoomsGetRoomRoute,
  getApiV1RoomsAdminRoomsRoute,
  getApiV1RoomsAutocompleteAdminRoomsRoute,
  getApiV1RoomsAutocompleteAvailableForTeamsRoute,
  getApiV1RoomsAutocompleteChannelAndPrivateRoute,
  getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRoute,
  getApiV1RoomsGetDiscussionsRoute,
  getApiV1RoomsGetRoute,
  getApiV1RoomsHistoryRoute,
  getApiV1RoomsImagesRoute,
  getApiV1RoomsInfoRoute,
  getApiV1RoomsIsMemberRoute,
  getApiV1RoomsMembersOrderedByRoleRoute,
  getApiV1RoomsNameExistsRoute,
  getApiV1RoomsRolesRoute,
  postApiV1RoomsChangeArchivationStateRoute,
  postApiV1RoomsCleanHistoryRoute,
  postApiV1RoomsCreateDiscussionRoute,
  postApiV1RoomsDeleteRoute,
  postApiV1RoomsExportRoute,
  postApiV1RoomsFavoriteRoute,
  postApiV1RoomsHideRoute,
  postApiV1RoomsJoinRoute,
  postApiV1RoomsLeaveRoute,
  postApiV1RoomsMediaConfirmRidFileIdRoute,
  postApiV1RoomsMediaRidRoute,
  postApiV1RoomsMuteUserRoute,
  postApiV1RoomsOpenRoute,
  postApiV1RoomsSaveDraftRoute,
  postApiV1RoomsSaveNotificationRoute,
  postApiV1RoomsSaveRoomSettingsRoute,
  postApiV1RoomsUnmuteUserRoute,
  postApiV1UploadsDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomsHandler = app
  .openapi(postApiV1RoomsSaveNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsSaveDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsCleanHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsGetDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteAvailableForTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteChannelAndPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAdminRoomsGetRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsSaveRoomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsChangeArchivationStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsMuteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsUnmuteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsCreateDiscussionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuditRoomsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsMembersOrderedByRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsIsMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsMediaRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsMediaConfirmRidFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UploadsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
