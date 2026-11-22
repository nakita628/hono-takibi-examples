import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1alpha1DomainCheckMigrationPermission(
  args: InferRequestType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1alpha1[':domain:checkMigrationPermission'].$post(args, options),
  )
}

export async function postV1alpha1DomainDisableMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':domain:disableMigration'].$post(args, options))
}

export async function postV1alpha1DomainDomainJoinMachine(
  args: InferRequestType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':domain:domainJoinMachine'].$post(args, options))
}

export async function postV1alpha1DomainEnableMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':domain:enableMigration'].$post(args, options))
}

export async function postV1alpha1DomainExtendSchema(
  args: InferRequestType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':domain:extendSchema'].$post(args, options))
}

export async function getV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$get(args, options))
}

export async function deleteV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$delete(args, options))
}

export async function patchV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$patch(args, options))
}

export async function getV1alpha1NameLdapssettings(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].ldapssettings.$get(args, options))
}

export async function patchV1alpha1NameLdapssettings(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].ldapssettings.$patch(args, options))
}

export async function getV1alpha1NameLocations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].locations.$get(args, options))
}

export async function getV1alpha1NameOperations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].operations.$get(args, options))
}

export async function postV1alpha1NameAttachTrust(
  args: InferRequestType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:attachTrust'].$post(args, options))
}

export async function postV1alpha1NameCancel(
  args: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:cancel'].$post(args, options))
}

export async function postV1alpha1NameDetachTrust(
  args: InferRequestType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:detachTrust'].$post(args, options))
}

export async function postV1alpha1NameReconfigureTrust(
  args: InferRequestType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:reconfigureTrust'].$post(args, options))
}

export async function postV1alpha1NameResetAdminPassword(
  args: InferRequestType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:resetAdminPassword'].$post(args, options))
}

export async function postV1alpha1NameRestore(
  args: InferRequestType<(typeof client.v1alpha1)[':name:restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:restore'].$post(args, options))
}

export async function postV1alpha1NameValidateTrust(
  args: InferRequestType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:validateTrust'].$post(args, options))
}

export async function getV1alpha1ParentBackups(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].backups.$get(args, options))
}

export async function postV1alpha1ParentBackups(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].backups.$post(args, options))
}

export async function getV1alpha1ParentDomains(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].domains.$get(args, options))
}

export async function postV1alpha1ParentDomains(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].domains.$post(args, options))
}

export async function getV1alpha1ParentPeerings(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].peerings.$get(args, options))
}

export async function postV1alpha1ParentPeerings(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].peerings.$post(args, options))
}

export async function getV1alpha1ParentSqlIntegrations(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].sqlIntegrations.$get(args, options))
}

export async function getV1alpha1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1alpha1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1alpha1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':resource:testIamPermissions'].$post(args, options))
}
