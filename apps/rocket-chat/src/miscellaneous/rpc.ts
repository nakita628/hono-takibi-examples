import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1EmailInboxList(
  args: InferRequestType<(typeof client.api.v1)['email-inbox.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['email-inbox.list'].$get(args, options))
}

export async function postApiV1EmailInbox(
  args: InferRequestType<(typeof client.api.v1)['email-inbox']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['email-inbox'].$post(args, options))
}

export async function getApiV1EmailInboxId(
  args: InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['email-inbox'][':_id'].$get(args, options))
}

export async function deleteApiV1EmailInboxId(
  args: InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['email-inbox'][':_id'].$delete(args, options))
}

export async function getApiV1EmailInboxSearch(
  args: InferRequestType<(typeof client.api.v1)['email-inbox.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['email-inbox.search'].$get(args, options))
}

export async function postApiV1EmailInboxSendTestId(
  args: InferRequestType<(typeof client.api.v1)['email-inbox.send-test'][':_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['email-inbox.send-test'][':_id'].$post(args, options))
}

export async function getApiV1ShieldSvg(
  args: InferRequestType<(typeof client.api.v1)['shield.svg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['shield.svg'].$get(args, options))
}

export async function getApiV1Spotlight(
  args: InferRequestType<typeof client.api.v1.spotlight.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.spotlight.$get(args, options))
}

export async function getApiV1SmtpCheck(
  args: InferRequestType<(typeof client.api.v1)['smtp.check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['smtp.check'].$get(args, options))
}

export async function postApiV1Fingerprint(
  args: InferRequestType<typeof client.api.v1.fingerprint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.fingerprint.$post(args, options))
}

export async function getApiV1LicensesInfo(
  args: InferRequestType<(typeof client.api.v1)['licenses.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['licenses.info'].$get(args, options))
}

export async function postApiV1LicensesAdd(
  args: InferRequestType<(typeof client.api.v1)['licenses.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['licenses.add'].$post(args, options))
}

export async function postApiV1LicensesValidate(
  args: InferRequestType<(typeof client.api.v1)['licenses.validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['licenses.validate'].$post(args, options))
}

export async function getApiV1LicensesMaxActiveUsers(
  args: InferRequestType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['licenses.maxActiveUsers'].$get(args, options))
}

export async function getApiV1CommandsGet(
  args: InferRequestType<(typeof client.api.v1)['commands.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['commands.get'].$get(args, options))
}

export async function getApiV1CommandsList(
  args: InferRequestType<(typeof client.api.v1)['commands.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['commands.list'].$get(args, options))
}

export async function getApiV1CommandsPreview(
  args: InferRequestType<(typeof client.api.v1)['commands.preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['commands.preview'].$get(args, options))
}

export async function postApiV1CommandsPreview(
  args: InferRequestType<(typeof client.api.v1)['commands.preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['commands.preview'].$post(args, options))
}

export async function postApiV1CommandsRun(
  args: InferRequestType<(typeof client.api.v1)['commands.run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['commands.run'].$post(args, options))
}

export async function postApiV1Mailer(
  args: InferRequestType<typeof client.api.v1.mailer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.mailer.$post(args, options))
}

export async function postApiV1MailerUnsubscribe(
  args: InferRequestType<(typeof client.api.v1)['mailer.unsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['mailer.unsubscribe'].$post(args, options))
}

export async function getApiV1CalendarEventsList(
  args: InferRequestType<(typeof client.api.v1)['calendar-events.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['calendar-events.list'].$get(args, options))
}

export async function getApiV1CalendarEventsInfo(
  args: InferRequestType<(typeof client.api.v1)['calendar-events.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['calendar-events.info'].$get(args, options))
}

export async function postApiV1CalendarEventsCreate(
  args: InferRequestType<(typeof client.api.v1)['calendar-events.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['calendar-events.create'].$post(args, options))
}

export async function postApiV1CalendarEventsUpdate(
  args: InferRequestType<(typeof client.api.v1)['calendar-events.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['calendar-events.update'].$post(args, options))
}

export async function postApiV1CalendarEventsDelete(
  args: InferRequestType<(typeof client.api.v1)['calendar-events.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['calendar-events.delete'].$post(args, options))
}

export async function postApiV1CalendarEventsImport(
  args: InferRequestType<(typeof client.api.v1)['calendar-events.import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['calendar-events.import'].$post(args, options))
}

export async function postApiAppsPublicAppIdIncoming(
  args: InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.public[':app-id'].incoming.$post(args, options))
}

export async function postApiV1VideoConferenceJitsiUpdateTimeout(
  args: InferRequestType<
    (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-conference']['jitsi.update-timeout'].$post(args, options),
  )
}

export async function postApiAppsPublicAppIdTemplateMessage(
  args: InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.public[':appId'].templateMessage.$post(args, options))
}
