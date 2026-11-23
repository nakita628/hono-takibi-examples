import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV4Spreadsheets(
  args: InferRequestType<typeof client.v4.spreadsheets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.spreadsheets.$post(args, options))
}

export async function getV4SpreadsheetsSpreadsheetId(
  args: InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.spreadsheets[':spreadsheetId'].$get(args, options))
}

export async function getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataId(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId'].developerMetadata[':metadataId'].$get(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearch(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata:search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId']['developerMetadata:search'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyTo(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['sheets'][':sheetId:copyTo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId'].sheets[':sheetId:copyTo'].$post(args, options),
  )
}

export async function getV4SpreadsheetsSpreadsheetIdValuesRange(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId'].values[':range'].$get(args, options),
  )
}

export async function putV4SpreadsheetsSpreadsheetIdValuesRange(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId'].values[':range'].$put(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdValuesRangeAppend(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:append']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId'].values[':range:append'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdValuesRangeClear(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId'].values[':range:clear'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdValuesBatchClear(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId']['values:batchClear'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilter(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClearByDataFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId']['values:batchClearByDataFilter'].$post(args, options),
  )
}

export async function getV4SpreadsheetsSpreadsheetIdValuesBatchGet(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId']['values:batchGet'].$get(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilter(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGetByDataFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId']['values:batchGetByDataFilter'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdValuesBatchUpdate(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId']['values:batchUpdate'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilter(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdateByDataFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId']['values:batchUpdateByDataFilter'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdBatchUpdate(
  args: InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId:batchUpdate'].$post(args, options),
  )
}

export async function postV4SpreadsheetsSpreadsheetIdGetByDataFilter(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.spreadsheets[':spreadsheetId:getByDataFilter'].$post(args, options),
  )
}
