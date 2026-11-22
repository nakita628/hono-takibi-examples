import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRealtimeKitAppIdSessionsPeerReportPeerIdRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdChatRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdParticipantsParticipantIdRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdParticipantsRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdSummaryRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdTranscriptRoute,
  postAccountsAccountIdRealtimeKitAppIdSessionsSessionIdSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsPeerReportPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdParticipantsParticipantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdSessionsSessionIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
