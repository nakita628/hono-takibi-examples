import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1BillTypes(
  args: InferRequestType<typeof client.api.v1.BillTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.BillTypes.$get(args, options))
}

export async function getApiV1Bills(
  args: InferRequestType<typeof client.api.v1.Bills.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Bills.$get(args, options))
}

export async function getApiV1BillsBillId(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Bills[':billId'].$get(args, options))
}

export async function getApiV1BillsBillIdNewsArticles(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Bills[':billId'].NewsArticles.$get(args, options))
}

export async function getApiV1BillsBillIdPublications(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Bills[':billId'].Publications.$get(args, options))
}

export async function getApiV1BillsBillIdStages(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Bills[':billId'].Stages.$get(args, options))
}

export async function getApiV1BillsBillIdStagesBillStageId(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Bills[':billId'].Stages[':billStageId'].$get(args, options),
  )
}

export async function getApiV1BillsBillIdStagesBillStageIdAmendments(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments.$get(args, options),
  )
}

export async function getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentId(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments[':amendmentId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1BillsBillIdStagesStageIdPublications(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Bills[':billId'].Stages[':stageId'].Publications.$get(args, options),
  )
}

export async function getApiV1PublicationTypes(
  args: InferRequestType<typeof client.api.v1.PublicationTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.PublicationTypes.$get(args, options))
}

export async function getApiV1PublicationsPublicationIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Publications[':publicationId'].Documents[':documentId'].$get(args, options),
  )
}

export async function getApiV1PublicationsPublicationIdDocumentsDocumentIdDownload(
  args: InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Publications[':publicationId'].Documents[':documentId'].Download.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1RssBillsIdRss(
  args: InferRequestType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Rss.Bills[':id.rss'].$get(args, options))
}

export async function getApiV1RssAllbillsRss(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.Rss['allbills.rss'].$get(undefined, options))
}

export async function getApiV1RssPrivatebillsRss(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.Rss['privatebills.rss'].$get(undefined, options))
}

export async function getApiV1RssPublicbillsRss(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.Rss['publicbills.rss'].$get(undefined, options))
}

export async function getApiV1Sittings(
  args: InferRequestType<typeof client.api.v1.Sittings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Sittings.$get(args, options))
}

export async function getApiV1Stages(
  args: InferRequestType<typeof client.api.v1.Stages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Stages.$get(args, options))
}
