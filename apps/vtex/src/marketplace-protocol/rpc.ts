import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiCheckoutPubOrderFormsSimulation(
  args: InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub.orderForms.simulation.$post(args, options))
}

export async function postPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceId(
  args: InferRequestType<
    (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['categories']['marketplace'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['portal.vtexcommercestable.com.br'].api['mkp-category-mapper'].categories.marketplace[
      ':id'
    ].$post(args, options),
  )
}

export async function postPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegister(
  args: InferRequestType<
    (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['connector']['register']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['portal.vtexcommercestable.com.br'].api['mkp-category-mapper'].connector.register.$post(
      args,
      options,
    ),
  )
}

export async function postAccountNameVtexcommercestableComBrApiOrderIntegrationOrders(
  args: InferRequestType<
    (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountName.vtexcommercestable.com.br'].api['order-integration'].orders.$post(
      args,
      options,
    ),
  )
}

export async function putAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatus(
  args: InferRequestType<
    (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountName.vtexcommercestable.com.br'].api['order-integration'].orders.status.$put(
      args,
      options,
    ),
  )
}

export async function postAccountNameEnvironmentComBrApiFulfillmentPvtOrders(
  args: InferRequestType<
    (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountName.{environment}.com.br'].api.fulfillment.pvt.orders.$post(args, options),
  )
}

export async function postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfill(
  args: InferRequestType<
    (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountName.{environment}.com.br'].api.fulfillment.pvt.orders[
      ':orderId'
    ].fulfill.$post(args, options),
  )
}

export async function postFulfillmentEndpointPvtOrderFormsSimulation(
  args: InferRequestType<
    (typeof client)[':fulfillmentEndpoint']['pvt']['orderForms']['simulation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':fulfillmentEndpoint'].pvt.orderForms.simulation.$post(args, options),
  )
}

export async function postFulfillmentEndpointPvtOrders(
  args: InferRequestType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':fulfillmentEndpoint'].pvt.orders.$post(args, options))
}

export async function postFulfillmentEndpointPvtOrdersOrderIdCancel(
  args: InferRequestType<
    (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':orderId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':fulfillmentEndpoint'].pvt.orders[':orderId'].cancel.$post(args, options),
  )
}

export async function postFulfillmentEndpointPvtOrdersSellerOrderIdFulfill(
  args: InferRequestType<
    (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':sellerOrderId']['fulfill']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':fulfillmentEndpoint'].pvt.orders[':sellerOrderId'].fulfill.$post(args, options),
  )
}

export async function postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancel(
  args: InferRequestType<
    (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoice(
  args: InferRequestType<
    (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice.$post(
      args,
      options,
    ),
  )
}

export async function postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumber(
  args: InferRequestType<
    (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice[
      ':invoiceNumber'
    ].$post(args, options),
  )
}

export async function postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTracking(
  args: InferRequestType<
    (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['tracking']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice[
      ':invoiceNumber'
    ].tracking.$post(args, options),
  )
}
