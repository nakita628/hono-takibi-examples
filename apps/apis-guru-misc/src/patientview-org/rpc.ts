import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuthLogin(
  args: InferRequestType<typeof client.auth.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.login.$post(args, options))
}

export async function deleteAuthLogoutToken(
  args: InferRequestType<(typeof client.auth.logout)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.logout[':token'].$delete(args, options))
}

export async function getAuthTokenBasicuserinformation(
  args: InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':token'].basicuserinformation.$get(args, options))
}

export async function getPatientUserIdBasic(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patient[':userId'].basic.$get(args, options))
}

export async function getPatientmanagementDiagnoses(options?: ClientRequestOptions) {
  return await parseResponse(client.patientmanagement.diagnoses.$get(undefined, options))
}

export async function getPatientmanagementLookuptypes(options?: ClientRequestOptions) {
  return await parseResponse(client.patientmanagement.lookuptypes.$get(undefined, options))
}

export async function postPatientmanagementValidate(
  args: InferRequestType<typeof client.patientmanagement.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patientmanagement.validate.$post(args, options))
}

export async function getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId(
  args: InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$get(
      args,
      options,
    ),
  )
}

export async function postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId(
  args: InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$post(
      args,
      options,
    ),
  )
}

export async function postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeries(
  args: InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patientmanagement[':userId'].group[':groupId'].identifier[
      ':identifierId'
    ].surgeries.$post(args, options),
  )
}

export async function getUserUserIdAvailableobservationheadings(
  args: InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userId'].availableobservationheadings.$get(args, options),
  )
}

export async function getUserUserIdObservations(
  args: InferRequestType<(typeof client.user)[':userId']['observations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].observations.$get(args, options))
}

export async function getUserUserIdObservationsCode(
  args: InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].observations[':code'].$get(args, options))
}

export async function getUserUserIdObservationsCodePatiententered(
  args: InferRequestType<
    (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userId'].observations[':code'].patiententered.$get(args, options),
  )
}

export async function getUserUserIdPatiententeredobservationheadings(
  args: InferRequestType<
    (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userId'].patiententeredobservationheadings.$get(args, options),
  )
}
