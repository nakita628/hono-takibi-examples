import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBatchGetRecord(
  args: InferRequestType<typeof client.BatchGetRecord.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchGetRecord.$post(args, options))
}

export async function deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTime(
  args: InferRequestType<
    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString&EventTime'].$delete(
      args,
      options,
    ),
  )
}

export async function getFeatureGroupFeatureGroupNameRecordIdentifierValueAsString(
  args: InferRequestType<
    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString'].$get(args, options),
  )
}

export async function putFeatureGroupFeatureGroupName(
  args: InferRequestType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FeatureGroup[':FeatureGroupName'].$put(args, options))
}
