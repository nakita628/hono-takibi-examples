import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ContactGroups(
  args: InferRequestType<typeof client.v1.contactGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.contactGroups.$get(args, options))
}

export async function postV1ContactGroups(
  args: InferRequestType<typeof client.v1.contactGroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.contactGroups.$post(args, options))
}

export async function getV1ContactGroupsBatchGet(
  args: InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['contactGroups:batchGet'].$get(args, options))
}

export async function getV1OtherContacts(
  args: InferRequestType<typeof client.v1.otherContacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otherContacts.$get(args, options))
}

export async function getV1OtherContactsSearch(
  args: InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['otherContacts:search'].$get(args, options))
}

export async function postV1PeopleBatchCreateContacts(
  args: InferRequestType<(typeof client.v1)['people:batchCreateContacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:batchCreateContacts'].$post(args, options))
}

export async function postV1PeopleBatchDeleteContacts(
  args: InferRequestType<(typeof client.v1)['people:batchDeleteContacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:batchDeleteContacts'].$post(args, options))
}

export async function getV1PeopleBatchGet(
  args: InferRequestType<(typeof client.v1)['people:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:batchGet'].$get(args, options))
}

export async function postV1PeopleBatchUpdateContacts(
  args: InferRequestType<(typeof client.v1)['people:batchUpdateContacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:batchUpdateContacts'].$post(args, options))
}

export async function postV1PeopleCreateContact(
  args: InferRequestType<(typeof client.v1)['people:createContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:createContact'].$post(args, options))
}

export async function getV1PeopleListDirectoryPeople(
  args: InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:listDirectoryPeople'].$get(args, options))
}

export async function getV1PeopleSearchContacts(
  args: InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:searchContacts'].$get(args, options))
}

export async function getV1PeopleSearchDirectoryPeople(
  args: InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['people:searchDirectoryPeople'].$get(args, options))
}

export async function getV1ResourceName(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName'].$get(args, options))
}

export async function putV1ResourceName(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName'].$put(args, options))
}

export async function deleteV1ResourceName(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName'].$delete(args, options))
}

export async function getV1ResourceNameConnections(
  args: InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName'].connections.$get(args, options))
}

export async function postV1ResourceNameMembersModify(
  args: InferRequestType<(typeof client.v1)[':resourceName']['members:modify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName']['members:modify'].$post(args, options))
}

export async function postV1ResourceNameCopyOtherContactToMyContactsGroup(
  args: InferRequestType<
    (typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':resourceName:copyOtherContactToMyContactsGroup'].$post(args, options),
  )
}

export async function deleteV1ResourceNameDeleteContact(
  args: InferRequestType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName:deleteContact'].$delete(args, options))
}

export async function deleteV1ResourceNameDeleteContactPhoto(
  args: InferRequestType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName:deleteContactPhoto'].$delete(args, options))
}

export async function patchV1ResourceNameUpdateContact(
  args: InferRequestType<(typeof client.v1)[':resourceName:updateContact']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName:updateContact'].$patch(args, options))
}

export async function patchV1ResourceNameUpdateContactPhoto(
  args: InferRequestType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resourceName:updateContactPhoto'].$patch(args, options))
}
