import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1LocationRegistrationsRetrieveImportableDomains(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveImportableDomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':location']['registrations:retrieveImportableDomains'].$get(args, options),
  )
}

export async function getV1beta1LocationRegistrationsRetrieveRegisterParameters(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveRegisterParameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':location']['registrations:retrieveRegisterParameters'].$get(args, options),
  )
}

export async function getV1beta1LocationRegistrationsRetrieveTransferParameters(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:retrieveTransferParameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':location']['registrations:retrieveTransferParameters'].$get(args, options),
  )
}

export async function getV1beta1LocationRegistrationsSearchDomains(
  args: InferRequestType<
    (typeof client.v1beta1)[':location']['registrations:searchDomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':location']['registrations:searchDomains'].$get(args, options),
  )
}

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
}

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NameExport(
  args: InferRequestType<(typeof client.v1beta1)[':name:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:export'].$post(args, options))
}

export async function getV1beta1ParentRegistrations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].registrations.$get(args, options))
}

export async function postV1beta1ParentRegistrationsImport(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['registrations:import'].$post(args, options))
}

export async function postV1beta1ParentRegistrationsRegister(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations:register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['registrations:register'].$post(args, options),
  )
}

export async function postV1beta1ParentRegistrationsTransfer(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['registrations:transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['registrations:transfer'].$post(args, options),
  )
}

export async function postV1beta1RegistrationConfigureContactSettings(
  args: InferRequestType<
    (typeof client.v1beta1)[':registration:configureContactSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':registration:configureContactSettings'].$post(args, options),
  )
}

export async function postV1beta1RegistrationConfigureDnsSettings(
  args: InferRequestType<(typeof client.v1beta1)[':registration:configureDnsSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':registration:configureDnsSettings'].$post(args, options),
  )
}

export async function postV1beta1RegistrationConfigureManagementSettings(
  args: InferRequestType<
    (typeof client.v1beta1)[':registration:configureManagementSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':registration:configureManagementSettings'].$post(args, options),
  )
}

export async function postV1beta1RegistrationResetAuthorizationCode(
  args: InferRequestType<(typeof client.v1beta1)[':registration:resetAuthorizationCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':registration:resetAuthorizationCode'].$post(args, options),
  )
}

export async function getV1beta1RegistrationRetrieveAuthorizationCode(
  args: InferRequestType<
    (typeof client.v1beta1)[':registration:retrieveAuthorizationCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':registration:retrieveAuthorizationCode'].$get(args, options),
  )
}

export async function getV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}
