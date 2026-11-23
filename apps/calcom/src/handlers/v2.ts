import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const postV2ApiKeysRefreshRouteHandler: RouteHandler<
  typeof postV2ApiKeysRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsRouteHandler: RouteHandler<typeof postV2BookingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsRouteHandler: RouteHandler<typeof getV2BookingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBySeatSeatUidRouteHandler: RouteHandler<
  typeof getV2BookingsBySeatSeatUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidRecordingsRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidRecordingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidTranscriptsRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidTranscriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidRescheduleRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidRescheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidCancelRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidMarkAbsentRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidMarkAbsentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidReassignRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidReassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidReassignUserIdRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidReassignUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidConfirmRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidDeclineRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidCalendarLinksRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidCalendarLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidReferencesRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidConferencingSessionsRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidConferencingSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2BookingsBookingUidLocationRouteHandler: RouteHandler<
  typeof patchV2BookingsBookingUidLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidAttendeesRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidAttendeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidAttendeesRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidAttendeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BookingsBookingUidAttendeesAttendeeIdRouteHandler: RouteHandler<
  typeof getV2BookingsBookingUidAttendeesAttendeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2BookingsBookingUidAttendeesAttendeeIdRouteHandler: RouteHandler<
  typeof deleteV2BookingsBookingUidAttendeesAttendeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BookingsBookingUidGuestsRouteHandler: RouteHandler<
  typeof postV2BookingsBookingUidGuestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsConnectionsRouteHandler: RouteHandler<
  typeof getV2CalendarsConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsConnectionsConnectionIdEventsRouteHandler: RouteHandler<
  typeof getV2CalendarsConnectionsConnectionIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CalendarsConnectionsConnectionIdEventsRouteHandler: RouteHandler<
  typeof postV2CalendarsConnectionsConnectionIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler: RouteHandler<
  typeof getV2CalendarsConnectionsConnectionIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler: RouteHandler<
  typeof patchV2CalendarsConnectionsConnectionIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CalendarsConnectionsConnectionIdEventsEventIdRouteHandler: RouteHandler<
  typeof deleteV2CalendarsConnectionsConnectionIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsConnectionsConnectionIdFreebusyRouteHandler: RouteHandler<
  typeof getV2CalendarsConnectionsConnectionIdFreebusyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsCalendarEventsEventUidRouteHandler: RouteHandler<
  typeof getV2CalendarsCalendarEventsEventUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CalendarsCalendarEventsEventUidRouteHandler: RouteHandler<
  typeof patchV2CalendarsCalendarEventsEventUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CalendarsCalendarEventsEventUidRouteHandler: RouteHandler<
  typeof deleteV2CalendarsCalendarEventsEventUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsCalendarEventEventUidRouteHandler: RouteHandler<
  typeof getV2CalendarsCalendarEventEventUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CalendarsCalendarEventEventUidRouteHandler: RouteHandler<
  typeof patchV2CalendarsCalendarEventEventUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsCalendarEventsRouteHandler: RouteHandler<
  typeof getV2CalendarsCalendarEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CalendarsCalendarEventsRouteHandler: RouteHandler<
  typeof postV2CalendarsCalendarEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsCalendarFreebusyRouteHandler: RouteHandler<
  typeof getV2CalendarsCalendarFreebusyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CalendarsIcsFeedSaveRouteHandler: RouteHandler<
  typeof postV2CalendarsIcsFeedSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsIcsFeedCheckRouteHandler: RouteHandler<
  typeof getV2CalendarsIcsFeedCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsBusyTimesRouteHandler: RouteHandler<
  typeof getV2CalendarsBusyTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsRouteHandler: RouteHandler<typeof getV2CalendarsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsCalendarConnectRouteHandler: RouteHandler<
  typeof getV2CalendarsCalendarConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsCalendarSaveRouteHandler: RouteHandler<
  typeof getV2CalendarsCalendarSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CalendarsCalendarCredentialsRouteHandler: RouteHandler<
  typeof postV2CalendarsCalendarCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CalendarsCalendarCheckRouteHandler: RouteHandler<
  typeof getV2CalendarsCalendarCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CalendarsCalendarDisconnectRouteHandler: RouteHandler<
  typeof postV2CalendarsCalendarDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ConferencingAppConnectRouteHandler: RouteHandler<
  typeof postV2ConferencingAppConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ConferencingAppOauthAuthUrlRouteHandler: RouteHandler<
  typeof getV2ConferencingAppOauthAuthUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ConferencingAppOauthCallbackRouteHandler: RouteHandler<
  typeof getV2ConferencingAppOauthCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ConferencingRouteHandler: RouteHandler<typeof getV2ConferencingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2ConferencingAppDefaultRouteHandler: RouteHandler<
  typeof postV2ConferencingAppDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ConferencingDefaultRouteHandler: RouteHandler<
  typeof getV2ConferencingDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ConferencingAppDisconnectRouteHandler: RouteHandler<
  typeof deleteV2ConferencingAppDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OauthClientsClientIdUsersRouteHandler: RouteHandler<
  typeof getV2OauthClientsClientIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OauthClientsClientIdUsersRouteHandler: RouteHandler<
  typeof postV2OauthClientsClientIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OauthClientsClientIdUsersUserIdRouteHandler: RouteHandler<
  typeof getV2OauthClientsClientIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2OauthClientsClientIdUsersUserIdRouteHandler: RouteHandler<
  typeof patchV2OauthClientsClientIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2OauthClientsClientIdUsersUserIdRouteHandler: RouteHandler<
  typeof deleteV2OauthClientsClientIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OauthClientsClientIdUsersUserIdForceRefreshRouteHandler: RouteHandler<
  typeof postV2OauthClientsClientIdUsersUserIdForceRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OauthClientIdRefreshRouteHandler: RouteHandler<
  typeof postV2OauthClientIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OauthClientsClientIdWebhooksRouteHandler: RouteHandler<
  typeof postV2OauthClientsClientIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OauthClientsClientIdWebhooksRouteHandler: RouteHandler<
  typeof getV2OauthClientsClientIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2OauthClientsClientIdWebhooksRouteHandler: RouteHandler<
  typeof deleteV2OauthClientsClientIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2OauthClientsClientIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof patchV2OauthClientsClientIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OauthClientsClientIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getV2OauthClientsClientIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2OauthClientsClientIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV2OauthClientsClientIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OauthClientsRouteHandler: RouteHandler<typeof postV2OauthClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2OauthClientsRouteHandler: RouteHandler<typeof getV2OauthClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2OauthClientsClientIdRouteHandler: RouteHandler<
  typeof getV2OauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2OauthClientsClientIdRouteHandler: RouteHandler<
  typeof patchV2OauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2OauthClientsClientIdRouteHandler: RouteHandler<
  typeof deleteV2OauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DestinationCalendarsRouteHandler: RouteHandler<
  typeof putV2DestinationCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EventTypesRouteHandler: RouteHandler<typeof postV2EventTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2EventTypesRouteHandler: RouteHandler<typeof getV2EventTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventTypesEventTypeIdRouteHandler: RouteHandler<
  typeof getV2EventTypesEventTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2EventTypesEventTypeIdRouteHandler: RouteHandler<
  typeof patchV2EventTypesEventTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2EventTypesEventTypeIdRouteHandler: RouteHandler<
  typeof deleteV2EventTypesEventTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EventTypesEventTypeIdWebhooksRouteHandler: RouteHandler<
  typeof postV2EventTypesEventTypeIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventTypesEventTypeIdWebhooksRouteHandler: RouteHandler<
  typeof getV2EventTypesEventTypeIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2EventTypesEventTypeIdWebhooksRouteHandler: RouteHandler<
  typeof deleteV2EventTypesEventTypeIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof patchV2EventTypesEventTypeIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getV2EventTypesEventTypeIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2EventTypesEventTypeIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV2EventTypesEventTypeIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EventTypesEventTypeIdPrivateLinksRouteHandler: RouteHandler<
  typeof postV2EventTypesEventTypeIdPrivateLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventTypesEventTypeIdPrivateLinksRouteHandler: RouteHandler<
  typeof getV2EventTypesEventTypeIdPrivateLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2EventTypesEventTypeIdPrivateLinksLinkIdRouteHandler: RouteHandler<
  typeof patchV2EventTypesEventTypeIdPrivateLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRouteHandler: RouteHandler<
  typeof deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MeRouteHandler: RouteHandler<typeof getV2MeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2MeRouteHandler: RouteHandler<typeof patchV2MeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AuthOauth2ClientsClientIdRouteHandler: RouteHandler<
  typeof getV2AuthOauth2ClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AuthOauth2TokenRouteHandler: RouteHandler<
  typeof postV2AuthOauth2TokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SchedulesRouteHandler: RouteHandler<typeof postV2SchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SchedulesRouteHandler: RouteHandler<typeof getV2SchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SchedulesDefaultRouteHandler: RouteHandler<
  typeof getV2SchedulesDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SchedulesScheduleIdRouteHandler: RouteHandler<
  typeof getV2SchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2SchedulesScheduleIdRouteHandler: RouteHandler<
  typeof patchV2SchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SchedulesScheduleIdRouteHandler: RouteHandler<
  typeof deleteV2SchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SelectedCalendarsRouteHandler: RouteHandler<
  typeof postV2SelectedCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SelectedCalendarsRouteHandler: RouteHandler<
  typeof deleteV2SelectedCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SlotsRouteHandler: RouteHandler<typeof getV2SlotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SlotsReservationsRouteHandler: RouteHandler<
  typeof postV2SlotsReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SlotsReservationsUidRouteHandler: RouteHandler<
  typeof getV2SlotsReservationsUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2SlotsReservationsUidRouteHandler: RouteHandler<
  typeof patchV2SlotsReservationsUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SlotsReservationsUidRouteHandler: RouteHandler<
  typeof deleteV2SlotsReservationsUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2StripeConnectRouteHandler: RouteHandler<typeof getV2StripeConnectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2StripeSaveRouteHandler: RouteHandler<typeof getV2StripeSaveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2StripeCheckRouteHandler: RouteHandler<typeof getV2StripeCheckRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2VerifiedResourcesEmailsVerificationCodeRequestRouteHandler: RouteHandler<
  typeof postV2VerifiedResourcesEmailsVerificationCodeRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VerifiedResourcesPhonesVerificationCodeRequestRouteHandler: RouteHandler<
  typeof postV2VerifiedResourcesPhonesVerificationCodeRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VerifiedResourcesEmailsVerificationCodeVerifyRouteHandler: RouteHandler<
  typeof postV2VerifiedResourcesEmailsVerificationCodeVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VerifiedResourcesPhonesVerificationCodeVerifyRouteHandler: RouteHandler<
  typeof postV2VerifiedResourcesPhonesVerificationCodeVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VerifiedResourcesEmailsRouteHandler: RouteHandler<
  typeof getV2VerifiedResourcesEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VerifiedResourcesPhonesRouteHandler: RouteHandler<
  typeof getV2VerifiedResourcesPhonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VerifiedResourcesEmailsIdRouteHandler: RouteHandler<
  typeof getV2VerifiedResourcesEmailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VerifiedResourcesPhonesIdRouteHandler: RouteHandler<
  typeof getV2VerifiedResourcesPhonesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2WebhooksRouteHandler: RouteHandler<typeof postV2WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2WebhooksRouteHandler: RouteHandler<typeof getV2WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof patchV2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getV2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
