import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRealtimeKitAppIdAnalyticsLivestreamsDaywiseRoute,
  getAccountsAccountIdRealtimeKitAppIdAnalyticsLivestreamsOverallRoute,
  getAccountsAccountIdRealtimeKitAppIdLivestreamsLivestreamIdActiveLivestreamSessionRoute,
  getAccountsAccountIdRealtimeKitAppIdLivestreamsLivestreamIdRoute,
  getAccountsAccountIdRealtimeKitAppIdLivestreamsRoute,
  getAccountsAccountIdRealtimeKitAppIdLivestreamsSessionsLivestreamSessionIdRoute,
  getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveLivestreamRoute,
  getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdLivestreamRoute,
  getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdLivestreamSessionsRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveLivestreamStopRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdLivestreamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveStreamsHandler = app
  .openapi(getAccountsAccountIdRealtimeKitAppIdAnalyticsLivestreamsDaywiseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdAnalyticsLivestreamsOverallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdLivestreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdLivestreamsSessionsLivestreamSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdLivestreamsLivestreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdRealtimeKitAppIdLivestreamsLivestreamIdActiveLivestreamSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveLivestreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveLivestreamStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdLivestreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdLivestreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdSessionsSessionIdLivestreamSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
