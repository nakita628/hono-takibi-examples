import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversion(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].engine[
      ':engineAccountId'
    ].conversion.$get(args, options),
  )
}

export async function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmapping(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].idmapping.$get(
      args,
      options,
    ),
  )
}

export async function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumns(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].savedcolumns.$get(
      args,
      options,
    ),
  )
}

export async function putDoubleclicksearchV2Conversion(
  args: InferRequestType<typeof client.doubleclicksearch.v2.conversion.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.doubleclicksearch.v2.conversion.$put(args, options))
}

export async function postDoubleclicksearchV2Conversion(
  args: InferRequestType<typeof client.doubleclicksearch.v2.conversion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.doubleclicksearch.v2.conversion.$post(args, options))
}

export async function postDoubleclicksearchV2ConversionUpdateAvailability(
  args: InferRequestType<typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.doubleclicksearch.v2.conversion.updateAvailability.$post(args, options),
  )
}

export async function getDoubleclicksearchV2CustomerCustomerIdConversion(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.doubleclicksearch.v2.customer[':customerId'].conversion.$get(args, options),
  )
}

export async function postDoubleclicksearchV2Reports(
  args: InferRequestType<typeof client.doubleclicksearch.v2.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.doubleclicksearch.v2.reports.$post(args, options))
}

export async function postDoubleclicksearchV2ReportsGenerate(
  args: InferRequestType<typeof client.doubleclicksearch.v2.reports.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.doubleclicksearch.v2.reports.generate.$post(args, options))
}

export async function getDoubleclicksearchV2ReportsReportId(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.doubleclicksearch.v2.reports[':reportId'].$get(args, options))
}

export async function getDoubleclicksearchV2ReportsReportIdFilesReportFragment(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.doubleclicksearch.v2.reports[':reportId'].files[':reportFragment'].$get(args, options),
  )
}
