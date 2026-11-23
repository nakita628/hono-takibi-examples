import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AllowlistPrivate(
  args: InferRequestType<typeof client.v1.allowlist.private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.private.$post(args, options))
}

export async function getV1AllowlistPrivateAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.allowlist.private.all.$get(undefined, options))
}

export async function getV1AllowlistPrivateAllResourceType(
  args: InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.private.all[':resource_type'].$get(args, options))
}

export async function getV1AllowlistPrivateIpAddress(
  args: InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.private.ip[':address'].$get(args, options))
}

export async function getV1AllowlistPrivateAllowlistId(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.private[':allowlist_id'].$get(args, options))
}

export async function putV1AllowlistPrivateAllowlistId(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.private[':allowlist_id'].$put(args, options))
}

export async function deleteV1AllowlistPrivateAllowlistId(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.private[':allowlist_id'].$delete(args, options))
}

export async function getV1AllowlistPrivateAllowlistIdContent(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.allowlist.private[':allowlist_id'].content.$get(args, options),
  )
}

export async function putV1AllowlistPrivateAllowlistIdContent(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.allowlist.private[':allowlist_id'].content.$put(args, options),
  )
}

export async function deleteV1AllowlistPrivateAllowlistIdContent(
  args: InferRequestType<
    (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.allowlist.private[':allowlist_id'].content.$delete(args, options),
  )
}

export async function putV1AllowlistPrivateAllowlistIdOrigin(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.allowlist.private[':allowlist_id'].origin.$put(args, options),
  )
}

export async function getV1AllowlistPublicAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.allowlist.public.all.$get(undefined, options))
}

export async function getV1AllowlistPublicAllResourceType(
  args: InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.public.all[':resource_type'].$get(args, options))
}

export async function getV1AllowlistPublicIpAddress(
  args: InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.public.ip[':address'].$get(args, options))
}

export async function getV1AllowlistPublicOwned(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.allowlist.public.owned.$get(undefined, options))
}

export async function getV1AllowlistPublicOwnedResourceType(
  args: InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.public.owned[':resource_type'].$get(args, options))
}

export async function getV1AllowlistPublicAllowlistId(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.public[':allowlist_id'].$get(args, options))
}

export async function putV1AllowlistPublicAllowlistId(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.public[':allowlist_id'].$put(args, options))
}

export async function deleteV1AllowlistPublicAllowlistId(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.public[':allowlist_id'].$delete(args, options))
}

export async function putV1AllowlistPublicAllowlistIdOrigin(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.allowlist.public[':allowlist_id'].origin.$put(args, options))
}

export async function getV1AsnIpIpAddress(
  args: InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.asn.ip[':ip_address'].$get(args, options))
}

export async function postV1AsnPrefix(
  args: InferRequestType<typeof client.v1.asn.prefix.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.asn.prefix.$post(args, options))
}

export async function getV1AsnRegistryAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.asn.registry.all.$get(undefined, options))
}

export async function getV1AsnRegistryCode(
  args: InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.asn.registry[':code'].$get(args, options))
}

export async function getV1AsnStatusAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.asn.status.all.$get(undefined, options))
}

export async function getV1AsnStatusCode(
  args: InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.asn.status[':code'].$get(args, options))
}

export async function getV1AsnNumber(
  args: InferRequestType<(typeof client.v1.asn)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.asn[':number'].$get(args, options))
}

export async function getV1AsnNumberPrefixes(
  args: InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.asn[':number'].prefixes.$get(args, options))
}

export async function postV1AssessIp(
  args: InferRequestType<typeof client.v1.assess.ip.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assess.ip.$post(args, options))
}

export async function postV1AssessIpCsv(
  args: InferRequestType<typeof client.v1.assess.ip.csv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assess.ip.csv.$post(args, options))
}

export async function getV1AssessIpIpAddress(
  args: InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assess.ip[':ip_address'].$get(args, options))
}

export async function getV1DatacenterIpIpAddress(
  args: InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datacenter.ip[':ip_address'].$get(args, options))
}

export async function postV1DatacenterPrefix(
  args: InferRequestType<typeof client.v1.datacenter.prefix.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datacenter.prefix.$post(args, options))
}

export async function getV1DatacenterDatacenterId(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datacenter[':datacenter_id'].$get(args, options))
}

export async function getV1DatacenterDatacenterIdPrefixes(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datacenter[':datacenter_id'].prefixes.$get(args, options))
}

export async function getV1DatasetIp(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.dataset.ip.$get(undefined, options))
}

export async function getV1DatasetIpName(
  args: InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataset.ip[':name'].$get(args, options))
}

export async function postV1DenylistPrivate(
  args: InferRequestType<typeof client.v1.denylist.private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private.$post(args, options))
}

export async function getV1DenylistPrivateAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.denylist.private.all.$get(undefined, options))
}

export async function getV1DenylistPrivateAllResourceType(
  args: InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private.all[':resource_type'].$get(args, options))
}

export async function getV1DenylistPrivateIpAddress(
  args: InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private.ip[':address'].$get(args, options))
}

export async function getV1DenylistPrivateDenylistId(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private[':denylist_id'].$get(args, options))
}

export async function putV1DenylistPrivateDenylistId(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private[':denylist_id'].$put(args, options))
}

export async function deleteV1DenylistPrivateDenylistId(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private[':denylist_id'].$delete(args, options))
}

export async function getV1DenylistPrivateDenylistIdContent(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private[':denylist_id'].content.$get(args, options))
}

export async function putV1DenylistPrivateDenylistIdContent(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private[':denylist_id'].content.$put(args, options))
}

export async function deleteV1DenylistPrivateDenylistIdContent(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.denylist.private[':denylist_id'].content.$delete(args, options),
  )
}

export async function putV1DenylistPrivateDenylistIdOrigin(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.private[':denylist_id'].origin.$put(args, options))
}

export async function getV1DenylistPublicAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.denylist.public.all.$get(undefined, options))
}

export async function getV1DenylistPublicAllResourceType(
  args: InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.public.all[':resource_type'].$get(args, options))
}

export async function getV1DenylistPublicIpAddress(
  args: InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.public.ip[':address'].$get(args, options))
}

export async function getV1DenylistPublicOwned(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.denylist.public.owned.$get(undefined, options))
}

export async function getV1DenylistPublicOwnedResourceType(
  args: InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.public.owned[':resource_type'].$get(args, options))
}

export async function getV1DenylistPublicDenylistId(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.public[':denylist_id'].$get(args, options))
}

export async function putV1DenylistPublicDenylistId(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.public[':denylist_id'].$put(args, options))
}

export async function deleteV1DenylistPublicDenylistId(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.public[':denylist_id'].$delete(args, options))
}

export async function putV1DenylistPublicDenylistIdOrigin(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.public[':denylist_id'].origin.$put(args, options))
}

export async function getV1DenylistReportedIp(
  args: InferRequestType<typeof client.v1.denylist.reported.ip.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.reported.ip.$get(args, options))
}

export async function deleteV1DenylistReportedIpAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.denylist.reported.ip.all.$delete(undefined, options))
}

export async function getV1DenylistReportedIpIpAddress(
  args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.reported.ip[':ip_address'].$get(args, options))
}

export async function deleteV1DenylistReportedIpIpAddress(
  args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.denylist.reported.ip[':ip_address'].$delete(args, options))
}

export async function postV1Geo(
  args: InferRequestType<typeof client.v1.geo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.geo.$post(args, options))
}

export async function postV1GeoCsv(
  args: InferRequestType<typeof client.v1.geo.csv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.geo.csv.$post(args, options))
}

export async function getV1GeoIpAddress(
  args: InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.geo[':ip_address'].$get(args, options))
}

export async function getV1LogIpIdLogchangeId(
  args: InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.log.ip.id[':logchange_id'].$get(args, options))
}

export async function getV1LogIpIpAddress(
  args: InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.log.ip[':ip_address'].$get(args, options))
}

export async function getV1Origin(
  args: InferRequestType<typeof client.v1.origin.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.$get(args, options))
}

export async function putV1Origin(
  args: InferRequestType<typeof client.v1.origin.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.$put(args, options))
}

export async function getV1OriginAddresses(
  args: InferRequestType<typeof client.v1.origin.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.addresses.$get(args, options))
}

export async function getV1OriginAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.origin.all.$get(undefined, options))
}

export async function getV1OriginClientAnalysis(
  args: InferRequestType<typeof client.v1.origin.client.analysis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.client.analysis.$get(args, options))
}

export async function getV1OriginCookies(
  args: InferRequestType<typeof client.v1.origin.cookies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.cookies.$get(args, options))
}

export async function getV1OriginScripts(
  args: InferRequestType<typeof client.v1.origin.scripts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.scripts.$get(args, options))
}

export async function postV1OriginStatus(
  args: InferRequestType<typeof client.v1.origin.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.status.$post(args, options))
}

export async function getV1OriginStatusDetailStatusId(
  args: InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.status.detail[':status_id'].$get(args, options))
}

export async function getV1OriginStatusDetails(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.origin.status.details.$get(undefined, options))
}

export async function getV1OriginTrafficAnalysis(
  args: InferRequestType<typeof client.v1.origin.traffic.analysis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin.traffic.analysis.$get(args, options))
}

export async function postV1OriginToken(
  args: InferRequestType<typeof client.v1.origin_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin_token.$post(args, options))
}

export async function deleteV1OriginToken(
  args: InferRequestType<typeof client.v1.origin_token.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin_token.$delete(args, options))
}

export async function getV1OriginTokenAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.origin_token.all.$get(undefined, options))
}

export async function putV1OriginTokenDisable(
  args: InferRequestType<typeof client.v1.origin_token.disable.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin_token.disable.$put(args, options))
}

export async function putV1OriginTokenEnable(
  args: InferRequestType<typeof client.v1.origin_token.enable.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin_token.enable.$put(args, options))
}

export async function postV1OriginTokenNew(
  args: InferRequestType<typeof client.v1.origin_token.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.origin_token.new.$post(args, options))
}

export async function getV1SourceIp(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.source.ip.$get(undefined, options))
}

export async function getV1SourceIpSource(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source.ip[':source'].$get(args, options))
}

export async function getV1SourceIpSourceRangeTimeRange(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.source.ip[':source'].range[':time_range'].$get(args, options),
  )
}

export async function getV1Token(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.token.$get(undefined, options))
}

export async function getV1TokenActivity(
  args: InferRequestType<typeof client.v1.token.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.token.activity.$get(args, options))
}

export async function postV1Ua(
  args: InferRequestType<typeof client.v1.ua.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua.$post(args, options))
}

export async function postV1UaCsv(
  args: InferRequestType<typeof client.v1.ua.csv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua.csv.$post(args, options))
}

export async function getV1UaDeviceCode(
  args: InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua.device[':code'].$get(args, options))
}

export async function getV1UaFamilyCode(
  args: InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua.family[':code'].$get(args, options))
}

export async function getV1UaOsCode(
  args: InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua.os[':code'].$get(args, options))
}

export async function getV1UaTypeCode(
  args: InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua.type[':code'].$get(args, options))
}

export async function getV1UaVendorCode(
  args: InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua.vendor[':code'].$get(args, options))
}

export async function getV1UaUserAgentUrlencoded(
  args: InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ua[':user_agent_urlencoded'].$get(args, options))
}
