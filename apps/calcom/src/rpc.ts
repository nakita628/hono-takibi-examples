import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2ApiKeysRefresh(
  args: InferRequestType<(typeof client.v2)['api-keys']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['api-keys'].refresh.$post(args, options))
}

export async function getV2Bookings(
  args: InferRequestType<typeof client.v2.bookings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings.$get(args, options))
}

export async function postV2Bookings(
  args: InferRequestType<typeof client.v2.bookings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings.$post(args, options))
}

export async function getV2BookingsBySeatSeatUid(
  args: InferRequestType<(typeof client.v2.bookings)['by-seat'][':seatUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings['by-seat'][':seatUid'].$get(args, options))
}

export async function getV2BookingsBookingUid(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].$get(args, options))
}

export async function getV2BookingsBookingUidRecordings(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].recordings.$get(args, options))
}

export async function getV2BookingsBookingUidTranscripts(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['transcripts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].transcripts.$get(args, options))
}

export async function postV2BookingsBookingUidReschedule(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reschedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].reschedule.$post(args, options))
}

export async function postV2BookingsBookingUidCancel(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].cancel.$post(args, options))
}

export async function postV2BookingsBookingUidMarkAbsent(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['mark-absent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid']['mark-absent'].$post(args, options))
}

export async function postV2BookingsBookingUidReassign(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['reassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].reassign.$post(args, options))
}

export async function postV2BookingsBookingUidReassignUserId(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['reassign'][':userId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bookings[':bookingUid'].reassign[':userId'].$post(args, options),
  )
}

export async function postV2BookingsBookingUidConfirm(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].confirm.$post(args, options))
}

export async function postV2BookingsBookingUidDecline(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].decline.$post(args, options))
}

export async function getV2BookingsBookingUidCalendarLinks(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['calendar-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bookings[':bookingUid']['calendar-links'].$get(args, options),
  )
}

export async function getV2BookingsBookingUidReferences(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].references.$get(args, options))
}

export async function getV2BookingsBookingUidConferencingSessions(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['conferencing-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bookings[':bookingUid']['conferencing-sessions'].$get(args, options),
  )
}

export async function patchV2BookingsBookingUidLocation(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['location']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].location.$patch(args, options))
}

export async function getV2BookingsBookingUidAttendees(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].attendees.$get(args, options))
}

export async function postV2BookingsBookingUidAttendees(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['attendees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].attendees.$post(args, options))
}

export async function getV2BookingsBookingUidAttendeesAttendeeId(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bookings[':bookingUid'].attendees[':attendeeId'].$get(args, options),
  )
}

export async function deleteV2BookingsBookingUidAttendeesAttendeeId(
  args: InferRequestType<
    (typeof client.v2.bookings)[':bookingUid']['attendees'][':attendeeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bookings[':bookingUid'].attendees[':attendeeId'].$delete(args, options),
  )
}

export async function postV2BookingsBookingUidGuests(
  args: InferRequestType<(typeof client.v2.bookings)[':bookingUid']['guests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':bookingUid'].guests.$post(args, options))
}

export async function getV2CalendarsConnections(
  args: InferRequestType<typeof client.v2.calendars.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars.connections.$get(args, options))
}

export async function getV2CalendarsConnectionsConnectionIdEvents(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars.connections[':connectionId'].events.$get(args, options),
  )
}

export async function postV2CalendarsConnectionsConnectionIdEvents(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars.connections[':connectionId'].events.$post(args, options),
  )
}

export async function getV2CalendarsConnectionsConnectionIdEventsEventId(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars.connections[':connectionId'].events[':eventId'].$get(args, options),
  )
}

export async function deleteV2CalendarsConnectionsConnectionIdEventsEventId(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars.connections[':connectionId'].events[':eventId'].$delete(args, options),
  )
}

export async function patchV2CalendarsConnectionsConnectionIdEventsEventId(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['events'][':eventId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars.connections[':connectionId'].events[':eventId'].$patch(args, options),
  )
}

export async function getV2CalendarsConnectionsConnectionIdFreebusy(
  args: InferRequestType<
    (typeof client.v2.calendars.connections)[':connectionId']['freebusy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars.connections[':connectionId'].freebusy.$get(args, options),
  )
}

export async function getV2CalendarsCalendarEventsEventUid(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars[':calendar'].events[':eventUid'].$get(args, options),
  )
}

export async function deleteV2CalendarsCalendarEventsEventUid(
  args: InferRequestType<
    (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars[':calendar'].events[':eventUid'].$delete(args, options),
  )
}

export async function patchV2CalendarsCalendarEventsEventUid(
  args: InferRequestType<
    (typeof client.v2.calendars)[':calendar']['events'][':eventUid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars[':calendar'].events[':eventUid'].$patch(args, options),
  )
}

export async function getV2CalendarsCalendarEventEventUid(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars[':calendar'].event[':eventUid'].$get(args, options),
  )
}

export async function patchV2CalendarsCalendarEventEventUid(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['event'][':eventUid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.calendars[':calendar'].event[':eventUid'].$patch(args, options),
  )
}

export async function getV2CalendarsCalendarEvents(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].events.$get(args, options))
}

export async function postV2CalendarsCalendarEvents(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].events.$post(args, options))
}

export async function getV2CalendarsCalendarFreebusy(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['freebusy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].freebusy.$get(args, options))
}

export async function postV2CalendarsIcsFeedSave(
  args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['save']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars['ics-feed'].save.$post(args, options))
}

export async function getV2CalendarsIcsFeedCheck(
  args: InferRequestType<(typeof client.v2.calendars)['ics-feed']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars['ics-feed'].check.$get(args, options))
}

export async function getV2CalendarsBusyTimes(
  args: InferRequestType<(typeof client.v2.calendars)['busy-times']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars['busy-times'].$get(args, options))
}

export async function getV2Calendars(
  args: InferRequestType<typeof client.v2.calendars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars.$get(args, options))
}

export async function getV2CalendarsCalendarConnect(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['connect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].connect.$get(args, options))
}

export async function getV2CalendarsCalendarSave(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['save']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].save.$get(args, options))
}

export async function postV2CalendarsCalendarCredentials(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].credentials.$post(args, options))
}

export async function getV2CalendarsCalendarCheck(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].check.$get(args, options))
}

export async function postV2CalendarsCalendarDisconnect(
  args: InferRequestType<(typeof client.v2.calendars)[':calendar']['disconnect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendars[':calendar'].disconnect.$post(args, options))
}

export async function postV2ConferencingAppConnect(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['connect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.conferencing[':app'].connect.$post(args, options))
}

export async function getV2ConferencingAppOauthAuthUrl(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['auth-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.conferencing[':app'].oauth['auth-url'].$get(args, options))
}

export async function getV2ConferencingAppOauthCallback(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['oauth']['callback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.conferencing[':app'].oauth.callback.$get(args, options))
}

export async function getV2Conferencing(
  args: InferRequestType<typeof client.v2.conferencing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.conferencing.$get(args, options))
}

export async function postV2ConferencingAppDefault(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['default']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.conferencing[':app'].default.$post(args, options))
}

export async function getV2ConferencingDefault(
  args: InferRequestType<typeof client.v2.conferencing.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.conferencing.default.$get(args, options))
}

export async function deleteV2ConferencingAppDisconnect(
  args: InferRequestType<(typeof client.v2.conferencing)[':app']['disconnect']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.conferencing[':app'].disconnect.$delete(args, options))
}

export async function getV2OauthClientsClientIdUsers(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'][':clientId'].users.$get(args, options))
}

export async function postV2OauthClientsClientIdUsers(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'][':clientId'].users.$post(args, options))
}

export async function getV2OauthClientsClientIdUsersUserId(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].users[':userId'].$get(args, options),
  )
}

export async function deleteV2OauthClientsClientIdUsersUserId(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].users[':userId'].$delete(args, options),
  )
}

export async function patchV2OauthClientsClientIdUsersUserId(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].users[':userId'].$patch(args, options),
  )
}

export async function postV2OauthClientsClientIdUsersUserIdForceRefresh(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['users'][':userId']['force-refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].users[':userId']['force-refresh'].$post(args, options),
  )
}

export async function postV2OauthClientIdRefresh(
  args: InferRequestType<(typeof client.v2.oauth)[':clientId']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth[':clientId'].refresh.$post(args, options))
}

export async function getV2OauthClientsClientIdWebhooks(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$get(args, options))
}

export async function postV2OauthClientsClientIdWebhooks(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'][':clientId'].webhooks.$post(args, options))
}

export async function deleteV2OauthClientsClientIdWebhooks(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['webhooks']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].webhooks.$delete(args, options),
  )
}

export async function getV2OauthClientsClientIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$get(args, options),
  )
}

export async function deleteV2OauthClientsClientIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$delete(args, options),
  )
}

export async function patchV2OauthClientsClientIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v2)['oauth-clients'][':clientId']['webhooks'][':webhookId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['oauth-clients'][':clientId'].webhooks[':webhookId'].$patch(args, options),
  )
}

export async function getV2OauthClients(
  args: InferRequestType<(typeof client.v2)['oauth-clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'].$get(args, options))
}

export async function postV2OauthClients(
  args: InferRequestType<(typeof client.v2)['oauth-clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'].$post(args, options))
}

export async function getV2OauthClientsClientId(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'][':clientId'].$get(args, options))
}

export async function deleteV2OauthClientsClientId(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'][':clientId'].$delete(args, options))
}

export async function patchV2OauthClientsClientId(
  args: InferRequestType<(typeof client.v2)['oauth-clients'][':clientId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['oauth-clients'][':clientId'].$patch(args, options))
}

export async function putV2DestinationCalendars(
  args: InferRequestType<(typeof client.v2)['destination-calendars']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['destination-calendars'].$put(args, options))
}

export async function getV2EventTypes(
  args: InferRequestType<(typeof client.v2)['event-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['event-types'].$get(args, options))
}

export async function postV2EventTypes(
  args: InferRequestType<(typeof client.v2)['event-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['event-types'].$post(args, options))
}

export async function getV2EventTypesEventTypeId(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['event-types'][':eventTypeId'].$get(args, options))
}

export async function deleteV2EventTypesEventTypeId(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['event-types'][':eventTypeId'].$delete(args, options))
}

export async function patchV2EventTypesEventTypeId(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['event-types'][':eventTypeId'].$patch(args, options))
}

export async function getV2EventTypesEventTypeIdWebhooks(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['event-types'][':eventTypeId'].webhooks.$get(args, options))
}

export async function postV2EventTypesEventTypeIdWebhooks(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['event-types'][':eventTypeId'].webhooks.$post(args, options))
}

export async function deleteV2EventTypesEventTypeIdWebhooks(
  args: InferRequestType<(typeof client.v2)['event-types'][':eventTypeId']['webhooks']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId'].webhooks.$delete(args, options),
  )
}

export async function getV2EventTypesEventTypeIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$get(args, options),
  )
}

export async function deleteV2EventTypesEventTypeIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$delete(args, options),
  )
}

export async function patchV2EventTypesEventTypeIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['webhooks'][':webhookId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId'].webhooks[':webhookId'].$patch(args, options),
  )
}

export async function getV2EventTypesEventTypeIdPrivateLinks(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId']['private-links'].$get(args, options),
  )
}

export async function postV2EventTypesEventTypeIdPrivateLinks(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId']['private-links'].$post(args, options),
  )
}

export async function deleteV2EventTypesEventTypeIdPrivateLinksLinkId(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId']['private-links'][':linkId'].$delete(args, options),
  )
}

export async function patchV2EventTypesEventTypeIdPrivateLinksLinkId(
  args: InferRequestType<
    (typeof client.v2)['event-types'][':eventTypeId']['private-links'][':linkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['event-types'][':eventTypeId']['private-links'][':linkId'].$patch(args, options),
  )
}

export async function getV2Me(
  args: InferRequestType<typeof client.v2.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.me.$get(args, options))
}

export async function patchV2Me(
  args: InferRequestType<typeof client.v2.me.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.me.$patch(args, options))
}

export async function getV2AuthOauth2ClientsClientId(
  args: InferRequestType<(typeof client.v2.auth.oauth2.clients)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth.oauth2.clients[':clientId'].$get(args, options))
}

export async function postV2AuthOauth2Token(
  args: InferRequestType<typeof client.v2.auth.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.auth.oauth2.token.$post(args, options))
}

export async function getV2Schedules(
  args: InferRequestType<typeof client.v2.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules.$get(args, options))
}

export async function postV2Schedules(
  args: InferRequestType<typeof client.v2.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules.$post(args, options))
}

export async function getV2SchedulesDefault(
  args: InferRequestType<typeof client.v2.schedules.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules.default.$get(args, options))
}

export async function getV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$get(args, options))
}

export async function deleteV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$delete(args, options))
}

export async function patchV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$patch(args, options))
}

export async function postV2SelectedCalendars(
  args: InferRequestType<(typeof client.v2)['selected-calendars']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['selected-calendars'].$post(args, options))
}

export async function deleteV2SelectedCalendars(
  args: InferRequestType<(typeof client.v2)['selected-calendars']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['selected-calendars'].$delete(args, options))
}

export async function getV2Slots(
  args: InferRequestType<typeof client.v2.slots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.slots.$get(args, options))
}

export async function postV2SlotsReservations(
  args: InferRequestType<typeof client.v2.slots.reservations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.slots.reservations.$post(args, options))
}

export async function getV2SlotsReservationsUid(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.slots.reservations[':uid'].$get(args, options))
}

export async function deleteV2SlotsReservationsUid(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.slots.reservations[':uid'].$delete(args, options))
}

export async function patchV2SlotsReservationsUid(
  args: InferRequestType<(typeof client.v2.slots.reservations)[':uid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.slots.reservations[':uid'].$patch(args, options))
}

export async function getV2StripeConnect(
  args: InferRequestType<typeof client.v2.stripe.connect.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stripe.connect.$get(args, options))
}

export async function getV2StripeSave(
  args: InferRequestType<typeof client.v2.stripe.save.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stripe.save.$get(args, options))
}

export async function getV2StripeCheck(
  args: InferRequestType<typeof client.v2.stripe.check.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stripe.check.$get(args, options))
}

export async function postV2VerifiedResourcesEmailsVerificationCodeRequest(
  args: InferRequestType<
    (typeof client.v2)['verified-resources']['emails']['verification-code']['request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['verified-resources'].emails['verification-code'].request.$post(args, options),
  )
}

export async function postV2VerifiedResourcesPhonesVerificationCodeRequest(
  args: InferRequestType<
    (typeof client.v2)['verified-resources']['phones']['verification-code']['request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['verified-resources'].phones['verification-code'].request.$post(args, options),
  )
}

export async function postV2VerifiedResourcesEmailsVerificationCodeVerify(
  args: InferRequestType<
    (typeof client.v2)['verified-resources']['emails']['verification-code']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['verified-resources'].emails['verification-code'].verify.$post(args, options),
  )
}

export async function postV2VerifiedResourcesPhonesVerificationCodeVerify(
  args: InferRequestType<
    (typeof client.v2)['verified-resources']['phones']['verification-code']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['verified-resources'].phones['verification-code'].verify.$post(args, options),
  )
}

export async function getV2VerifiedResourcesEmails(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['verified-resources'].emails.$get(args, options))
}

export async function getV2VerifiedResourcesPhones(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['verified-resources'].phones.$get(args, options))
}

export async function getV2VerifiedResourcesEmailsId(
  args: InferRequestType<(typeof client.v2)['verified-resources']['emails'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['verified-resources'].emails[':id'].$get(args, options))
}

export async function getV2VerifiedResourcesPhonesId(
  args: InferRequestType<(typeof client.v2)['verified-resources']['phones'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['verified-resources'].phones[':id'].$get(args, options))
}

export async function getV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$get(args, options))
}

export async function postV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$post(args, options))
}

export async function getV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$get(args, options))
}

export async function deleteV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$delete(args, options))
}

export async function patchV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$patch(args, options))
}
