import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1CompanyAnnouncementId(
  args: InferRequestType<(typeof client.api.v1.company.announcement)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.announcement[':id'].$get(args, options))
}

export async function postApiV1CompanyDeepsearchIsin(
  args: InferRequestType<typeof client.api.v1.company.deepsearch.isin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.deepsearch.isin.$post(args, options))
}

export async function getApiV1CompanyDeepsearchLeiNumber(
  args: InferRequestType<(typeof client.api.v1.company.deepsearch.lei)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.deepsearch.lei[':number'].$get(args, options))
}

export async function getApiV1CompanyDeepsearchNameCountryName(
  args: InferRequestType<
    (typeof client.api.v1.company.deepsearch.name)[':country'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.company.deepsearch.name[':country'][':name'].$get(args, options),
  )
}

export async function getApiV1CompanyDeepsearchNumberCountryNumber(
  args: InferRequestType<
    (typeof client.api.v1.company.deepsearch.number)[':country'][':number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.company.deepsearch.number[':country'][':number'].$get(args, options),
  )
}

export async function getApiV1CompanyMonitoringChangeTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.company.monitoring.changeTypes.$get(undefined, options))
}

export async function getApiV1CompanyMonitoringList(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.company.monitoring.list.$get(undefined, options))
}

export async function getApiV1CompanyMonitoringListId(
  args: InferRequestType<(typeof client.api.v1.company.monitoring.list)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.monitoring.list[':id'].$get(args, options))
}

export async function postApiV1CompanyMonitoringRegisterId(
  args: InferRequestType<(typeof client.api.v1.company.monitoring.register)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.monitoring.register[':id'].$post(args, options))
}

export async function postApiV1CompanyMonitoringUnregisterId(
  args: InferRequestType<(typeof client.api.v1.company.monitoring.unregister)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.company.monitoring.unregister[':id'].$post(args, options),
  )
}

export async function getApiV1CompanyNotificationList(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.company.notification.list.$get(undefined, options))
}

export async function getApiV1CompanyNotificationListId(
  args: InferRequestType<(typeof client.api.v1.company.notification.list)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.notification.list[':id'].$get(args, options))
}

export async function postApiV1CompanyNotificationRegisterId(
  args: InferRequestType<(typeof client.api.v1.company.notification.register)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.company.notification.register[':id'].$post(args, options),
  )
}

export async function postApiV1CompanyNotificationUnregisterId(
  args: InferRequestType<(typeof client.api.v1.company.notification.unregister)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.company.notification.unregister[':id'].$post(args, options),
  )
}

export async function getApiV1CompanySearchNameCountryName(
  args: InferRequestType<(typeof client.api.v1.company.search.name)[':country'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.company.search.name[':country'][':name'].$get(args, options),
  )
}

export async function getApiV1CompanySearchNumberCountryNumber(
  args: InferRequestType<
    (typeof client.api.v1.company.search.number)[':country'][':number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.company.search.number[':country'][':number'].$get(args, options),
  )
}

export async function postApiV1CompanySearchCountry(
  args: InferRequestType<(typeof client.api.v1.company.search)[':country']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company.search[':country'].$post(args, options))
}

export async function getApiV1CompanyIdAnnouncements(
  args: InferRequestType<(typeof client.api.v1.company)[':id']['announcements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company[':id'].announcements.$get(args, options))
}

export async function getApiV1CompanyIdSuperCountry(
  args: InferRequestType<(typeof client.api.v1.company)[':id']['super'][':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company[':id'].super[':country'].$get(args, options))
}

export async function getApiV1CompanyIdDataset(
  args: InferRequestType<(typeof client.api.v1.company)[':id'][':dataset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company[':id'][':dataset'].$get(args, options))
}

export async function getApiV1EinVerificationBasicCheck(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['basic-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['ein-verification']['basic-check'].$get(args, options))
}

export async function getApiV1EinVerificationComprehensiveCheck(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['comprehensive-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['ein-verification']['comprehensive-check'].$get(args, options),
  )
}

export async function getApiV1EinVerificationLookup(
  args: InferRequestType<(typeof client.api.v1)['ein-verification']['lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['ein-verification'].lookup.$get(args, options))
}

export async function postApiV1IbanVerificationCheckIban(
  args: InferRequestType<(typeof client.api.v1)['iban-verification']['check-iban']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['iban-verification']['check-iban'].$post(args, options))
}

export async function postApiV1IbanVerificationComprehensiveCheckIban(
  args: InferRequestType<
    (typeof client.api.v1)['iban-verification']['comprehensive-check-iban']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['iban-verification']['comprehensive-check-iban'].$post(args, options),
  )
}

export async function postApiV1NifVerificationBasicCheckCountry(
  args: InferRequestType<
    (typeof client.api.v1)['nif-verification']['basic-check'][':country']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['nif-verification']['basic-check'][':country'].$post(args, options),
  )
}

export async function postApiV1NifVerificationComprehensiveCheckCountry(
  args: InferRequestType<
    (typeof client.api.v1)['nif-verification']['comprehensive-check'][':country']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['nif-verification']['comprehensive-check'][':country'].$post(args, options),
  )
}

export async function getApiV1PepsanctionMonitorList(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.pepsanction.monitor.list.$get(undefined, options))
}

export async function postApiV1PepsanctionMonitorUnregisterId(
  args: InferRequestType<(typeof client.api.v1.pepsanction.monitor.unregister)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.pepsanction.monitor.unregister[':id'].$post(args, options),
  )
}

export async function postApiV1PepsanctionMonitorUpdateId(
  args: InferRequestType<(typeof client.api.v1.pepsanction.monitor.update)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.pepsanction.monitor.update[':id'].$post(args, options))
}

export async function postApiV1PepsanctionOrderTypeSearch(
  args: InferRequestType<(typeof client.api.v1.pepsanction.order)[':type'][':search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.pepsanction.order[':type'][':search'].$post(args, options),
  )
}

export async function getApiV1PepsanctionRetrieveId(
  args: InferRequestType<(typeof client.api.v1.pepsanction.retrieve)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.pepsanction.retrieve[':id'].$get(args, options))
}

export async function getApiV1ProductAvailabilitySkuSubjectId(
  args: InferRequestType<(typeof client.api.v1.product.availability)[':sku'][':subjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.product.availability[':sku'][':subjectId'].$get(args, options),
  )
}

export async function getApiV1ProductCatalogCountry(
  args: InferRequestType<(typeof client.api.v1.product.catalog)[':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product.catalog[':country'].$get(args, options))
}

export async function getApiV1ProductNotifierNotifierId(
  args: InferRequestType<(typeof client.api.v1.product.notifier)[':notifierId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product.notifier[':notifierId'].$get(args, options))
}

export async function postApiV1ProductNotifierOrderIdTypeUri(
  args: InferRequestType<
    (typeof client.api.v1.product.notifier)[':orderId'][':type'][':uri']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.product.notifier[':orderId'][':type'][':uri'].$post(args, options),
  )
}

export async function postApiV1ProductOrderConcierge(
  args: InferRequestType<typeof client.api.v1.product.order.concierge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product.order.concierge.$post(args, options))
}

export async function postApiV1ProductOrderUbo(
  args: InferRequestType<typeof client.api.v1.product.order.ubo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product.order.ubo.$post(args, options))
}

export async function postApiV1ProductOrderSkuOptionSubjectId(
  args: InferRequestType<
    (typeof client.api.v1.product.order)[':sku'][':option'][':subjectId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.product.order[':sku'][':option'][':subjectId'].$post(args, options),
  )
}

export async function postApiV1ProductOrderSkuSubjectId(
  args: InferRequestType<(typeof client.api.v1.product.order)[':sku'][':subjectId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product.order[':sku'][':subjectId'].$post(args, options))
}

export async function getApiV1ProductSearchSubjectId(
  args: InferRequestType<(typeof client.api.v1.product.search)[':subjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product.search[':subjectId'].$get(args, options))
}

export async function getApiV1ProductStatusOrderId(
  args: InferRequestType<(typeof client.api.v1.product.status)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product.status[':orderId'].$get(args, options))
}

export async function postApiV1ProductUpdateActionOrderId(
  args: InferRequestType<(typeof client.api.v1.product.update)[':action'][':orderId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.product.update[':action'][':orderId'].$post(args, options),
  )
}

export async function getApiV1ProductOrderId(
  args: InferRequestType<(typeof client.api.v1.product)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.product[':orderId'].$get(args, options))
}

export async function getApiV1SystemCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.countries.$get(undefined, options))
}

export async function getApiV1SystemHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.health.$get(undefined, options))
}

export async function getApiV1SystemPricelist(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.pricelist.$get(undefined, options))
}

export async function getApiV1TinVerificationBasicCheck(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['basic-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['tin-verification']['basic-check'].$get(args, options))
}

export async function getApiV1TinVerificationComprehensiveCheck(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['comprehensive-check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['tin-verification']['comprehensive-check'].$get(args, options),
  )
}

export async function getApiV1TinVerificationNameLookup(
  args: InferRequestType<(typeof client.api.v1)['tin-verification']['name-lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['tin-verification']['name-lookup'].$get(args, options))
}

export async function postApiV1VatVerificationBasicCheckCountry(
  args: InferRequestType<
    (typeof client.api.v1)['vat-verification']['basic-check'][':country']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['vat-verification']['basic-check'][':country'].$post(args, options),
  )
}

export async function postApiV1VatVerificationComprehensiveCheckCountry(
  args: InferRequestType<
    (typeof client.api.v1)['vat-verification']['comprehensive-check'][':country']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['vat-verification']['comprehensive-check'][':country'].$post(args, options),
  )
}

export async function postApiV1VatVerificationLeveltwoCheckCountry(
  args: InferRequestType<
    (typeof client.api.v1)['vat-verification']['leveltwo-check'][':country']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['vat-verification']['leveltwo-check'][':country'].$post(args, options),
  )
}

export async function postApiV1VatVerificationLookupCountry(
  args: InferRequestType<(typeof client.api.v1)['vat-verification']['lookup'][':country']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['vat-verification'].lookup[':country'].$post(args, options),
  )
}
