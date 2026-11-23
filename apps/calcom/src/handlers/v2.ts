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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ApiKeysRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBySeatSeatUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidRescheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidMarkAbsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidReassignUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidCalendarLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidConferencingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2BookingsBookingUidLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidAttendeesAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BookingsBookingUidAttendeesAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsConnectionsConnectionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsConnectionsConnectionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsConnectionsConnectionIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CalendarsConnectionsConnectionIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CalendarsConnectionsConnectionIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsConnectionsConnectionIdFreebusyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarEventsEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CalendarsCalendarEventsEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CalendarsCalendarEventsEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarEventEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CalendarsCalendarEventEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarFreebusyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsIcsFeedSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsIcsFeedCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsBusyTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsCalendarCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsCalendarDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ConferencingAppConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingAppOauthAuthUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingAppOauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ConferencingAppDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ConferencingAppDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientsClientIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OauthClientsClientIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientsClientIdUsersUserIdForceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientsClientIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OauthClientsClientIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DestinationCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2EventTypesEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EventTypesEventTypeIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2EventTypesEventTypeIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EventTypesEventTypeIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2EventTypesEventTypeIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthOauth2ClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AuthOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SelectedCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SelectedCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SlotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SlotsReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SlotsReservationsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SlotsReservationsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SlotsReservationsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StripeConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StripeSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StripeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VerifiedResourcesEmailsVerificationCodeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VerifiedResourcesPhonesVerificationCodeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VerifiedResourcesEmailsVerificationCodeVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VerifiedResourcesPhonesVerificationCodeVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesEmailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesPhonesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
