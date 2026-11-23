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
} from './routes'
import {
  deleteApiV1EmailInboxIdRouteHandler,
  getApiV1CalendarEventsInfoRouteHandler,
  getApiV1CalendarEventsListRouteHandler,
  getApiV1CommandsGetRouteHandler,
  getApiV1CommandsListRouteHandler,
  getApiV1CommandsPreviewRouteHandler,
  getApiV1EmailInboxIdRouteHandler,
  getApiV1EmailInboxListRouteHandler,
  getApiV1EmailInboxSearchRouteHandler,
  getApiV1LicensesInfoRouteHandler,
  getApiV1LicensesMaxActiveUsersRouteHandler,
  getApiV1ShieldSvgRouteHandler,
  getApiV1SmtpCheckRouteHandler,
  getApiV1SpotlightRouteHandler,
  postApiAppsPublicAppIdIncomingRouteHandler,
  postApiAppsPublicAppIdTemplateMessageRouteHandler,
  postApiV1CalendarEventsCreateRouteHandler,
  postApiV1CalendarEventsDeleteRouteHandler,
  postApiV1CalendarEventsImportRouteHandler,
  postApiV1CalendarEventsUpdateRouteHandler,
  postApiV1CommandsPreviewRouteHandler,
  postApiV1CommandsRunRouteHandler,
  postApiV1EmailInboxRouteHandler,
  postApiV1EmailInboxSendTestIdRouteHandler,
  postApiV1FingerprintRouteHandler,
  postApiV1LicensesAddRouteHandler,
  postApiV1LicensesValidateRouteHandler,
  postApiV1MailerRouteHandler,
  postApiV1MailerUnsubscribeRouteHandler,
  postApiV1VideoConferenceJitsiUpdateTimeoutRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1EmailInboxListRoute, getApiV1EmailInboxListRouteHandler)
  .openapi(postApiV1EmailInboxRoute, postApiV1EmailInboxRouteHandler)
  .openapi(getApiV1EmailInboxIdRoute, getApiV1EmailInboxIdRouteHandler)
  .openapi(deleteApiV1EmailInboxIdRoute, deleteApiV1EmailInboxIdRouteHandler)
  .openapi(getApiV1EmailInboxSearchRoute, getApiV1EmailInboxSearchRouteHandler)
  .openapi(postApiV1EmailInboxSendTestIdRoute, postApiV1EmailInboxSendTestIdRouteHandler)
  .openapi(getApiV1ShieldSvgRoute, getApiV1ShieldSvgRouteHandler)
  .openapi(getApiV1SpotlightRoute, getApiV1SpotlightRouteHandler)
  .openapi(getApiV1SmtpCheckRoute, getApiV1SmtpCheckRouteHandler)
  .openapi(postApiV1FingerprintRoute, postApiV1FingerprintRouteHandler)
  .openapi(getApiV1LicensesInfoRoute, getApiV1LicensesInfoRouteHandler)
  .openapi(postApiV1LicensesAddRoute, postApiV1LicensesAddRouteHandler)
  .openapi(postApiV1LicensesValidateRoute, postApiV1LicensesValidateRouteHandler)
  .openapi(getApiV1LicensesMaxActiveUsersRoute, getApiV1LicensesMaxActiveUsersRouteHandler)
  .openapi(getApiV1CommandsGetRoute, getApiV1CommandsGetRouteHandler)
  .openapi(getApiV1CommandsListRoute, getApiV1CommandsListRouteHandler)
  .openapi(getApiV1CommandsPreviewRoute, getApiV1CommandsPreviewRouteHandler)
  .openapi(postApiV1CommandsPreviewRoute, postApiV1CommandsPreviewRouteHandler)
  .openapi(postApiV1CommandsRunRoute, postApiV1CommandsRunRouteHandler)
  .openapi(postApiV1MailerRoute, postApiV1MailerRouteHandler)
  .openapi(postApiV1MailerUnsubscribeRoute, postApiV1MailerUnsubscribeRouteHandler)
  .openapi(getApiV1CalendarEventsListRoute, getApiV1CalendarEventsListRouteHandler)
  .openapi(getApiV1CalendarEventsInfoRoute, getApiV1CalendarEventsInfoRouteHandler)
  .openapi(postApiV1CalendarEventsCreateRoute, postApiV1CalendarEventsCreateRouteHandler)
  .openapi(postApiV1CalendarEventsUpdateRoute, postApiV1CalendarEventsUpdateRouteHandler)
  .openapi(postApiV1CalendarEventsDeleteRoute, postApiV1CalendarEventsDeleteRouteHandler)
  .openapi(postApiV1CalendarEventsImportRoute, postApiV1CalendarEventsImportRouteHandler)
  .openapi(postApiAppsPublicAppIdIncomingRoute, postApiAppsPublicAppIdIncomingRouteHandler)
  .openapi(
    postApiV1VideoConferenceJitsiUpdateTimeoutRoute,
    postApiV1VideoConferenceJitsiUpdateTimeoutRouteHandler,
  )
  .openapi(
    postApiAppsPublicAppIdTemplateMessageRoute,
    postApiAppsPublicAppIdTemplateMessageRouteHandler,
  )

export default app
