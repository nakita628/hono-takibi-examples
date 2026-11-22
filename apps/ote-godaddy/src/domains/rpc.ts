import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Domains(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.$get(args, options))
}

export async function getV1DomainsAgreements(
  args: InferRequestType<typeof client.v1.domains.agreements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.agreements.$get(args, options))
}

export async function getV1DomainsAvailable(
  args: InferRequestType<typeof client.v1.domains.available.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.available.$get(args, options))
}

export async function postV1DomainsAvailable(
  args: InferRequestType<typeof client.v1.domains.available.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.available.$post(args, options))
}

export async function postV1DomainsContactsValidate(
  args: InferRequestType<typeof client.v1.domains.contacts.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.contacts.validate.$post(args, options))
}

export async function postV1DomainsPurchase(
  args: InferRequestType<typeof client.v1.domains.purchase.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.purchase.$post(args, options))
}

export async function getV1DomainsPurchaseSchemaTld(
  args: InferRequestType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.purchase.schema[':tld'].$get(args, options))
}

export async function postV1DomainsPurchaseValidate(
  args: InferRequestType<typeof client.v1.domains.purchase.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.purchase.validate.$post(args, options))
}

export async function getV1DomainsSuggest(
  args: InferRequestType<typeof client.v1.domains.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.suggest.$get(args, options))
}

export async function getV1DomainsTlds(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.domains.tlds.$get(undefined, options))
}

export async function getV1DomainsDomain(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].$get(args, options))
}

export async function deleteV1DomainsDomain(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].$delete(args, options))
}

export async function patchV1DomainsDomain(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].$patch(args, options))
}

export async function patchV1DomainsDomainContacts(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].contacts.$patch(args, options))
}

export async function deleteV1DomainsDomainPrivacy(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].privacy.$delete(args, options))
}

export async function postV1DomainsDomainPrivacyPurchase(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].privacy.purchase.$post(args, options))
}

export async function putV1DomainsDomainRecords(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['records']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].records.$put(args, options))
}

export async function patchV1DomainsDomainRecords(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['records']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].records.$patch(args, options))
}

export async function putV1DomainsDomainRecordsType(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].records[':type'].$put(args, options))
}

export async function getV1DomainsDomainRecordsTypeName(
  args: InferRequestType<
    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domains[':domain'].records[':type'][':name'].$get(args, options),
  )
}

export async function putV1DomainsDomainRecordsTypeName(
  args: InferRequestType<
    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domains[':domain'].records[':type'][':name'].$put(args, options),
  )
}

export async function deleteV1DomainsDomainRecordsTypeName(
  args: InferRequestType<
    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domains[':domain'].records[':type'][':name'].$delete(args, options),
  )
}

export async function postV1DomainsDomainRenew(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['renew']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].renew.$post(args, options))
}

export async function postV1DomainsDomainTransfer(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain'].transfer.$post(args, options))
}

export async function postV1DomainsDomainVerifyRegistrantEmail(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domains[':domain'].verifyRegistrantEmail.$post(args, options),
  )
}

export async function getV2CustomersCustomerIdDomainsForwardsFqdn(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.forwards[':fqdn'].$get(args, options),
  )
}

export async function putV2CustomersCustomerIdDomainsForwardsFqdn(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.forwards[':fqdn'].$put(args, options),
  )
}

export async function postV2CustomersCustomerIdDomainsForwardsFqdn(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.forwards[':fqdn'].$post(args, options),
  )
}

export async function deleteV2CustomersCustomerIdDomainsForwardsFqdn(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.forwards[':fqdn'].$delete(args, options),
  )
}

export async function getV2CustomersCustomerIdDomainsNotifications(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.notifications.$get(args, options),
  )
}

export async function getV2CustomersCustomerIdDomainsNotificationsOptIn(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.notifications.optIn.$get(args, options),
  )
}

export async function putV2CustomersCustomerIdDomainsNotificationsOptIn(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.notifications.optIn.$put(args, options),
  )
}

export async function getV2CustomersCustomerIdDomainsNotificationsSchemasType(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.notifications.schemas[':type'].$get(args, options),
  )
}

export async function postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledge(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains.notifications[':notificationId'].acknowledge.$post(
      args,
      options,
    ),
  )
}

export async function getV2CustomersCustomerIdDomainsDomain(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains[':domain'].$get(args, options),
  )
}

export async function getV2CustomersCustomerIdDomainsDomainActions(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains[':domain'].actions.$get(args, options),
  )
}

export async function getV2CustomersCustomerIdDomainsDomainActionsType(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$get(args, options),
  )
}

export async function deleteV2CustomersCustomerIdDomainsDomainActionsType(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$delete(args, options),
  )
}

export async function postV2CustomersCustomerIdDomainsDomainRedeem(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains[':domain'].redeem.$post(args, options),
  )
}

export async function postV2CustomersCustomerIdDomainsDomainTransferOut(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].domains[':domain'].transferOut.$post(args, options),
  )
}

export async function getV2DomainsMaintenances(
  args: InferRequestType<typeof client.v2.domains.maintenances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains.maintenances.$get(args, options))
}

export async function getV2DomainsMaintenancesMaintenanceId(
  args: InferRequestType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains.maintenances[':maintenanceId'].$get(args, options))
}
