import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmLists202609(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].$get(args, options))
}

export async function postCrmLists202609(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].$post(args, options))
}

export async function getCrmLists202609Folders(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].folders.$get(args, options))
}

export async function postCrmLists202609Folders(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].folders.$post(args, options))
}

export async function putCrmLists202609FoldersMoveList(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['move-list']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].folders['move-list'].$put(args, options))
}

export async function deleteCrmLists202609FoldersFolderId(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'].folders[':folderId'].$delete(args, options),
  )
}

export async function putCrmLists202609FoldersFolderIdMoveNewParentFolderId(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['folders'][':folderId']['move'][':newParentFolderId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'].folders[':folderId'].move[':newParentFolderId'].$put(args, options),
  )
}

export async function putCrmLists202609FoldersFolderIdRename(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['folders'][':folderId']['rename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'].folders[':folderId'].rename.$put(args, options),
  )
}

export async function getCrmLists202609Idmapping(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].idmapping.$get(args, options))
}

export async function postCrmLists202609Idmapping(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].idmapping.$post(args, options))
}

export async function getCrmLists202609ObjectTypeIdObjectTypeIdNameListName(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09']['object-type-id'][':objectTypeId'].name[':listName'].$get(
      args,
      options,
    ),
  )
}

export async function postCrmLists202609RecordsMembershipsBatchRead(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['records']['memberships']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'].records.memberships.batch.read.$post(args, options),
  )
}

export async function getCrmLists202609RecordsObjectTypeIdRecordIdMemberships(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'].records[':objectTypeId'][':recordId'].memberships.$get(
      args,
      options,
    ),
  )
}

export async function postCrmLists202609Search(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'].search.$post(args, options))
}

export async function getCrmLists202609ListId(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'][':listId'].$get(args, options))
}

export async function deleteCrmLists202609ListId(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'][':listId'].$delete(args, options))
}

export async function getCrmLists202609ListIdMemberships(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'][':listId'].memberships.$get(args, options))
}

export async function deleteCrmLists202609ListIdMemberships(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId'].memberships.$delete(args, options),
  )
}

export async function putCrmLists202609ListIdMembershipsAdd(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId'].memberships.add.$put(args, options),
  )
}

export async function putCrmLists202609ListIdMembershipsAddAndRemove(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-and-remove']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId'].memberships['add-and-remove'].$put(args, options),
  )
}

export async function putCrmLists202609ListIdMembershipsAddFromSourceListId(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-from'][':sourceListId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId'].memberships['add-from'][':sourceListId'].$put(
      args,
      options,
    ),
  )
}

export async function getCrmLists202609ListIdMembershipsJoinOrder(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId'].memberships['join-order'].$get(args, options),
  )
}

export async function putCrmLists202609ListIdMembershipsRemove(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['remove']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId'].memberships.remove.$put(args, options),
  )
}

export async function putCrmLists202609ListIdRestore(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.lists['2026-09'][':listId'].restore.$put(args, options))
}

export async function getCrmLists202609ListIdScheduleConversion(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId']['schedule-conversion'].$get(args, options),
  )
}

export async function putCrmLists202609ListIdScheduleConversion(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId']['schedule-conversion'].$put(args, options),
  )
}

export async function deleteCrmLists202609ListIdScheduleConversion(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId']['schedule-conversion'].$delete(args, options),
  )
}

export async function getCrmLists202609ListIdSizeAndEditsHistoryBetween(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId']['size-and-edits-history'].between.$get(args, options),
  )
}

export async function putCrmLists202609ListIdUpdateListFilters(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['update-list-filters']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId']['update-list-filters'].$put(args, options),
  )
}

export async function putCrmLists202609ListIdUpdateListName(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.lists['2026-09'][':listId']['update-list-name'].$put(args, options),
  )
}
