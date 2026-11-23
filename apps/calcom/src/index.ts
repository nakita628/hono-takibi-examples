import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2BookingsBookingUidAttendeesAttendeeIdRoute,
  deleteV2CalendarsCalendarEventsEventUidRoute,
  deleteV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
  deleteV2ConferencingAppDisconnectRoute,
  deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRoute,
  deleteV2EventTypesEventTypeIdRoute,
  deleteV2EventTypesEventTypeIdWebhooksRoute,
  deleteV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
  deleteV2OauthClientsClientIdRoute,
  deleteV2OauthClientsClientIdUsersUserIdRoute,
  deleteV2OauthClientsClientIdWebhooksRoute,
  deleteV2OauthClientsClientIdWebhooksWebhookIdRoute,
  deleteV2SchedulesScheduleIdRoute,
  deleteV2SelectedCalendarsRoute,
  deleteV2SlotsReservationsUidRoute,
  deleteV2WebhooksWebhookIdRoute,
  getV2AuthOauth2ClientsClientIdRoute,
  getV2BookingsBookingUidAttendeesAttendeeIdRoute,
  getV2BookingsBookingUidAttendeesRoute,
  getV2BookingsBookingUidCalendarLinksRoute,
  getV2BookingsBookingUidConferencingSessionsRoute,
  getV2BookingsBookingUidRecordingsRoute,
  getV2BookingsBookingUidReferencesRoute,
  getV2BookingsBookingUidRoute,
  getV2BookingsBookingUidTranscriptsRoute,
  getV2BookingsBySeatSeatUidRoute,
  getV2BookingsRoute,
  getV2CalendarsBusyTimesRoute,
  getV2CalendarsCalendarCheckRoute,
  getV2CalendarsCalendarConnectRoute,
  getV2CalendarsCalendarEventEventUidRoute,
  getV2CalendarsCalendarEventsEventUidRoute,
  getV2CalendarsCalendarEventsRoute,
  getV2CalendarsCalendarFreebusyRoute,
  getV2CalendarsCalendarSaveRoute,
  getV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
  getV2CalendarsConnectionsConnectionIdEventsRoute,
  getV2CalendarsConnectionsConnectionIdFreebusyRoute,
  getV2CalendarsConnectionsRoute,
  getV2CalendarsIcsFeedCheckRoute,
  getV2CalendarsRoute,
  getV2ConferencingAppOauthAuthUrlRoute,
  getV2ConferencingAppOauthCallbackRoute,
  getV2ConferencingDefaultRoute,
  getV2ConferencingRoute,
  getV2EventTypesEventTypeIdPrivateLinksRoute,
  getV2EventTypesEventTypeIdRoute,
  getV2EventTypesEventTypeIdWebhooksRoute,
  getV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
  getV2EventTypesRoute,
  getV2MeRoute,
  getV2OauthClientsClientIdRoute,
  getV2OauthClientsClientIdUsersRoute,
  getV2OauthClientsClientIdUsersUserIdRoute,
  getV2OauthClientsClientIdWebhooksRoute,
  getV2OauthClientsClientIdWebhooksWebhookIdRoute,
  getV2OauthClientsRoute,
  getV2SchedulesDefaultRoute,
  getV2SchedulesRoute,
  getV2SchedulesScheduleIdRoute,
  getV2SlotsReservationsUidRoute,
  getV2SlotsRoute,
  getV2StripeCheckRoute,
  getV2StripeConnectRoute,
  getV2StripeSaveRoute,
  getV2VerifiedResourcesEmailsIdRoute,
  getV2VerifiedResourcesEmailsRoute,
  getV2VerifiedResourcesPhonesIdRoute,
  getV2VerifiedResourcesPhonesRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdRoute,
  patchV2BookingsBookingUidLocationRoute,
  patchV2CalendarsCalendarEventEventUidRoute,
  patchV2CalendarsCalendarEventsEventUidRoute,
  patchV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
  patchV2EventTypesEventTypeIdPrivateLinksLinkIdRoute,
  patchV2EventTypesEventTypeIdRoute,
  patchV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
  patchV2MeRoute,
  patchV2OauthClientsClientIdRoute,
  patchV2OauthClientsClientIdUsersUserIdRoute,
  patchV2OauthClientsClientIdWebhooksWebhookIdRoute,
  patchV2SchedulesScheduleIdRoute,
  patchV2SlotsReservationsUidRoute,
  patchV2WebhooksWebhookIdRoute,
  postV2ApiKeysRefreshRoute,
  postV2AuthOauth2TokenRoute,
  postV2BookingsBookingUidAttendeesRoute,
  postV2BookingsBookingUidCancelRoute,
  postV2BookingsBookingUidConfirmRoute,
  postV2BookingsBookingUidDeclineRoute,
  postV2BookingsBookingUidGuestsRoute,
  postV2BookingsBookingUidMarkAbsentRoute,
  postV2BookingsBookingUidReassignRoute,
  postV2BookingsBookingUidReassignUserIdRoute,
  postV2BookingsBookingUidRescheduleRoute,
  postV2BookingsRoute,
  postV2CalendarsCalendarCredentialsRoute,
  postV2CalendarsCalendarDisconnectRoute,
  postV2CalendarsCalendarEventsRoute,
  postV2CalendarsConnectionsConnectionIdEventsRoute,
  postV2CalendarsIcsFeedSaveRoute,
  postV2ConferencingAppConnectRoute,
  postV2ConferencingAppDefaultRoute,
  postV2EventTypesEventTypeIdPrivateLinksRoute,
  postV2EventTypesEventTypeIdWebhooksRoute,
  postV2EventTypesRoute,
  postV2OauthClientIdRefreshRoute,
  postV2OauthClientsClientIdUsersRoute,
  postV2OauthClientsClientIdUsersUserIdForceRefreshRoute,
  postV2OauthClientsClientIdWebhooksRoute,
  postV2OauthClientsRoute,
  postV2SchedulesRoute,
  postV2SelectedCalendarsRoute,
  postV2SlotsReservationsRoute,
  postV2VerifiedResourcesEmailsVerificationCodeRequestRoute,
  postV2VerifiedResourcesEmailsVerificationCodeVerifyRoute,
  postV2VerifiedResourcesPhonesVerificationCodeRequestRoute,
  postV2VerifiedResourcesPhonesVerificationCodeVerifyRoute,
  postV2WebhooksRoute,
  putV2DestinationCalendarsRoute,
} from './routes'
import {
  deleteV2BookingsBookingUidAttendeesAttendeeIdRouteHandler,
  deleteV2CalendarsCalendarEventsEventUidRouteHandler,
  deleteV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler,
  deleteV2ConferencingAppDisconnectRouteHandler,
  deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRouteHandler,
  deleteV2EventTypesEventTypeIdRouteHandler,
  deleteV2EventTypesEventTypeIdWebhooksRouteHandler,
  deleteV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler,
  deleteV2OauthClientsClientIdRouteHandler,
  deleteV2OauthClientsClientIdUsersUserIdRouteHandler,
  deleteV2OauthClientsClientIdWebhooksRouteHandler,
  deleteV2OauthClientsClientIdWebhooksWebhookIdRouteHandler,
  deleteV2SchedulesScheduleIdRouteHandler,
  deleteV2SelectedCalendarsRouteHandler,
  deleteV2SlotsReservationsUidRouteHandler,
  deleteV2WebhooksWebhookIdRouteHandler,
  getV2AuthOauth2ClientsClientIdRouteHandler,
  getV2BookingsBookingUidAttendeesAttendeeIdRouteHandler,
  getV2BookingsBookingUidAttendeesRouteHandler,
  getV2BookingsBookingUidCalendarLinksRouteHandler,
  getV2BookingsBookingUidConferencingSessionsRouteHandler,
  getV2BookingsBookingUidRecordingsRouteHandler,
  getV2BookingsBookingUidReferencesRouteHandler,
  getV2BookingsBookingUidRouteHandler,
  getV2BookingsBookingUidTranscriptsRouteHandler,
  getV2BookingsBySeatSeatUidRouteHandler,
  getV2BookingsRouteHandler,
  getV2CalendarsBusyTimesRouteHandler,
  getV2CalendarsCalendarCheckRouteHandler,
  getV2CalendarsCalendarConnectRouteHandler,
  getV2CalendarsCalendarEventEventUidRouteHandler,
  getV2CalendarsCalendarEventsEventUidRouteHandler,
  getV2CalendarsCalendarEventsRouteHandler,
  getV2CalendarsCalendarFreebusyRouteHandler,
  getV2CalendarsCalendarSaveRouteHandler,
  getV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler,
  getV2CalendarsConnectionsConnectionIdEventsRouteHandler,
  getV2CalendarsConnectionsConnectionIdFreebusyRouteHandler,
  getV2CalendarsConnectionsRouteHandler,
  getV2CalendarsIcsFeedCheckRouteHandler,
  getV2CalendarsRouteHandler,
  getV2ConferencingAppOauthAuthUrlRouteHandler,
  getV2ConferencingAppOauthCallbackRouteHandler,
  getV2ConferencingDefaultRouteHandler,
  getV2ConferencingRouteHandler,
  getV2EventTypesEventTypeIdPrivateLinksRouteHandler,
  getV2EventTypesEventTypeIdRouteHandler,
  getV2EventTypesEventTypeIdWebhooksRouteHandler,
  getV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler,
  getV2EventTypesRouteHandler,
  getV2MeRouteHandler,
  getV2OauthClientsClientIdRouteHandler,
  getV2OauthClientsClientIdUsersRouteHandler,
  getV2OauthClientsClientIdUsersUserIdRouteHandler,
  getV2OauthClientsClientIdWebhooksRouteHandler,
  getV2OauthClientsClientIdWebhooksWebhookIdRouteHandler,
  getV2OauthClientsRouteHandler,
  getV2SchedulesDefaultRouteHandler,
  getV2SchedulesRouteHandler,
  getV2SchedulesScheduleIdRouteHandler,
  getV2SlotsReservationsUidRouteHandler,
  getV2SlotsRouteHandler,
  getV2StripeCheckRouteHandler,
  getV2StripeConnectRouteHandler,
  getV2StripeSaveRouteHandler,
  getV2VerifiedResourcesEmailsIdRouteHandler,
  getV2VerifiedResourcesEmailsRouteHandler,
  getV2VerifiedResourcesPhonesIdRouteHandler,
  getV2VerifiedResourcesPhonesRouteHandler,
  getV2WebhooksRouteHandler,
  getV2WebhooksWebhookIdRouteHandler,
  patchV2BookingsBookingUidLocationRouteHandler,
  patchV2CalendarsCalendarEventEventUidRouteHandler,
  patchV2CalendarsCalendarEventsEventUidRouteHandler,
  patchV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler,
  patchV2EventTypesEventTypeIdPrivateLinksLinkIdRouteHandler,
  patchV2EventTypesEventTypeIdRouteHandler,
  patchV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler,
  patchV2MeRouteHandler,
  patchV2OauthClientsClientIdRouteHandler,
  patchV2OauthClientsClientIdUsersUserIdRouteHandler,
  patchV2OauthClientsClientIdWebhooksWebhookIdRouteHandler,
  patchV2SchedulesScheduleIdRouteHandler,
  patchV2SlotsReservationsUidRouteHandler,
  patchV2WebhooksWebhookIdRouteHandler,
  postV2ApiKeysRefreshRouteHandler,
  postV2AuthOauth2TokenRouteHandler,
  postV2BookingsBookingUidAttendeesRouteHandler,
  postV2BookingsBookingUidCancelRouteHandler,
  postV2BookingsBookingUidConfirmRouteHandler,
  postV2BookingsBookingUidDeclineRouteHandler,
  postV2BookingsBookingUidGuestsRouteHandler,
  postV2BookingsBookingUidMarkAbsentRouteHandler,
  postV2BookingsBookingUidReassignRouteHandler,
  postV2BookingsBookingUidReassignUserIdRouteHandler,
  postV2BookingsBookingUidRescheduleRouteHandler,
  postV2BookingsRouteHandler,
  postV2CalendarsCalendarCredentialsRouteHandler,
  postV2CalendarsCalendarDisconnectRouteHandler,
  postV2CalendarsCalendarEventsRouteHandler,
  postV2CalendarsConnectionsConnectionIdEventsRouteHandler,
  postV2CalendarsIcsFeedSaveRouteHandler,
  postV2ConferencingAppConnectRouteHandler,
  postV2ConferencingAppDefaultRouteHandler,
  postV2EventTypesEventTypeIdPrivateLinksRouteHandler,
  postV2EventTypesEventTypeIdWebhooksRouteHandler,
  postV2EventTypesRouteHandler,
  postV2OauthClientIdRefreshRouteHandler,
  postV2OauthClientsClientIdUsersRouteHandler,
  postV2OauthClientsClientIdUsersUserIdForceRefreshRouteHandler,
  postV2OauthClientsClientIdWebhooksRouteHandler,
  postV2OauthClientsRouteHandler,
  postV2SchedulesRouteHandler,
  postV2SelectedCalendarsRouteHandler,
  postV2SlotsReservationsRouteHandler,
  postV2VerifiedResourcesEmailsVerificationCodeRequestRouteHandler,
  postV2VerifiedResourcesEmailsVerificationCodeVerifyRouteHandler,
  postV2VerifiedResourcesPhonesVerificationCodeRequestRouteHandler,
  postV2VerifiedResourcesPhonesVerificationCodeVerifyRouteHandler,
  postV2WebhooksRouteHandler,
  putV2DestinationCalendarsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2ApiKeysRefreshRoute, postV2ApiKeysRefreshRouteHandler)
  .openapi(postV2BookingsRoute, postV2BookingsRouteHandler)
  .openapi(getV2BookingsRoute, getV2BookingsRouteHandler)
  .openapi(getV2BookingsBySeatSeatUidRoute, getV2BookingsBySeatSeatUidRouteHandler)
  .openapi(getV2BookingsBookingUidRoute, getV2BookingsBookingUidRouteHandler)
  .openapi(getV2BookingsBookingUidRecordingsRoute, getV2BookingsBookingUidRecordingsRouteHandler)
  .openapi(getV2BookingsBookingUidTranscriptsRoute, getV2BookingsBookingUidTranscriptsRouteHandler)
  .openapi(postV2BookingsBookingUidRescheduleRoute, postV2BookingsBookingUidRescheduleRouteHandler)
  .openapi(postV2BookingsBookingUidCancelRoute, postV2BookingsBookingUidCancelRouteHandler)
  .openapi(postV2BookingsBookingUidMarkAbsentRoute, postV2BookingsBookingUidMarkAbsentRouteHandler)
  .openapi(postV2BookingsBookingUidReassignRoute, postV2BookingsBookingUidReassignRouteHandler)
  .openapi(
    postV2BookingsBookingUidReassignUserIdRoute,
    postV2BookingsBookingUidReassignUserIdRouteHandler,
  )
  .openapi(postV2BookingsBookingUidConfirmRoute, postV2BookingsBookingUidConfirmRouteHandler)
  .openapi(postV2BookingsBookingUidDeclineRoute, postV2BookingsBookingUidDeclineRouteHandler)
  .openapi(
    getV2BookingsBookingUidCalendarLinksRoute,
    getV2BookingsBookingUidCalendarLinksRouteHandler,
  )
  .openapi(getV2BookingsBookingUidReferencesRoute, getV2BookingsBookingUidReferencesRouteHandler)
  .openapi(
    getV2BookingsBookingUidConferencingSessionsRoute,
    getV2BookingsBookingUidConferencingSessionsRouteHandler,
  )
  .openapi(patchV2BookingsBookingUidLocationRoute, patchV2BookingsBookingUidLocationRouteHandler)
  .openapi(getV2BookingsBookingUidAttendeesRoute, getV2BookingsBookingUidAttendeesRouteHandler)
  .openapi(postV2BookingsBookingUidAttendeesRoute, postV2BookingsBookingUidAttendeesRouteHandler)
  .openapi(
    getV2BookingsBookingUidAttendeesAttendeeIdRoute,
    getV2BookingsBookingUidAttendeesAttendeeIdRouteHandler,
  )
  .openapi(
    deleteV2BookingsBookingUidAttendeesAttendeeIdRoute,
    deleteV2BookingsBookingUidAttendeesAttendeeIdRouteHandler,
  )
  .openapi(postV2BookingsBookingUidGuestsRoute, postV2BookingsBookingUidGuestsRouteHandler)
  .openapi(getV2CalendarsConnectionsRoute, getV2CalendarsConnectionsRouteHandler)
  .openapi(
    getV2CalendarsConnectionsConnectionIdEventsRoute,
    getV2CalendarsConnectionsConnectionIdEventsRouteHandler,
  )
  .openapi(
    postV2CalendarsConnectionsConnectionIdEventsRoute,
    postV2CalendarsConnectionsConnectionIdEventsRouteHandler,
  )
  .openapi(
    getV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
    getV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler,
  )
  .openapi(
    patchV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
    patchV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler,
  )
  .openapi(
    deleteV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
    deleteV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler,
  )
  .openapi(
    getV2CalendarsConnectionsConnectionIdFreebusyRoute,
    getV2CalendarsConnectionsConnectionIdFreebusyRouteHandler,
  )
  .openapi(
    getV2CalendarsCalendarEventsEventUidRoute,
    getV2CalendarsCalendarEventsEventUidRouteHandler,
  )
  .openapi(
    patchV2CalendarsCalendarEventsEventUidRoute,
    patchV2CalendarsCalendarEventsEventUidRouteHandler,
  )
  .openapi(
    deleteV2CalendarsCalendarEventsEventUidRoute,
    deleteV2CalendarsCalendarEventsEventUidRouteHandler,
  )
  .openapi(
    getV2CalendarsCalendarEventEventUidRoute,
    getV2CalendarsCalendarEventEventUidRouteHandler,
  )
  .openapi(
    patchV2CalendarsCalendarEventEventUidRoute,
    patchV2CalendarsCalendarEventEventUidRouteHandler,
  )
  .openapi(getV2CalendarsCalendarEventsRoute, getV2CalendarsCalendarEventsRouteHandler)
  .openapi(postV2CalendarsCalendarEventsRoute, postV2CalendarsCalendarEventsRouteHandler)
  .openapi(getV2CalendarsCalendarFreebusyRoute, getV2CalendarsCalendarFreebusyRouteHandler)
  .openapi(postV2CalendarsIcsFeedSaveRoute, postV2CalendarsIcsFeedSaveRouteHandler)
  .openapi(getV2CalendarsIcsFeedCheckRoute, getV2CalendarsIcsFeedCheckRouteHandler)
  .openapi(getV2CalendarsBusyTimesRoute, getV2CalendarsBusyTimesRouteHandler)
  .openapi(getV2CalendarsRoute, getV2CalendarsRouteHandler)
  .openapi(getV2CalendarsCalendarConnectRoute, getV2CalendarsCalendarConnectRouteHandler)
  .openapi(getV2CalendarsCalendarSaveRoute, getV2CalendarsCalendarSaveRouteHandler)
  .openapi(postV2CalendarsCalendarCredentialsRoute, postV2CalendarsCalendarCredentialsRouteHandler)
  .openapi(getV2CalendarsCalendarCheckRoute, getV2CalendarsCalendarCheckRouteHandler)
  .openapi(postV2CalendarsCalendarDisconnectRoute, postV2CalendarsCalendarDisconnectRouteHandler)
  .openapi(postV2ConferencingAppConnectRoute, postV2ConferencingAppConnectRouteHandler)
  .openapi(getV2ConferencingAppOauthAuthUrlRoute, getV2ConferencingAppOauthAuthUrlRouteHandler)
  .openapi(getV2ConferencingAppOauthCallbackRoute, getV2ConferencingAppOauthCallbackRouteHandler)
  .openapi(getV2ConferencingRoute, getV2ConferencingRouteHandler)
  .openapi(postV2ConferencingAppDefaultRoute, postV2ConferencingAppDefaultRouteHandler)
  .openapi(getV2ConferencingDefaultRoute, getV2ConferencingDefaultRouteHandler)
  .openapi(deleteV2ConferencingAppDisconnectRoute, deleteV2ConferencingAppDisconnectRouteHandler)
  .openapi(getV2OauthClientsClientIdUsersRoute, getV2OauthClientsClientIdUsersRouteHandler)
  .openapi(postV2OauthClientsClientIdUsersRoute, postV2OauthClientsClientIdUsersRouteHandler)
  .openapi(
    getV2OauthClientsClientIdUsersUserIdRoute,
    getV2OauthClientsClientIdUsersUserIdRouteHandler,
  )
  .openapi(
    patchV2OauthClientsClientIdUsersUserIdRoute,
    patchV2OauthClientsClientIdUsersUserIdRouteHandler,
  )
  .openapi(
    deleteV2OauthClientsClientIdUsersUserIdRoute,
    deleteV2OauthClientsClientIdUsersUserIdRouteHandler,
  )
  .openapi(
    postV2OauthClientsClientIdUsersUserIdForceRefreshRoute,
    postV2OauthClientsClientIdUsersUserIdForceRefreshRouteHandler,
  )
  .openapi(postV2OauthClientIdRefreshRoute, postV2OauthClientIdRefreshRouteHandler)
  .openapi(postV2OauthClientsClientIdWebhooksRoute, postV2OauthClientsClientIdWebhooksRouteHandler)
  .openapi(getV2OauthClientsClientIdWebhooksRoute, getV2OauthClientsClientIdWebhooksRouteHandler)
  .openapi(
    deleteV2OauthClientsClientIdWebhooksRoute,
    deleteV2OauthClientsClientIdWebhooksRouteHandler,
  )
  .openapi(
    patchV2OauthClientsClientIdWebhooksWebhookIdRoute,
    patchV2OauthClientsClientIdWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    getV2OauthClientsClientIdWebhooksWebhookIdRoute,
    getV2OauthClientsClientIdWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    deleteV2OauthClientsClientIdWebhooksWebhookIdRoute,
    deleteV2OauthClientsClientIdWebhooksWebhookIdRouteHandler,
  )
  .openapi(postV2OauthClientsRoute, postV2OauthClientsRouteHandler)
  .openapi(getV2OauthClientsRoute, getV2OauthClientsRouteHandler)
  .openapi(getV2OauthClientsClientIdRoute, getV2OauthClientsClientIdRouteHandler)
  .openapi(patchV2OauthClientsClientIdRoute, patchV2OauthClientsClientIdRouteHandler)
  .openapi(deleteV2OauthClientsClientIdRoute, deleteV2OauthClientsClientIdRouteHandler)
  .openapi(putV2DestinationCalendarsRoute, putV2DestinationCalendarsRouteHandler)
  .openapi(postV2EventTypesRoute, postV2EventTypesRouteHandler)
  .openapi(getV2EventTypesRoute, getV2EventTypesRouteHandler)
  .openapi(getV2EventTypesEventTypeIdRoute, getV2EventTypesEventTypeIdRouteHandler)
  .openapi(patchV2EventTypesEventTypeIdRoute, patchV2EventTypesEventTypeIdRouteHandler)
  .openapi(deleteV2EventTypesEventTypeIdRoute, deleteV2EventTypesEventTypeIdRouteHandler)
  .openapi(
    postV2EventTypesEventTypeIdWebhooksRoute,
    postV2EventTypesEventTypeIdWebhooksRouteHandler,
  )
  .openapi(getV2EventTypesEventTypeIdWebhooksRoute, getV2EventTypesEventTypeIdWebhooksRouteHandler)
  .openapi(
    deleteV2EventTypesEventTypeIdWebhooksRoute,
    deleteV2EventTypesEventTypeIdWebhooksRouteHandler,
  )
  .openapi(
    patchV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
    patchV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    getV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
    getV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    deleteV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
    deleteV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    postV2EventTypesEventTypeIdPrivateLinksRoute,
    postV2EventTypesEventTypeIdPrivateLinksRouteHandler,
  )
  .openapi(
    getV2EventTypesEventTypeIdPrivateLinksRoute,
    getV2EventTypesEventTypeIdPrivateLinksRouteHandler,
  )
  .openapi(
    patchV2EventTypesEventTypeIdPrivateLinksLinkIdRoute,
    patchV2EventTypesEventTypeIdPrivateLinksLinkIdRouteHandler,
  )
  .openapi(
    deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRoute,
    deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRouteHandler,
  )
  .openapi(getV2MeRoute, getV2MeRouteHandler)
  .openapi(patchV2MeRoute, patchV2MeRouteHandler)
  .openapi(getV2AuthOauth2ClientsClientIdRoute, getV2AuthOauth2ClientsClientIdRouteHandler)
  .openapi(postV2AuthOauth2TokenRoute, postV2AuthOauth2TokenRouteHandler)
  .openapi(postV2SchedulesRoute, postV2SchedulesRouteHandler)
  .openapi(getV2SchedulesRoute, getV2SchedulesRouteHandler)
  .openapi(getV2SchedulesDefaultRoute, getV2SchedulesDefaultRouteHandler)
  .openapi(getV2SchedulesScheduleIdRoute, getV2SchedulesScheduleIdRouteHandler)
  .openapi(patchV2SchedulesScheduleIdRoute, patchV2SchedulesScheduleIdRouteHandler)
  .openapi(deleteV2SchedulesScheduleIdRoute, deleteV2SchedulesScheduleIdRouteHandler)
  .openapi(postV2SelectedCalendarsRoute, postV2SelectedCalendarsRouteHandler)
  .openapi(deleteV2SelectedCalendarsRoute, deleteV2SelectedCalendarsRouteHandler)
  .openapi(getV2SlotsRoute, getV2SlotsRouteHandler)
  .openapi(postV2SlotsReservationsRoute, postV2SlotsReservationsRouteHandler)
  .openapi(getV2SlotsReservationsUidRoute, getV2SlotsReservationsUidRouteHandler)
  .openapi(patchV2SlotsReservationsUidRoute, patchV2SlotsReservationsUidRouteHandler)
  .openapi(deleteV2SlotsReservationsUidRoute, deleteV2SlotsReservationsUidRouteHandler)
  .openapi(getV2StripeConnectRoute, getV2StripeConnectRouteHandler)
  .openapi(getV2StripeSaveRoute, getV2StripeSaveRouteHandler)
  .openapi(getV2StripeCheckRoute, getV2StripeCheckRouteHandler)
  .openapi(
    postV2VerifiedResourcesEmailsVerificationCodeRequestRoute,
    postV2VerifiedResourcesEmailsVerificationCodeRequestRouteHandler,
  )
  .openapi(
    postV2VerifiedResourcesPhonesVerificationCodeRequestRoute,
    postV2VerifiedResourcesPhonesVerificationCodeRequestRouteHandler,
  )
  .openapi(
    postV2VerifiedResourcesEmailsVerificationCodeVerifyRoute,
    postV2VerifiedResourcesEmailsVerificationCodeVerifyRouteHandler,
  )
  .openapi(
    postV2VerifiedResourcesPhonesVerificationCodeVerifyRoute,
    postV2VerifiedResourcesPhonesVerificationCodeVerifyRouteHandler,
  )
  .openapi(getV2VerifiedResourcesEmailsRoute, getV2VerifiedResourcesEmailsRouteHandler)
  .openapi(getV2VerifiedResourcesPhonesRoute, getV2VerifiedResourcesPhonesRouteHandler)
  .openapi(getV2VerifiedResourcesEmailsIdRoute, getV2VerifiedResourcesEmailsIdRouteHandler)
  .openapi(getV2VerifiedResourcesPhonesIdRoute, getV2VerifiedResourcesPhonesIdRouteHandler)
  .openapi(postV2WebhooksRoute, postV2WebhooksRouteHandler)
  .openapi(getV2WebhooksRoute, getV2WebhooksRouteHandler)
  .openapi(patchV2WebhooksWebhookIdRoute, patchV2WebhooksWebhookIdRouteHandler)
  .openapi(getV2WebhooksWebhookIdRoute, getV2WebhooksWebhookIdRouteHandler)
  .openapi(deleteV2WebhooksWebhookIdRoute, deleteV2WebhooksWebhookIdRouteHandler)

export default app
