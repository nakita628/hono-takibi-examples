import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute,
  getOcsV2PhpAppsSpreedApiApiVersionListedRoomRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionListedRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutRoute, (c) => {
    throw new Error('Not implemented')
  })
