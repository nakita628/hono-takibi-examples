import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1EmailInboxIdRoute,
  getApiV1CalendarEventsInfoRoute,
  getApiV1CalendarEventsListRoute,
  getApiV1CommandsGetRoute,
  getApiV1CommandsListRoute,
  getApiV1CommandsPreviewRoute,
  getApiV1EmailInboxIdRoute,
  getApiV1EmailInboxListRoute,
  getApiV1EmailInboxSearchRoute,
  getApiV1LicensesInfoRoute,
  getApiV1LicensesMaxActiveUsersRoute,
  getApiV1ShieldSvgRoute,
  getApiV1SmtpCheckRoute,
  getApiV1SpotlightRoute,
  postApiAppsPublicAppIdIncomingRoute,
  postApiAppsPublicAppIdTemplateMessageRoute,
  postApiV1CalendarEventsCreateRoute,
  postApiV1CalendarEventsDeleteRoute,
  postApiV1CalendarEventsImportRoute,
  postApiV1CalendarEventsUpdateRoute,
  postApiV1CommandsPreviewRoute,
  postApiV1CommandsRunRoute,
  postApiV1EmailInboxRoute,
  postApiV1EmailInboxSendTestIdRoute,
  postApiV1FingerprintRoute,
  postApiV1LicensesAddRoute,
  postApiV1LicensesValidateRoute,
  postApiV1MailerRoute,
  postApiV1MailerUnsubscribeRoute,
  postApiV1VideoConferenceJitsiUpdateTimeoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1EmailInboxListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmailInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmailInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EmailInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmailInboxSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmailInboxSendTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ShieldSvgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SpotlightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SmtpCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LicensesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LicensesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LicensesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LicensesMaxActiveUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CommandsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CommandsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MailerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MailerUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CalendarEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CalendarEventsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAppsPublicAppIdIncomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceJitsiUpdateTimeoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAppsPublicAppIdTemplateMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
