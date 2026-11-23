import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmActivities(
  args: InferRequestType<typeof client.crm.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.activities.$get(args, options))
}

export async function postCrmActivities(
  args: InferRequestType<typeof client.crm.activities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.activities.$post(args, options))
}

export async function getCrmActivitiesId(
  args: InferRequestType<(typeof client.crm.activities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.activities[':id'].$get(args, options))
}

export async function deleteCrmActivitiesId(
  args: InferRequestType<(typeof client.crm.activities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.activities[':id'].$delete(args, options))
}

export async function patchCrmActivitiesId(
  args: InferRequestType<(typeof client.crm.activities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.activities[':id'].$patch(args, options))
}

export async function getCrmCompanies(
  args: InferRequestType<typeof client.crm.companies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.companies.$get(args, options))
}

export async function postCrmCompanies(
  args: InferRequestType<typeof client.crm.companies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.companies.$post(args, options))
}

export async function getCrmCompaniesId(
  args: InferRequestType<(typeof client.crm.companies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.companies[':id'].$get(args, options))
}

export async function deleteCrmCompaniesId(
  args: InferRequestType<(typeof client.crm.companies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.companies[':id'].$delete(args, options))
}

export async function patchCrmCompaniesId(
  args: InferRequestType<(typeof client.crm.companies)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.companies[':id'].$patch(args, options))
}

export async function getCrmContacts(
  args: InferRequestType<typeof client.crm.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.contacts.$get(args, options))
}

export async function postCrmContacts(
  args: InferRequestType<typeof client.crm.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.contacts.$post(args, options))
}

export async function getCrmContactsId(
  args: InferRequestType<(typeof client.crm.contacts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.contacts[':id'].$get(args, options))
}

export async function deleteCrmContactsId(
  args: InferRequestType<(typeof client.crm.contacts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.contacts[':id'].$delete(args, options))
}

export async function patchCrmContactsId(
  args: InferRequestType<(typeof client.crm.contacts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.contacts[':id'].$patch(args, options))
}

export async function getCrmLeads(
  args: InferRequestType<typeof client.crm.leads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.leads.$get(args, options))
}

export async function postCrmLeads(
  args: InferRequestType<typeof client.crm.leads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.leads.$post(args, options))
}

export async function getCrmLeadsId(
  args: InferRequestType<(typeof client.crm.leads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.leads[':id'].$get(args, options))
}

export async function deleteCrmLeadsId(
  args: InferRequestType<(typeof client.crm.leads)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.leads[':id'].$delete(args, options))
}

export async function patchCrmLeadsId(
  args: InferRequestType<(typeof client.crm.leads)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.leads[':id'].$patch(args, options))
}

export async function getCrmNotes(
  args: InferRequestType<typeof client.crm.notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes.$get(args, options))
}

export async function postCrmNotes(
  args: InferRequestType<typeof client.crm.notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes.$post(args, options))
}

export async function getCrmNotesId(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes[':id'].$get(args, options))
}

export async function deleteCrmNotesId(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes[':id'].$delete(args, options))
}

export async function patchCrmNotesId(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes[':id'].$patch(args, options))
}

export async function getCrmOpportunities(
  args: InferRequestType<typeof client.crm.opportunities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.opportunities.$get(args, options))
}

export async function postCrmOpportunities(
  args: InferRequestType<typeof client.crm.opportunities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.opportunities.$post(args, options))
}

export async function getCrmOpportunitiesId(
  args: InferRequestType<(typeof client.crm.opportunities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.opportunities[':id'].$get(args, options))
}

export async function deleteCrmOpportunitiesId(
  args: InferRequestType<(typeof client.crm.opportunities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.opportunities[':id'].$delete(args, options))
}

export async function patchCrmOpportunitiesId(
  args: InferRequestType<(typeof client.crm.opportunities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.opportunities[':id'].$patch(args, options))
}

export async function getCrmPipelines(
  args: InferRequestType<typeof client.crm.pipelines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipelines.$get(args, options))
}

export async function postCrmPipelines(
  args: InferRequestType<typeof client.crm.pipelines.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipelines.$post(args, options))
}

export async function getCrmPipelinesId(
  args: InferRequestType<(typeof client.crm.pipelines)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipelines[':id'].$get(args, options))
}

export async function deleteCrmPipelinesId(
  args: InferRequestType<(typeof client.crm.pipelines)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipelines[':id'].$delete(args, options))
}

export async function patchCrmPipelinesId(
  args: InferRequestType<(typeof client.crm.pipelines)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipelines[':id'].$patch(args, options))
}

export async function getCrmUsers(
  args: InferRequestType<typeof client.crm.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.users.$get(args, options))
}

export async function postCrmUsers(
  args: InferRequestType<typeof client.crm.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.users.$post(args, options))
}

export async function getCrmUsersId(
  args: InferRequestType<(typeof client.crm.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.users[':id'].$get(args, options))
}

export async function deleteCrmUsersId(
  args: InferRequestType<(typeof client.crm.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.users[':id'].$delete(args, options))
}

export async function patchCrmUsersId(
  args: InferRequestType<(typeof client.crm.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.users[':id'].$patch(args, options))
}
