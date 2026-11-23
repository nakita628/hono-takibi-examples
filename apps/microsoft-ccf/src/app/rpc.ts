import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAppApi(options?: ClientRequestOptions) {
  return await parseResponse(client.app.api.$get(undefined, options))
}

export async function getAppCommit(
  args: InferRequestType<typeof client.app.commit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.commit.$get(args, options))
}

export async function getAppCoseSignaturesConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.app.cose_signatures_config.$get(undefined, options))
}

export async function getAppCustomAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.app.custom_auth.$get(undefined, options))
}

export async function getAppLogBlockingPrivate(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.blocking.private.$get(args, options))
}

export async function postAppLogBlockingPrivate(
  args: InferRequestType<typeof client.app.log.blocking.private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.blocking.private.$post(args, options))
}

export async function postAppLogBlockingPrivateReceipt(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.blocking.private.receipt.$post(undefined, options))
}

export async function postAppLogCoseSignedContent(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.cose_signed_content.$post(undefined, options))
}

export async function getAppLogPrivate(
  args: InferRequestType<typeof client.app.log.private.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.$get(args, options))
}

export async function postAppLogPrivate(
  args: InferRequestType<typeof client.app.log.private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.$post(args, options))
}

export async function deleteAppLogPrivate(
  args: InferRequestType<typeof client.app.log.private.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.$delete(args, options))
}

export async function postAppLogPrivateAdminOnly(
  args: InferRequestType<typeof client.app.log.private.admin_only.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.admin_only.$post(args, options))
}

export async function deleteAppLogPrivateAll(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.private.all.$delete(undefined, options))
}

export async function postAppLogPrivateAnonymous(
  args: InferRequestType<typeof client.app.log.private.anonymous.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.anonymous.$post(args, options))
}

export async function postAppLogPrivateAnonymousV2(
  args: InferRequestType<typeof client.app.log.private.anonymous.v2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.anonymous.v2.$post(args, options))
}

export async function getAppLogPrivateBackup(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.backup.$get(args, options))
}

export async function getAppLogPrivateCommitted(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.committed.$get(args, options))
}

export async function getAppLogPrivateCount(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.private.count.$get(undefined, options))
}

export async function getAppLogPrivateHistorical(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.historical.$get(args, options))
}

export async function getAppLogPrivateHistoricalHandle(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.historical.handle.$get(args, options))
}

export async function getAppLogPrivateHistoricalSparse(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.historical.sparse.$get(args, options))
}

export async function getAppLogPrivateHistoricalReceipt(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.historical_receipt.$get(args, options))
}

export async function postAppLogPrivateInstallCommittedIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.app.log.private.install_committed_index.$post(undefined, options),
  )
}

export async function postAppLogPrivateOptionalCommit(
  args: InferRequestType<typeof client.app.log.private.optional_commit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.optional_commit.$post(args, options))
}

export async function postAppLogPrivatePrefixCert(
  args: InferRequestType<typeof client.app.log.private.prefix_cert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.prefix_cert.$post(args, options))
}

export async function postAppLogPrivateRawTextId(
  args: InferRequestType<(typeof client.app.log.private.raw_text)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.private.raw_text[':id'].$post(args, options))
}

export async function postAppLogPrivateUninstallCommittedIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.app.log.private.uninstall_committed_index.$post(undefined, options),
  )
}

export async function getAppLogPublic(
  args: InferRequestType<typeof client.app.log.public.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.public.$get(args, options))
}

export async function postAppLogPublic(
  args: InferRequestType<typeof client.app.log.public.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.public.$post(args, options))
}

export async function deleteAppLogPublic(
  args: InferRequestType<typeof client.app.log.public.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.public.$delete(args, options))
}

export async function deleteAppLogPublicAll(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.public.all.$delete(undefined, options))
}

export async function getAppLogPublicBackup(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.public.backup.$get(args, options))
}

export async function getAppLogPublicCoseEndorsements(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.public.cose_endorsements.$get(undefined, options))
}

export async function getAppLogPublicCoseReceipt(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.public.cose_receipt.$get(undefined, options))
}

export async function getAppLogPublicCoseSignature(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.public.cose_signature.$get(undefined, options))
}

export async function getAppLogPublicCount(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.public.count.$get(undefined, options))
}

export async function getAppLogPublicHistoricalRange(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.public.historical.range.$get(args, options))
}

export async function getAppLogPublicHistoricalReceipt(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.log.public.historical_receipt.$get(args, options))
}

export async function getAppLogPublicTrustedKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.public.trusted_keys.$get(undefined, options))
}

export async function getAppLogPublicVerifyCoseReceipt(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.public.verify_cose_receipt.$get(undefined, options))
}

export async function getAppLogRequestQuery(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.request_query.$get(undefined, options))
}

export async function postAppLogSignedStatement(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.signed_statement.$post(undefined, options))
}

export async function getAppLogTransparentStatement(options?: ClientRequestOptions) {
  return await parseResponse(client.app.log.transparent_statement.$get(undefined, options))
}

export async function postAppMultiAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.app.multi_auth.$post(undefined, options))
}

export async function getAppReceipt(
  args: InferRequestType<typeof client.app.receipt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.receipt.$get(args, options))
}

export async function getAppReceiptCose(
  args: InferRequestType<typeof client.app.receipt.cose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.receipt.cose.$get(args, options))
}

export async function getAppTx(
  args: InferRequestType<typeof client.app.tx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.tx.$get(args, options))
}
