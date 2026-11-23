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

export async function getAccountsAccountIdAdclientsAdClientId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].$get(args, options),
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

export async function putAccountsAccountIdAdclientsAdClientIdAdunits(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits.$put(args, options),
  )
}

export async function postAccountsAccountIdAdclientsAdClientIdAdunits(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits.$post(args, options),
  )
}

export async function patchAccountsAccountIdAdclientsAdClientIdAdunits(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits.$patch(args, options),
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

export async function deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$delete(
      args,
      options,
    ),
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

export async function getAccountsAccountIdReports(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].reports.$get(args, options))
}

export async function getAdclients(
  args: InferRequestType<typeof client.adclients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients.$get(args, options))
}

export async function getAdclientsAdClientId(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].$get(args, options))
}

export async function getAdclientsAdClientIdCustomchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].customchannels.$get(args, options))
}

export async function putAdclientsAdClientIdCustomchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].customchannels.$put(args, options))
}

export async function postAdclientsAdClientIdCustomchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].customchannels.$post(args, options))
}

export async function patchAdclientsAdClientIdCustomchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].customchannels.$patch(args, options))
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

export async function deleteAdclientsAdClientIdCustomchannelsCustomChannelId(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adclients[':adClientId'].customchannels[':customChannelId'].$delete(args, options),
  )
}

export async function getAdclientsAdClientIdUrlchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].urlchannels.$get(args, options))
}

export async function postAdclientsAdClientIdUrlchannels(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adclients[':adClientId'].urlchannels.$post(args, options))
}

export async function deleteAdclientsAdClientIdUrlchannelsUrlChannelId(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adclients[':adClientId'].urlchannels[':urlChannelId'].$delete(args, options),
  )
}

export async function getAssociationsessionsStart(
  args: InferRequestType<typeof client.associationsessions.start.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associationsessions.start.$get(args, options))
}

export async function getAssociationsessionsVerify(
  args: InferRequestType<typeof client.associationsessions.verify.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associationsessions.verify.$get(args, options))
}

export async function getReports(
  args: InferRequestType<typeof client.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$get(args, options))
}
