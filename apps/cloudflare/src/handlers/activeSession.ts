import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionKickAllRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionKickRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionMuteAllRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionMuteRoute,
  postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionPollRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activeSessionHandler = app
  .openapi(getAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionKickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionKickAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionMuteAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdMeetingsMeetingIdActiveSessionPollRoute, (c) => {
    throw new Error('Not implemented')
  })
