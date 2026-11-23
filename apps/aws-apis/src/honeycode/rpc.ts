import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postWorkbooksWorkbookIdTablesTableIdRowsBatchcreate(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].rows.batchcreate.$post(args, options),
  )
}

export async function postWorkbooksWorkbookIdTablesTableIdRowsBatchdelete(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].rows.batchdelete.$post(args, options),
  )
}

export async function postWorkbooksWorkbookIdTablesTableIdRowsBatchupdate(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].rows.batchupdate.$post(args, options),
  )
}

export async function postWorkbooksWorkbookIdTablesTableIdRowsBatchupsert(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].rows.batchupsert.$post(args, options),
  )
}

export async function getWorkbooksWorkbookIdTablesTableIdImportJobId(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].import[':jobId'].$get(args, options),
  )
}

export async function postScreendata(
  args: InferRequestType<typeof client.screendata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.screendata.$post(args, options))
}

export async function postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationId(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].apps[':appId'].screens[':screenId'].automations[
      ':automationId'
    ].$post(args, options),
  )
}

export async function getWorkbooksWorkbookIdTablesTableIdColumns(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].columns.$get(args, options),
  )
}

export async function postWorkbooksWorkbookIdTablesTableIdRowsList(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].rows.list.$post(args, options),
  )
}

export async function getWorkbooksWorkbookIdTables(
  args: InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workbooks[':workbookId'].tables.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postWorkbooksWorkbookIdTablesTableIdRowsQuery(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].rows.query.$post(args, options),
  )
}

export async function postWorkbooksWorkbookIdTablesTableIdImport(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workbooks[':workbookId'].tables[':tableId'].import.$post(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
