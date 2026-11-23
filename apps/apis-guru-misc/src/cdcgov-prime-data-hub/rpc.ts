import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postReports(
  args: InferRequestType<typeof client.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$post(args, options))
}

export async function getSettingsOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.organizations.$get(undefined, options))
}

export async function headSettingsOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.organizations.$head(undefined, options))
}

export async function getSettingsOrganizationsOrganizationName(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.organizations[':organizationName'].$get(args, options))
}

export async function putSettingsOrganizationsOrganizationName(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.organizations[':organizationName'].$put(args, options))
}

export async function deleteSettingsOrganizationsOrganizationName(
  args: InferRequestType<(typeof client.settings.organizations)[':organizationName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].$delete(args, options),
  )
}

export async function getSettingsOrganizationsOrganizationNameReceivers(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].receivers.$get(args, options),
  )
}

export async function getSettingsOrganizationsOrganizationNameReceiversReceiverName(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].receivers[':receiverName'].$get(
      args,
      options,
    ),
  )
}

export async function putSettingsOrganizationsOrganizationNameReceiversReceiverName(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].receivers[':receiverName'].$put(
      args,
      options,
    ),
  )
}

export async function deleteSettingsOrganizationsOrganizationNameReceiversReceiverName(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['receivers'][':receiverName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].receivers[':receiverName'].$delete(
      args,
      options,
    ),
  )
}

export async function getSettingsOrganizationsOrganizationNameSenders(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].senders.$get(args, options),
  )
}

export async function getSettingsOrganizationsOrganizationNameSendersSenderName(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].senders[':senderName'].$get(args, options),
  )
}

export async function putSettingsOrganizationsOrganizationNameSendersSenderName(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].senders[':senderName'].$put(args, options),
  )
}

export async function deleteSettingsOrganizationsOrganizationNameSendersSenderName(
  args: InferRequestType<
    (typeof client.settings.organizations)[':organizationName']['senders'][':senderName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.organizations[':organizationName'].senders[':senderName'].$delete(
      args,
      options,
    ),
  )
}
