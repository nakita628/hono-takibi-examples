import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function getAnnouncements(options?: ClientRequestOptions) {
  return await parseResponse(client.announcements.$get(undefined, options))
}

export async function postAnnouncements(
  args: InferRequestType<typeof client.announcements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.announcements.$post(args, options))
}

export async function getAreacodes(options?: ClientRequestOptions) {
  return await parseResponse(client.areacodes.$get(undefined, options))
}

export async function getBilling(options?: ClientRequestOptions) {
  return await parseResponse(client.billing.$get(undefined, options))
}

export async function getCalls(
  args: InferRequestType<typeof client.calls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.$get(args, options))
}

export async function postCalls(
  args: InferRequestType<typeof client.calls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.$post(args, options))
}

export async function getCharges(options?: ClientRequestOptions) {
  return await parseResponse(client.charges.$get(undefined, options))
}

export async function postCharges(options?: ClientRequestOptions) {
  return await parseResponse(client.charges.$post(undefined, options))
}

export async function getContacts(options?: ClientRequestOptions) {
  return await parseResponse(client.contacts.$get(undefined, options))
}

export async function getCustomers(options?: ClientRequestOptions) {
  return await parseResponse(client.customers.$get(undefined, options))
}

export async function getCustomersAccount(
  args: InferRequestType<(typeof client.customers)[':account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':account'].$get(args, options))
}

export async function getCustomersAccountAnnouncements(
  args: InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':account'].announcements.$get(args, options))
}

export async function getCustomersAccountAnnouncementsAnnouncementId(
  args: InferRequestType<
    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':account'].announcements[':announcement_id'].$get(args, options),
  )
}

export async function deleteCustomersAccountAnnouncementsAnnouncementId(
  args: InferRequestType<
    (typeof client.customers)[':account']['announcements'][':announcement_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':account'].announcements[':announcement_id'].$delete(args, options),
  )
}

export async function getFaxes(options?: ClientRequestOptions) {
  return await parseResponse(client.faxes.$get(undefined, options))
}

export async function getHosted(options?: ClientRequestOptions) {
  return await parseResponse(client.hosted.$get(undefined, options))
}

export async function getIpAddress(options?: ClientRequestOptions) {
  return await parseResponse(client['ip-address'].$get(undefined, options))
}

export async function getMobile(options?: ClientRequestOptions) {
  return await parseResponse(client.mobile.$get(undefined, options))
}

export async function getNumbers(options?: ClientRequestOptions) {
  return await parseResponse(client.numbers.$get(undefined, options))
}

export async function getNumbersAreacodes(options?: ClientRequestOptions) {
  return await parseResponse(client.numbers.areacodes.$get(undefined, options))
}

export async function getPartners(options?: ClientRequestOptions) {
  return await parseResponse(client.partners.$get(undefined, options))
}

export async function getPorting(options?: ClientRequestOptions) {
  return await parseResponse(client.porting.$get(undefined, options))
}

export async function getServiceStatus(options?: ClientRequestOptions) {
  return await parseResponse(client['service-status'].$get(undefined, options))
}

export async function getSip(options?: ClientRequestOptions) {
  return await parseResponse(client.sip.$get(undefined, options))
}

export async function getSms(options?: ClientRequestOptions) {
  return await parseResponse(client.sms.$get(undefined, options))
}

export async function postSupportEcho(options?: ClientRequestOptions) {
  return await parseResponse(client.support.echo.$post(undefined, options))
}

export async function getSupportIpAddress(options?: ClientRequestOptions) {
  return await parseResponse(client.support['ip-address'].$get(undefined, options))
}

export async function getSupportServiceStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.support['service-status'].$get(undefined, options))
}

export async function getTopups(options?: ClientRequestOptions) {
  return await parseResponse(client.topups.$get(undefined, options))
}
