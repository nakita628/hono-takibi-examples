import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$get(args, options))
}

export async function getAccountsAccountIdAdclients(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].adclients.$get(args, options))
}

export async function getAccountsAccountIdAdclientsAdClientIdAdcode(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adcode.$get(args, options),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdAdunits(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(args, options),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(args, options),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannels(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].customchannels.$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdCustomchannels(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].customchannels.$get(args, options),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].customchannels[':customChannelId'].$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].customchannels[
      ':customChannelId'
    ].adunits.$get(args, options),
  )
}

export async function getAccountsAccountIdAdclientsAdClientIdUrlchannels(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].urlchannels.$get(args, options),
  )
}

export async function getAccountsAccountIdAlerts(
  args: InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].alerts.$get(args, options))
}

export async function deleteAccountsAccountIdAlertsAlertId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].alerts[':alertId'].$delete(args, options),
  )
}

export async function getAccountsAccountIdPayments(
  args: InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].payments.$get(args, options))
}

export async function getAccountsAccountIdReports(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].reports.$get(args, options))
}

export async function getAccountsAccountIdReportsSaved(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].reports.saved.$get(args, options))
}

export async function getAccountsAccountIdReportsSavedReportId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].reports[':savedReportId'].$get(args, options),
  )
}

export async function getAccountsAccountIdSavedadstyles(
  args: InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].savedadstyles.$get(args, options))
}

export async function getAccountsAccountIdSavedadstylesSavedAdStyleId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].savedadstyles[':savedAdStyleId'].$get(args, options),
  )
}

export async function getAdclients(
  args: InferRequestType<typeof client.adclients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients.$get(args, options))
}

export async function getAdclientsAdClientIdAdunits(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].adunits.$get(args, options))
}

export async function getAdclientsAdClientIdAdunitsAdUnitId(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adclients[':adClientId'].adunits[':adUnitId'].$get(args, options),
  )
}

export async function getAdclientsAdClientIdAdunitsAdUnitIdAdcode(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(args, options),
  )
}

export async function getAdclientsAdClientIdAdunitsAdUnitIdCustomchannels(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adclients[':adClientId'].adunits[':adUnitId'].customchannels.$get(args, options),
  )
}

export async function getAdclientsAdClientIdCustomchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].customchannels.$get(args, options))
}

export async function getAdclientsAdClientIdCustomchannelsCustomChannelId(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adclients[':adClientId'].customchannels[':customChannelId'].$get(args, options),
  )
}

export async function getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adclients[':adClientId'].customchannels[':customChannelId'].adunits.$get(args, options),
  )
}

export async function getAdclientsAdClientIdUrlchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].urlchannels.$get(args, options))
}

export async function getAlerts(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.$get(args, options))
}

export async function deleteAlertsAlertId(
  args: InferRequestType<(typeof client.alerts)[':alertId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alertId'].$delete(args, options))
}

export async function getMetadataDimensions(
  args: InferRequestType<typeof client.metadata.dimensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.dimensions.$get(args, options))
}

export async function getMetadataMetrics(
  args: InferRequestType<typeof client.metadata.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.metrics.$get(args, options))
}

export async function getPayments(
  args: InferRequestType<typeof client.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.$get(args, options))
}

export async function getReports(
  args: InferRequestType<typeof client.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$get(args, options))
}

export async function getReportsSaved(
  args: InferRequestType<typeof client.reports.saved.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.saved.$get(args, options))
}

export async function getReportsSavedReportId(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':savedReportId'].$get(args, options))
}

export async function getSavedadstyles(
  args: InferRequestType<typeof client.savedadstyles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.savedadstyles.$get(args, options))
}

export async function getSavedadstylesSavedAdStyleId(
  args: InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.savedadstyles[':savedAdStyleId'].$get(args, options))
}
