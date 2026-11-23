import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActions(options?: ClientRequestOptions) {
  return await parseResponse(client.actions.$get(undefined, options))
}

export async function postActions(
  args: InferRequestType<typeof client.actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.$post(args, options))
}

export async function putActionsAction(
  args: InferRequestType<(typeof client.actions)[':action']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':action'].$put(args, options))
}

export async function deleteActionsAction(
  args: InferRequestType<(typeof client.actions)[':action']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':action'].$delete(args, options))
}

export async function getAddresses(options?: ClientRequestOptions) {
  return await parseResponse(client.addresses.$get(undefined, options))
}

export async function postAddresses(
  args: InferRequestType<typeof client.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$post(args, options))
}

export async function deleteAddressesAddress(
  args: InferRequestType<(typeof client.addresses)[':address']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].$delete(args, options))
}

export async function getAddressesAddressKeys(
  args: InferRequestType<(typeof client.addresses)[':address']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].keys.$get(args, options))
}

export async function postAddressesAddressKeys(
  args: InferRequestType<(typeof client.addresses)[':address']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].keys.$post(args, options))
}

export async function getAddressesAddressKeysKey(
  args: InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].keys[':key'].$get(args, options))
}

export async function putAddressesAddressKeysKey(
  args: InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].keys[':key'].$put(args, options))
}

export async function deleteAddressesAddressKeysKey(
  args: InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].keys[':key'].$delete(args, options))
}

export async function getDaemonsDaemonToken(
  args: InferRequestType<(typeof client.daemons)[':daemon']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.daemons[':daemon'].token.$get(args, options))
}

export async function getDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.domains.$get(undefined, options))
}

export async function postDomains(
  args: InferRequestType<typeof client.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$post(args, options))
}

export async function getDomainsVerifyDomain(
  args: InferRequestType<(typeof client.domains.verify)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.verify[':domain'].$get(args, options))
}

export async function postDomainsVerifyDomain(
  args: InferRequestType<(typeof client.domains.verify)[':domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.verify[':domain'].$post(args, options))
}

export async function deleteDomainsDomain(
  args: InferRequestType<(typeof client.domains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain'].$delete(args, options))
}

export async function getInputs(
  args: InferRequestType<typeof client.inputs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inputs.$get(args, options))
}

export async function getIntegrations(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.$get(undefined, options))
}

export async function deleteIntegrationsIntegration(
  args: InferRequestType<(typeof client.integrations)[':integration']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':integration'].$delete(args, options))
}

export async function postSend(
  args: InferRequestType<typeof client.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.send.$post(args, options))
}

export async function getTriggers(options?: ClientRequestOptions) {
  return await parseResponse(client.triggers.$get(undefined, options))
}

export async function postTriggers(
  args: InferRequestType<typeof client.triggers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.triggers.$post(args, options))
}

export async function putTriggersTrigger(
  args: InferRequestType<(typeof client.triggers)[':trigger']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.triggers[':trigger'].$put(args, options))
}

export async function deleteTriggersTrigger(
  args: InferRequestType<(typeof client.triggers)[':trigger']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.triggers[':trigger'].$delete(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function putUser(
  args: InferRequestType<typeof client.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$put(args, options))
}

export async function getVerifications(options?: ClientRequestOptions) {
  return await parseResponse(client.verifications.$get(undefined, options))
}

export async function postVerifications(
  args: InferRequestType<typeof client.verifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.$post(args, options))
}

export async function postVerificationsVerificationVerify(
  args: InferRequestType<(typeof client.verifications)[':verification']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications[':verification'].verify.$post(args, options))
}

export async function getWorkflows(options?: ClientRequestOptions) {
  return await parseResponse(client.workflows.$get(undefined, options))
}

export async function postWorkflows(
  args: InferRequestType<typeof client.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$post(args, options))
}

export async function postWorkflowsSet(
  args: InferRequestType<typeof client.workflows.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.set.$post(args, options))
}

export async function putWorkflowsWorkflow(
  args: InferRequestType<(typeof client.workflows)[':workflow']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow'].$put(args, options))
}

export async function deleteWorkflowsWorkflow(
  args: InferRequestType<(typeof client.workflows)[':workflow']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow'].$delete(args, options))
}

export async function getWorkspaces(options?: ClientRequestOptions) {
  return await parseResponse(client.workspaces.$get(undefined, options))
}

export async function postWorkspaces(
  args: InferRequestType<typeof client.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.$post(args, options))
}
