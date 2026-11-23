import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCalendars(
  args: InferRequestType<typeof client.calendars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.$post(args, options))
}

export async function getCalendarsCalendarId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].$get(args, options))
}

export async function putCalendarsCalendarId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].$put(args, options))
}

export async function deleteCalendarsCalendarId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].$delete(args, options))
}

export async function patchCalendarsCalendarId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].$patch(args, options))
}

export async function getCalendarsCalendarIdAcl(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].acl.$get(args, options))
}

export async function postCalendarsCalendarIdAcl(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].acl.$post(args, options))
}

export async function postCalendarsCalendarIdAclWatch(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].acl.watch.$post(args, options))
}

export async function getCalendarsCalendarIdAclRuleId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$get(args, options))
}

export async function putCalendarsCalendarIdAclRuleId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$put(args, options))
}

export async function deleteCalendarsCalendarIdAclRuleId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$delete(args, options))
}

export async function patchCalendarsCalendarIdAclRuleId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$patch(args, options))
}

export async function postCalendarsCalendarIdClear(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].clear.$post(args, options))
}

export async function getCalendarsCalendarIdEvents(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].events.$get(args, options))
}

export async function postCalendarsCalendarIdEvents(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].events.$post(args, options))
}

export async function postCalendarsCalendarIdEventsImport(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].events.import.$post(args, options))
}

export async function postCalendarsCalendarIdEventsQuickAdd(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].events.quickAdd.$post(args, options))
}

export async function postCalendarsCalendarIdEventsWatch(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].events.watch.$post(args, options))
}

export async function getCalendarsCalendarIdEventsEventId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].events[':eventId'].$get(args, options))
}

export async function putCalendarsCalendarIdEventsEventId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':calendarId'].events[':eventId'].$put(args, options))
}

export async function deleteCalendarsCalendarIdEventsEventId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars[':calendarId'].events[':eventId'].$delete(args, options),
  )
}

export async function patchCalendarsCalendarIdEventsEventId(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars[':calendarId'].events[':eventId'].$patch(args, options),
  )
}

export async function getCalendarsCalendarIdEventsEventIdInstances(
  args: InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars[':calendarId'].events[':eventId'].instances.$get(args, options),
  )
}

export async function postCalendarsCalendarIdEventsEventIdMove(
  args: InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars[':calendarId'].events[':eventId'].move.$post(args, options),
  )
}

export async function postChannelsStop(
  args: InferRequestType<typeof client.channels.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.stop.$post(args, options))
}

export async function getColors(
  args: InferRequestType<typeof client.colors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.colors.$get(args, options))
}

export async function postFreeBusy(
  args: InferRequestType<typeof client.freeBusy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.freeBusy.$post(args, options))
}

export async function getUsersMeCalendarList(
  args: InferRequestType<typeof client.users.me.calendarList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.calendarList.$get(args, options))
}

export async function postUsersMeCalendarList(
  args: InferRequestType<typeof client.users.me.calendarList.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.calendarList.$post(args, options))
}

export async function postUsersMeCalendarListWatch(
  args: InferRequestType<typeof client.users.me.calendarList.watch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.calendarList.watch.$post(args, options))
}

export async function getUsersMeCalendarListCalendarId(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.calendarList[':calendarId'].$get(args, options))
}

export async function putUsersMeCalendarListCalendarId(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.calendarList[':calendarId'].$put(args, options))
}

export async function deleteUsersMeCalendarListCalendarId(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.calendarList[':calendarId'].$delete(args, options))
}

export async function patchUsersMeCalendarListCalendarId(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.calendarList[':calendarId'].$patch(args, options))
}

export async function getUsersMeSettings(
  args: InferRequestType<typeof client.users.me.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.settings.$get(args, options))
}

export async function postUsersMeSettingsWatch(
  args: InferRequestType<typeof client.users.me.settings.watch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.settings.watch.$post(args, options))
}

export async function getUsersMeSettingsSetting(
  args: InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.settings[':setting'].$get(args, options))
}
