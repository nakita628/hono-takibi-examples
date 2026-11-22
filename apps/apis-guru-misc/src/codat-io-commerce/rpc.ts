import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-customers'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-disputes'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfo(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-info'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocations(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-locations'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrders(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-orders'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethods(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data[
      'commerce-paymentMethods'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-payments'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategories(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data[
      'commerce-productCategories'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProducts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-products'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-taxComponents'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data['commerce-transactions'].$get(
      args,
      options,
    ),
  )
}
