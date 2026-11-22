import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1JobsJobId(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs[':JobId'].$get(args, options))
}

export async function deleteV1JobsJobId(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs[':JobId'].$delete(args, options))
}

export async function patchV1JobsJobId(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs[':JobId'].$patch(args, options))
}

export async function getV1DataSets(
  args: InferRequestType<(typeof client.v1)['data-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sets'].$get(args, options))
}

export async function postV1DataSets(
  args: InferRequestType<(typeof client.v1)['data-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sets'].$post(args, options))
}

export async function getV1EventActions(
  args: InferRequestType<(typeof client.v1)['event-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-actions'].$get(args, options))
}

export async function postV1EventActions(
  args: InferRequestType<(typeof client.v1)['event-actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-actions'].$post(args, options))
}

export async function getV1Jobs(
  args: InferRequestType<typeof client.v1.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.$get(args, options))
}

export async function postV1Jobs(
  args: InferRequestType<typeof client.v1.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.$post(args, options))
}

export async function getV1DataSetsDataSetIdRevisions(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sets'][':DataSetId'].revisions.$get(args, options))
}

export async function postV1DataSetsDataSetIdRevisions(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sets'][':DataSetId'].revisions.$post(args, options))
}

export async function getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1DataSetsDataSetId(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sets'][':DataSetId'].$get(args, options))
}

export async function deleteV1DataSetsDataSetId(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sets'][':DataSetId'].$delete(args, options))
}

export async function patchV1DataSetsDataSetId(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['data-sets'][':DataSetId'].$patch(args, options))
}

export async function getV1EventActionsEventActionId(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-actions'][':EventActionId'].$get(args, options))
}

export async function deleteV1EventActionsEventActionId(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-actions'][':EventActionId'].$delete(args, options))
}

export async function patchV1EventActionsEventActionId(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-actions'][':EventActionId'].$patch(args, options))
}

export async function getV1DataSetsDataSetIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$get(args, options),
  )
}

export async function deleteV1DataSetsDataSetIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$delete(args, options),
  )
}

export async function patchV1DataSetsDataSetIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$patch(args, options),
  )
}

export async function getV1DataSetsDataSetIdRevisionsRevisionIdAssets(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets.$get(args, options),
  )
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function postV1DataSetsDataSetIdRevisionsRevisionIdRevoke(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].revoke.$post(args, options),
  )
}

export async function postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionId(
  args: InferRequestType<
    (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id'
    ].$post(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}
