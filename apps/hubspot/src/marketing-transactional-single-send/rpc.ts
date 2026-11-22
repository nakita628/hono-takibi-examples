import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMarketingTransactional202609SingleEmailSend(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.transactional['2026-09']['single-email'].send.$post(args, options),
  )
}

export async function getMarketingTransactional202609SmtpTokens(
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.transactional['2026-09']['smtp-tokens'].$get(args, options),
  )
}

export async function postMarketingTransactional202609SmtpTokens(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.transactional['2026-09']['smtp-tokens'].$post(args, options),
  )
}

export async function getMarketingTransactional202609SmtpTokensTokenId(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$get(args, options),
  )
}

export async function deleteMarketingTransactional202609SmtpTokensTokenId(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$delete(args, options),
  )
}

export async function postMarketingTransactional202609SmtpTokensTokenIdPasswordReset(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId']['password-reset'].$post(
      args,
      options,
    ),
  )
}
