import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
  deleteAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdTokenRoute,
  getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
  getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsRoute,
  getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdRoute,
  getAccountsAccountIdRealtimeKitAppIdMeetingsRoute,
  patchAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
  patchAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdTokenRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsRoute,
  putAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
  putAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingsHandler = app
  .openapi(getAccountsAccountIdRealtimeKitAppIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdParticipantsParticipantIdTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
