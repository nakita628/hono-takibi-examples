import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBankAccounts(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'].$get(args, options))
}

export async function postBankAccounts(
  args: InferRequestType<(typeof client)['bank-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'].$post(args, options))
}

export async function getBankAccountsId(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'][':id'].$get(args, options))
}

export async function putBankAccountsId(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'][':id'].$put(args, options))
}

export async function deleteBankAccountsId(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'][':id'].$delete(args, options))
}

export async function getCurrencies(
  args: InferRequestType<typeof client.currencies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.currencies.$get(args, options))
}

export async function getDocumentBlocks(
  args: InferRequestType<(typeof client)['document-blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['document-blocks'].$get(args, options))
}

export async function getDocuments(
  args: InferRequestType<typeof client.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$get(args, options))
}

export async function postDocuments(
  args: InferRequestType<typeof client.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$post(args, options))
}

export async function getDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$get(args, options))
}

export async function postDocumentsIdCancel(
  args: InferRequestType<(typeof client.documents)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].cancel.$post(args, options))
}

export async function postDocumentsIdCreateFromProforma(
  args: InferRequestType<(typeof client.documents)[':id']['create-from-proforma']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id']['create-from-proforma'].$post(args, options))
}

export async function getDocumentsIdDownload(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].download.$get(args, options))
}

export async function getDocumentsIdOnlineSzamla(
  args: InferRequestType<(typeof client.documents)[':id']['online-szamla']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id']['online-szamla'].$get(args, options))
}

export async function getDocumentsIdPayments(
  args: InferRequestType<(typeof client.documents)[':id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].payments.$get(args, options))
}

export async function putDocumentsIdPayments(
  args: InferRequestType<(typeof client.documents)[':id']['payments']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].payments.$put(args, options))
}

export async function deleteDocumentsIdPayments(
  args: InferRequestType<(typeof client.documents)[':id']['payments']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].payments.$delete(args, options))
}

export async function getDocumentsIdPublicUrl(
  args: InferRequestType<(typeof client.documents)[':id']['public-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id']['public-url'].$get(args, options))
}

export async function postDocumentsIdSend(
  args: InferRequestType<(typeof client.documents)[':id']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].send.$post(args, options))
}

export async function getOrganization(options?: ClientRequestOptions) {
  return await parseResponse(client.organization.$get(undefined, options))
}

export async function getPartners(
  args: InferRequestType<typeof client.partners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners.$get(args, options))
}

export async function postPartners(
  args: InferRequestType<typeof client.partners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners.$post(args, options))
}

export async function getPartnersId(
  args: InferRequestType<(typeof client.partners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners[':id'].$get(args, options))
}

export async function putPartnersId(
  args: InferRequestType<(typeof client.partners)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners[':id'].$put(args, options))
}

export async function deletePartnersId(
  args: InferRequestType<(typeof client.partners)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners[':id'].$delete(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function postProducts(
  args: InferRequestType<typeof client.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$post(args, options))
}

export async function getProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$get(args, options))
}

export async function putProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$put(args, options))
}

export async function deleteProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$delete(args, options))
}

export async function getUtilsConvertLegacyIdId(
  args: InferRequestType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils['convert-legacy-id'][':id'].$get(args, options))
}
