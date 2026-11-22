import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdminApiKeys(
  args: InferRequestType<(typeof client.admin)['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['api-keys'].$get(args, options))
}

export async function postAdminApiKeys(
  args: InferRequestType<(typeof client.admin)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['api-keys'].$post(args, options))
}

export async function getAdminApiKeysId(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['api-keys'][':id'].$get(args, options))
}

export async function postAdminApiKeysId(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['api-keys'][':id'].$post(args, options))
}

export async function deleteAdminApiKeysId(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['api-keys'][':id'].$delete(args, options))
}

export async function postAdminApiKeysIdRevoke(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['api-keys'][':id'].revoke.$post(args, options))
}

export async function postAdminApiKeysIdSalesChannels(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['api-keys'][':id']['sales-channels'].$post(args, options))
}

export async function getAdminCampaigns(
  args: InferRequestType<typeof client.admin.campaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.campaigns.$get(args, options))
}

export async function postAdminCampaigns(
  args: InferRequestType<typeof client.admin.campaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.campaigns.$post(args, options))
}

export async function getAdminCampaignsId(
  args: InferRequestType<(typeof client.admin.campaigns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.campaigns[':id'].$get(args, options))
}

export async function postAdminCampaignsId(
  args: InferRequestType<(typeof client.admin.campaigns)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.campaigns[':id'].$post(args, options))
}

export async function deleteAdminCampaignsId(
  args: InferRequestType<(typeof client.admin.campaigns)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.campaigns[':id'].$delete(args, options))
}

export async function postAdminCampaignsIdPromotions(
  args: InferRequestType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.campaigns[':id'].promotions.$post(args, options))
}

export async function getAdminClaims(
  args: InferRequestType<typeof client.admin.claims.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims.$get(args, options))
}

export async function postAdminClaims(
  args: InferRequestType<typeof client.admin.claims.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims.$post(args, options))
}

export async function getAdminClaimsId(
  args: InferRequestType<(typeof client.admin.claims)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims[':id'].$get(args, options))
}

export async function postAdminClaimsIdCancel(
  args: InferRequestType<(typeof client.admin.claims)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims[':id'].cancel.$post(args, options))
}

export async function postAdminClaimsIdClaimItems(
  args: InferRequestType<(typeof client.admin.claims)[':id']['claim-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims[':id']['claim-items'].$post(args, options))
}

export async function postAdminClaimsIdClaimItemsActionId(
  args: InferRequestType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id']['claim-items'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminClaimsIdClaimItemsActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id']['claim-items'][':action_id'].$delete(args, options),
  )
}

export async function postAdminClaimsIdInboundItems(
  args: InferRequestType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims[':id'].inbound.items.$post(args, options))
}

export async function postAdminClaimsIdInboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].inbound.items[':action_id'].$post(args, options),
  )
}

export async function deleteAdminClaimsIdInboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].inbound.items[':action_id'].$delete(args, options),
  )
}

export async function postAdminClaimsIdInboundShippingMethod(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].inbound['shipping-method'].$post(args, options),
  )
}

export async function postAdminClaimsIdInboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].inbound['shipping-method'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminClaimsIdInboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].inbound['shipping-method'][':action_id'].$delete(args, options),
  )
}

export async function postAdminClaimsIdOutboundItems(
  args: InferRequestType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims[':id'].outbound.items.$post(args, options))
}

export async function postAdminClaimsIdOutboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].outbound.items[':action_id'].$post(args, options),
  )
}

export async function deleteAdminClaimsIdOutboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].outbound.items[':action_id'].$delete(args, options),
  )
}

export async function postAdminClaimsIdOutboundShippingMethod(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].outbound['shipping-method'].$post(args, options),
  )
}

export async function postAdminClaimsIdOutboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].outbound['shipping-method'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminClaimsIdOutboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.claims[':id'].outbound['shipping-method'][':action_id'].$delete(args, options),
  )
}

export async function postAdminClaimsIdRequest(
  args: InferRequestType<(typeof client.admin.claims)[':id']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims[':id'].request.$post(args, options))
}

export async function deleteAdminClaimsIdRequest(
  args: InferRequestType<(typeof client.admin.claims)[':id']['request']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.claims[':id'].request.$delete(args, options))
}

export async function getAdminCollections(
  args: InferRequestType<typeof client.admin.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.collections.$get(args, options))
}

export async function postAdminCollections(
  args: InferRequestType<typeof client.admin.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.collections.$post(args, options))
}

export async function getAdminCollectionsId(
  args: InferRequestType<(typeof client.admin.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.collections[':id'].$get(args, options))
}

export async function postAdminCollectionsId(
  args: InferRequestType<(typeof client.admin.collections)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.collections[':id'].$post(args, options))
}

export async function deleteAdminCollectionsId(
  args: InferRequestType<(typeof client.admin.collections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.collections[':id'].$delete(args, options))
}

export async function postAdminCollectionsIdProducts(
  args: InferRequestType<(typeof client.admin.collections)[':id']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.collections[':id'].products.$post(args, options))
}

export async function getAdminCurrencies(
  args: InferRequestType<typeof client.admin.currencies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.currencies.$get(args, options))
}

export async function getAdminCurrenciesCode(
  args: InferRequestType<(typeof client.admin.currencies)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.currencies[':code'].$get(args, options))
}

export async function getAdminCustomerGroups(
  args: InferRequestType<(typeof client.admin)['customer-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['customer-groups'].$get(args, options))
}

export async function postAdminCustomerGroups(
  args: InferRequestType<(typeof client.admin)['customer-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['customer-groups'].$post(args, options))
}

export async function getAdminCustomerGroupsId(
  args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['customer-groups'][':id'].$get(args, options))
}

export async function postAdminCustomerGroupsId(
  args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['customer-groups'][':id'].$post(args, options))
}

export async function deleteAdminCustomerGroupsId(
  args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['customer-groups'][':id'].$delete(args, options))
}

export async function postAdminCustomerGroupsIdCustomers(
  args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['customer-groups'][':id'].customers.$post(args, options))
}

export async function getAdminCustomers(
  args: InferRequestType<typeof client.admin.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers.$get(args, options))
}

export async function postAdminCustomers(
  args: InferRequestType<typeof client.admin.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers.$post(args, options))
}

export async function postAdminCustomersExport(
  args: InferRequestType<typeof client.admin.customers.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers.export.$post(args, options))
}

export async function getAdminCustomersId(
  args: InferRequestType<(typeof client.admin.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers[':id'].$get(args, options))
}

export async function postAdminCustomersId(
  args: InferRequestType<(typeof client.admin.customers)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers[':id'].$post(args, options))
}

export async function deleteAdminCustomersId(
  args: InferRequestType<(typeof client.admin.customers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers[':id'].$delete(args, options))
}

export async function getAdminCustomersIdAddresses(
  args: InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers[':id'].addresses.$get(args, options))
}

export async function postAdminCustomersIdAddresses(
  args: InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers[':id'].addresses.$post(args, options))
}

export async function getAdminCustomersIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.customers[':id'].addresses[':address_id'].$get(args, options),
  )
}

export async function postAdminCustomersIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.customers[':id'].addresses[':address_id'].$post(args, options),
  )
}

export async function deleteAdminCustomersIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.customers[':id'].addresses[':address_id'].$delete(args, options),
  )
}

export async function postAdminCustomersIdCustomerGroups(
  args: InferRequestType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.customers[':id']['customer-groups'].$post(args, options))
}

export async function getAdminDraftOrders(
  args: InferRequestType<(typeof client.admin)['draft-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'].$get(args, options))
}

export async function postAdminDraftOrders(
  args: InferRequestType<(typeof client.admin)['draft-orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'].$post(args, options))
}

export async function getAdminDraftOrdersId(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].$get(args, options))
}

export async function postAdminDraftOrdersId(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].$post(args, options))
}

export async function deleteAdminDraftOrdersId(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].$delete(args, options))
}

export async function postAdminDraftOrdersIdConvertToOrder(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id']['convert-to-order'].$post(args, options),
  )
}

export async function postAdminDraftOrdersIdEdit(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].edit.$post(args, options))
}

export async function deleteAdminDraftOrdersIdEdit(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].edit.$delete(args, options))
}

export async function postAdminDraftOrdersIdEditConfirm(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].edit.confirm.$post(args, options))
}

export async function postAdminDraftOrdersIdEditItems(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].edit.items.$post(args, options))
}

export async function postAdminDraftOrdersIdEditItemsItemItemId(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit.items.item[':item_id'].$post(args, options),
  )
}

export async function postAdminDraftOrdersIdEditItemsActionId(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit.items[':action_id'].$post(args, options),
  )
}

export async function deleteAdminDraftOrdersIdEditItemsActionId(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit.items[':action_id'].$delete(args, options),
  )
}

export async function postAdminDraftOrdersIdEditPromotions(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit.promotions.$post(args, options),
  )
}

export async function deleteAdminDraftOrdersIdEditPromotions(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit.promotions.$delete(args, options),
  )
}

export async function postAdminDraftOrdersIdEditRequest(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['draft-orders'][':id'].edit.request.$post(args, options))
}

export async function postAdminDraftOrdersIdEditShippingMethods(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit['shipping-methods'].$post(args, options),
  )
}

export async function postAdminDraftOrdersIdEditShippingMethodsMethodMethodId(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit['shipping-methods'].method[':method_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodId(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit['shipping-methods'].method[':method_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postAdminDraftOrdersIdEditShippingMethodsActionId(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit['shipping-methods'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminDraftOrdersIdEditShippingMethodsActionId(
  args: InferRequestType<
    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['draft-orders'][':id'].edit['shipping-methods'][':action_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminExchanges(
  args: InferRequestType<typeof client.admin.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges.$get(args, options))
}

export async function postAdminExchanges(
  args: InferRequestType<typeof client.admin.exchanges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges.$post(args, options))
}

export async function getAdminExchangesId(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges[':id'].$get(args, options))
}

export async function postAdminExchangesIdCancel(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges[':id'].cancel.$post(args, options))
}

export async function postAdminExchangesIdInboundItems(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges[':id'].inbound.items.$post(args, options))
}

export async function postAdminExchangesIdInboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].inbound.items[':action_id'].$post(args, options),
  )
}

export async function deleteAdminExchangesIdInboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].inbound.items[':action_id'].$delete(args, options),
  )
}

export async function postAdminExchangesIdInboundShippingMethod(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].inbound['shipping-method'].$post(args, options),
  )
}

export async function postAdminExchangesIdInboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].inbound['shipping-method'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminExchangesIdInboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].inbound['shipping-method'][':action_id'].$delete(args, options),
  )
}

export async function postAdminExchangesIdOutboundItems(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges[':id'].outbound.items.$post(args, options))
}

export async function postAdminExchangesIdOutboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].outbound.items[':action_id'].$post(args, options),
  )
}

export async function deleteAdminExchangesIdOutboundItemsActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].outbound.items[':action_id'].$delete(args, options),
  )
}

export async function postAdminExchangesIdOutboundShippingMethod(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].outbound['shipping-method'].$post(args, options),
  )
}

export async function postAdminExchangesIdOutboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].outbound['shipping-method'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminExchangesIdOutboundShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.exchanges[':id'].outbound['shipping-method'][':action_id'].$delete(args, options),
  )
}

export async function postAdminExchangesIdRequest(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges[':id'].request.$post(args, options))
}

export async function deleteAdminExchangesIdRequest(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.exchanges[':id'].request.$delete(args, options))
}

export async function getAdminFeatureFlags(options?: ClientRequestOptions) {
  return await parseResponse(client.admin['feature-flags'].$get(undefined, options))
}

export async function getAdminFulfillmentProviders(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['fulfillment-providers'].$get(args, options))
}

export async function getAdminFulfillmentProvidersIdOptions(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['fulfillment-providers'][':id'].options.$get(args, options),
  )
}

export async function deleteAdminFulfillmentSetsId(
  args: InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['fulfillment-sets'][':id'].$delete(args, options))
}

export async function postAdminFulfillmentSetsIdServiceZones(
  args: InferRequestType<
    (typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['fulfillment-sets'][':id']['service-zones'].$post(args, options),
  )
}

export async function getAdminFulfillmentSetsIdServiceZonesZoneId(
  args: InferRequestType<
    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$get(args, options),
  )
}

export async function postAdminFulfillmentSetsIdServiceZonesZoneId(
  args: InferRequestType<
    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$post(args, options),
  )
}

export async function deleteAdminFulfillmentSetsIdServiceZonesZoneId(
  args: InferRequestType<
    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$delete(args, options),
  )
}

export async function postAdminFulfillments(
  args: InferRequestType<typeof client.admin.fulfillments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.fulfillments.$post(args, options))
}

export async function postAdminFulfillmentsIdCancel(
  args: InferRequestType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.fulfillments[':id'].cancel.$post(args, options))
}

export async function postAdminFulfillmentsIdShipment(
  args: InferRequestType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.fulfillments[':id'].shipment.$post(args, options))
}

export async function getAdminGiftCards(
  args: InferRequestType<(typeof client.admin)['gift-cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['gift-cards'].$get(args, options))
}

export async function postAdminGiftCards(
  args: InferRequestType<(typeof client.admin)['gift-cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['gift-cards'].$post(args, options))
}

export async function getAdminGiftCardsId(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['gift-cards'][':id'].$get(args, options))
}

export async function postAdminGiftCardsId(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['gift-cards'][':id'].$post(args, options))
}

export async function getAdminGiftCardsIdOrders(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['gift-cards'][':id'].orders.$get(args, options))
}

export async function getAdminIndexDetails(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.index.details.$get(undefined, options))
}

export async function postAdminIndexSync(
  args: InferRequestType<typeof client.admin.index.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.index.sync.$post(args, options))
}

export async function getAdminInventoryItems(
  args: InferRequestType<(typeof client.admin)['inventory-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['inventory-items'].$get(args, options))
}

export async function postAdminInventoryItems(
  args: InferRequestType<(typeof client.admin)['inventory-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['inventory-items'].$post(args, options))
}

export async function postAdminInventoryItemsExport(
  args: InferRequestType<(typeof client.admin)['inventory-items']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['inventory-items'].export.$post(args, options))
}

export async function postAdminInventoryItemsLocationLevelsBatch(
  args: InferRequestType<
    (typeof client.admin)['inventory-items']['location-levels']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['inventory-items']['location-levels'].batch.$post(args, options),
  )
}

export async function getAdminInventoryItemsId(
  args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['inventory-items'][':id'].$get(args, options))
}

export async function postAdminInventoryItemsId(
  args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['inventory-items'][':id'].$post(args, options))
}

export async function deleteAdminInventoryItemsId(
  args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['inventory-items'][':id'].$delete(args, options))
}

export async function getAdminInventoryItemsIdLocationLevels(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['inventory-items'][':id']['location-levels'].$get(args, options),
  )
}

export async function postAdminInventoryItemsIdLocationLevels(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['inventory-items'][':id']['location-levels'].$post(args, options),
  )
}

export async function postAdminInventoryItemsIdLocationLevelsBatch(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['inventory-items'][':id']['location-levels'].batch.$post(args, options),
  )
}

export async function postAdminInventoryItemsIdLocationLevelsLocationId(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['inventory-items'][':id']['location-levels'][':location_id'].$post(args, options),
  )
}

export async function deleteAdminInventoryItemsIdLocationLevelsLocationId(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['inventory-items'][':id']['location-levels'][':location_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminInvites(
  args: InferRequestType<typeof client.admin.invites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.invites.$get(args, options))
}

export async function postAdminInvites(
  args: InferRequestType<typeof client.admin.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.invites.$post(args, options))
}

export async function postAdminInvitesAccept(
  args: InferRequestType<typeof client.admin.invites.accept.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.invites.accept.$post(args, options))
}

export async function getAdminInvitesId(
  args: InferRequestType<(typeof client.admin.invites)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.invites[':id'].$get(args, options))
}

export async function deleteAdminInvitesId(
  args: InferRequestType<(typeof client.admin.invites)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.invites[':id'].$delete(args, options))
}

export async function postAdminInvitesIdResend(
  args: InferRequestType<(typeof client.admin.invites)[':id']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.invites[':id'].resend.$post(args, options))
}

export async function getAdminLayoutsConfigurations(
  args: InferRequestType<typeof client.admin.layouts.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.layouts.configurations.$get(args, options))
}

export async function getAdminLayoutsZoneConfiguration(
  args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.layouts[':zone'].configuration.$get(args, options))
}

export async function postAdminLayoutsZoneConfiguration(
  args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.layouts[':zone'].configuration.$post(args, options))
}

export async function deleteAdminLayoutsZoneConfiguration(
  args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.layouts[':zone'].configuration.$delete(args, options))
}

export async function getAdminLocales(
  args: InferRequestType<typeof client.admin.locales.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.locales.$get(args, options))
}

export async function getAdminLocalesCode(
  args: InferRequestType<(typeof client.admin.locales)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.locales[':code'].$get(args, options))
}

export async function getAdminModules(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.modules.$get(undefined, options))
}

export async function getAdminNotifications(
  args: InferRequestType<typeof client.admin.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.notifications.$get(args, options))
}

export async function getAdminNotificationsId(
  args: InferRequestType<(typeof client.admin.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.notifications[':id'].$get(args, options))
}

export async function postAdminOrderChangesId(
  args: InferRequestType<(typeof client.admin)['order-changes'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['order-changes'][':id'].$post(args, options))
}

export async function postAdminOrderEdits(
  args: InferRequestType<(typeof client.admin)['order-edits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['order-edits'].$post(args, options))
}

export async function deleteAdminOrderEditsId(
  args: InferRequestType<(typeof client.admin)['order-edits'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['order-edits'][':id'].$delete(args, options))
}

export async function postAdminOrderEditsIdConfirm(
  args: InferRequestType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['order-edits'][':id'].confirm.$post(args, options))
}

export async function postAdminOrderEditsIdItems(
  args: InferRequestType<(typeof client.admin)['order-edits'][':id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['order-edits'][':id'].items.$post(args, options))
}

export async function postAdminOrderEditsIdItemsItemItemId(
  args: InferRequestType<
    (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['order-edits'][':id'].items.item[':item_id'].$post(args, options),
  )
}

export async function postAdminOrderEditsIdItemsActionId(
  args: InferRequestType<
    (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['order-edits'][':id'].items[':action_id'].$post(args, options),
  )
}

export async function deleteAdminOrderEditsIdItemsActionId(
  args: InferRequestType<
    (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['order-edits'][':id'].items[':action_id'].$delete(args, options),
  )
}

export async function postAdminOrderEditsIdRequest(
  args: InferRequestType<(typeof client.admin)['order-edits'][':id']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['order-edits'][':id'].request.$post(args, options))
}

export async function postAdminOrderEditsIdShippingMethod(
  args: InferRequestType<(typeof client.admin)['order-edits'][':id']['shipping-method']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['order-edits'][':id']['shipping-method'].$post(args, options),
  )
}

export async function postAdminOrderEditsIdShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['order-edits'][':id']['shipping-method'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminOrderEditsIdShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['order-edits'][':id']['shipping-method'][':action_id'].$delete(args, options),
  )
}

export async function getAdminOrders(
  args: InferRequestType<typeof client.admin.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders.$get(args, options))
}

export async function postAdminOrdersExport(
  args: InferRequestType<typeof client.admin.orders.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders.export.$post(args, options))
}

export async function getAdminOrdersId(
  args: InferRequestType<(typeof client.admin.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].$get(args, options))
}

export async function postAdminOrdersId(
  args: InferRequestType<(typeof client.admin.orders)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].$post(args, options))
}

export async function postAdminOrdersIdArchive(
  args: InferRequestType<(typeof client.admin.orders)[':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].archive.$post(args, options))
}

export async function postAdminOrdersIdCancel(
  args: InferRequestType<(typeof client.admin.orders)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].cancel.$post(args, options))
}

export async function getAdminOrdersIdChanges(
  args: InferRequestType<(typeof client.admin.orders)[':id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].changes.$get(args, options))
}

export async function postAdminOrdersIdComplete(
  args: InferRequestType<(typeof client.admin.orders)[':id']['complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].complete.$post(args, options))
}

export async function postAdminOrdersIdCreditLines(
  args: InferRequestType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id']['credit-lines'].$post(args, options))
}

export async function postAdminOrdersIdFulfillments(
  args: InferRequestType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].fulfillments.$post(args, options))
}

export async function postAdminOrdersIdFulfillmentsFulfillmentIdCancel(
  args: InferRequestType<
    (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.orders[':id'].fulfillments[':fulfillment_id'].cancel.$post(args, options),
  )
}

export async function postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDelivered(
  args: InferRequestType<
    (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.orders[':id'].fulfillments[':fulfillment_id']['mark-as-delivered'].$post(
      args,
      options,
    ),
  )
}

export async function postAdminOrdersIdFulfillmentsFulfillmentIdShipments(
  args: InferRequestType<
    (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.orders[':id'].fulfillments[':fulfillment_id'].shipments.$post(args, options),
  )
}

export async function getAdminOrdersIdLineItems(
  args: InferRequestType<(typeof client.admin.orders)[':id']['line-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id']['line-items'].$get(args, options))
}

export async function postAdminOrdersIdPaymentSessionsAuthorize(
  args: InferRequestType<
    (typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.orders[':id']['payment-sessions'].authorize.$post(args, options),
  )
}

export async function getAdminOrdersIdPreview(
  args: InferRequestType<(typeof client.admin.orders)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].preview.$get(args, options))
}

export async function getAdminOrdersIdShippingOptions(
  args: InferRequestType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id']['shipping-options'].$get(args, options))
}

export async function postAdminOrdersIdTransfer(
  args: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].transfer.$post(args, options))
}

export async function postAdminOrdersIdTransferCancel(
  args: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].transfer.cancel.$post(args, options))
}

export async function postAdminOrdersIdTransferGuest(
  args: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orders[':id'].transfer.guest.$post(args, options))
}

export async function postAdminPaymentCollections(
  args: InferRequestType<(typeof client.admin)['payment-collections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['payment-collections'].$post(args, options))
}

export async function deleteAdminPaymentCollectionsId(
  args: InferRequestType<(typeof client.admin)['payment-collections'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['payment-collections'][':id'].$delete(args, options))
}

export async function postAdminPaymentCollectionsIdMarkAsPaid(
  args: InferRequestType<
    (typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['payment-collections'][':id']['mark-as-paid'].$post(args, options),
  )
}

export async function postAdminPaymentCollectionsIdPaymentSessions(
  args: InferRequestType<
    (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['payment-collections'][':id']['payment-sessions'].$post(args, options),
  )
}

export async function getAdminPayments(
  args: InferRequestType<typeof client.admin.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.payments.$get(args, options))
}

export async function getAdminPaymentsPaymentProviders(
  args: InferRequestType<(typeof client.admin.payments)['payment-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.payments['payment-providers'].$get(args, options))
}

export async function getAdminPaymentsId(
  args: InferRequestType<(typeof client.admin.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.payments[':id'].$get(args, options))
}

export async function postAdminPaymentsIdCapture(
  args: InferRequestType<(typeof client.admin.payments)[':id']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.payments[':id'].capture.$post(args, options))
}

export async function postAdminPaymentsIdRefund(
  args: InferRequestType<(typeof client.admin.payments)[':id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.payments[':id'].refund.$post(args, options))
}

export async function getAdminPlugins(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.plugins.$get(undefined, options))
}

export async function getAdminPriceLists(
  args: InferRequestType<(typeof client.admin)['price-lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'].$get(args, options))
}

export async function postAdminPriceLists(
  args: InferRequestType<(typeof client.admin)['price-lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'].$post(args, options))
}

export async function getAdminPriceListsId(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'][':id'].$get(args, options))
}

export async function postAdminPriceListsId(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'][':id'].$post(args, options))
}

export async function deleteAdminPriceListsId(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'][':id'].$delete(args, options))
}

export async function getAdminPriceListsIdPrices(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'][':id'].prices.$get(args, options))
}

export async function postAdminPriceListsIdPricesBatch(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'][':id'].prices.batch.$post(args, options))
}

export async function postAdminPriceListsIdProducts(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-lists'][':id'].products.$post(args, options))
}

export async function getAdminPricePreferences(
  args: InferRequestType<(typeof client.admin)['price-preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-preferences'].$get(args, options))
}

export async function postAdminPricePreferences(
  args: InferRequestType<(typeof client.admin)['price-preferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-preferences'].$post(args, options))
}

export async function getAdminPricePreferencesId(
  args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-preferences'][':id'].$get(args, options))
}

export async function postAdminPricePreferencesId(
  args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-preferences'][':id'].$post(args, options))
}

export async function deleteAdminPricePreferencesId(
  args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['price-preferences'][':id'].$delete(args, options))
}

export async function getAdminProductCategories(
  args: InferRequestType<(typeof client.admin)['product-categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-categories'].$get(args, options))
}

export async function postAdminProductCategories(
  args: InferRequestType<(typeof client.admin)['product-categories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-categories'].$post(args, options))
}

export async function getAdminProductCategoriesId(
  args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-categories'][':id'].$get(args, options))
}

export async function postAdminProductCategoriesId(
  args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-categories'][':id'].$post(args, options))
}

export async function deleteAdminProductCategoriesId(
  args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-categories'][':id'].$delete(args, options))
}

export async function postAdminProductCategoriesIdProducts(
  args: InferRequestType<(typeof client.admin)['product-categories'][':id']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['product-categories'][':id'].products.$post(args, options),
  )
}

export async function getAdminProductOptions(
  args: InferRequestType<(typeof client.admin)['product-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-options'].$get(args, options))
}

export async function postAdminProductOptions(
  args: InferRequestType<(typeof client.admin)['product-options']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-options'].$post(args, options))
}

export async function getAdminProductOptionsId(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-options'][':id'].$get(args, options))
}

export async function postAdminProductOptionsId(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-options'][':id'].$post(args, options))
}

export async function deleteAdminProductOptionsId(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-options'][':id'].$delete(args, options))
}

export async function getAdminProductOptionsIdValues(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-options'][':id'].values.$get(args, options))
}

export async function getAdminProductOptionsIdValuesValueId(
  args: InferRequestType<
    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['product-options'][':id'].values[':value_id'].$get(args, options),
  )
}

export async function postAdminProductOptionsIdValuesValueId(
  args: InferRequestType<
    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['product-options'][':id'].values[':value_id'].$post(args, options),
  )
}

export async function deleteAdminProductOptionsIdValuesValueId(
  args: InferRequestType<
    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['product-options'][':id'].values[':value_id'].$delete(args, options),
  )
}

export async function getAdminProductTags(
  args: InferRequestType<(typeof client.admin)['product-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-tags'].$get(args, options))
}

export async function postAdminProductTags(
  args: InferRequestType<(typeof client.admin)['product-tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-tags'].$post(args, options))
}

export async function getAdminProductTagsId(
  args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-tags'][':id'].$get(args, options))
}

export async function postAdminProductTagsId(
  args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-tags'][':id'].$post(args, options))
}

export async function deleteAdminProductTagsId(
  args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-tags'][':id'].$delete(args, options))
}

export async function getAdminProductTypes(
  args: InferRequestType<(typeof client.admin)['product-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-types'].$get(args, options))
}

export async function postAdminProductTypes(
  args: InferRequestType<(typeof client.admin)['product-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-types'].$post(args, options))
}

export async function getAdminProductTypesId(
  args: InferRequestType<(typeof client.admin)['product-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-types'][':id'].$get(args, options))
}

export async function postAdminProductTypesId(
  args: InferRequestType<(typeof client.admin)['product-types'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-types'][':id'].$post(args, options))
}

export async function deleteAdminProductTypesId(
  args: InferRequestType<(typeof client.admin)['product-types'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-types'][':id'].$delete(args, options))
}

export async function getAdminProductVariants(
  args: InferRequestType<(typeof client.admin)['product-variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['product-variants'].$get(args, options))
}

export async function getAdminProducts(
  args: InferRequestType<typeof client.admin.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products.$get(args, options))
}

export async function postAdminProducts(
  args: InferRequestType<typeof client.admin.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products.$post(args, options))
}

export async function postAdminProductsBatch(
  args: InferRequestType<typeof client.admin.products.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products.batch.$post(args, options))
}

export async function postAdminProductsExport(
  args: InferRequestType<typeof client.admin.products.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products.export.$post(args, options))
}

export async function postAdminProductsImport(
  args: InferRequestType<typeof client.admin.products.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products.import.$post(args, options))
}

export async function postAdminProductsImportTransactionIdConfirm(
  args: InferRequestType<
    (typeof client.admin.products.import)[':transaction_id']['confirm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products.import[':transaction_id'].confirm.$post(args, options),
  )
}

export async function postAdminProductsImports(
  args: InferRequestType<typeof client.admin.products.imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products.imports.$post(args, options))
}

export async function postAdminProductsImportsTransactionIdConfirm(
  args: InferRequestType<
    (typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products.imports[':transaction_id'].confirm.$post(args, options),
  )
}

export async function getAdminProductsId(
  args: InferRequestType<(typeof client.admin.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].$get(args, options))
}

export async function postAdminProductsId(
  args: InferRequestType<(typeof client.admin.products)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].$post(args, options))
}

export async function deleteAdminProductsId(
  args: InferRequestType<(typeof client.admin.products)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].$delete(args, options))
}

export async function postAdminProductsIdImagesImageIdVariantsBatch(
  args: InferRequestType<
    (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].images[':image_id'].variants.batch.$post(args, options),
  )
}

export async function getAdminProductsIdOptions(
  args: InferRequestType<(typeof client.admin.products)[':id']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].options.$get(args, options))
}

export async function postAdminProductsIdOptionsBatch(
  args: InferRequestType<(typeof client.admin.products)[':id']['options']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].options.batch.$post(args, options))
}

export async function getAdminProductsIdVariants(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].variants.$get(args, options))
}

export async function postAdminProductsIdVariants(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].variants.$post(args, options))
}

export async function postAdminProductsIdVariantsBatch(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.products[':id'].variants.batch.$post(args, options))
}

export async function postAdminProductsIdVariantsInventoryItemsBatch(
  args: InferRequestType<
    (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants['inventory-items'].batch.$post(args, options),
  )
}

export async function getAdminProductsIdVariantsVariantId(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants[':variant_id'].$get(args, options),
  )
}

export async function postAdminProductsIdVariantsVariantId(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants[':variant_id'].$post(args, options),
  )
}

export async function deleteAdminProductsIdVariantsVariantId(
  args: InferRequestType<
    (typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants[':variant_id'].$delete(args, options),
  )
}

export async function postAdminProductsIdVariantsVariantIdImagesBatch(
  args: InferRequestType<
    (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants[':variant_id'].images.batch.$post(args, options),
  )
}

export async function postAdminProductsIdVariantsVariantIdInventoryItems(
  args: InferRequestType<
    (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants[':variant_id']['inventory-items'].$post(args, options),
  )
}

export async function postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemId(
  args: InferRequestType<
    (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants[':variant_id']['inventory-items'][
      ':inventory_item_id'
    ].$post(args, options),
  )
}

export async function deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemId(
  args: InferRequestType<
    (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.products[':id'].variants[':variant_id']['inventory-items'][
      ':inventory_item_id'
    ].$delete(args, options),
  )
}

export async function getAdminPromotions(
  args: InferRequestType<typeof client.admin.promotions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions.$get(args, options))
}

export async function postAdminPromotions(
  args: InferRequestType<typeof client.admin.promotions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions.$post(args, options))
}

export async function getAdminPromotionsRuleAttributeOptionsRuleType(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.promotions['rule-attribute-options'][':rule_type'].$get(args, options),
  )
}

export async function getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeId(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.promotions['rule-value-options'][':rule_type'][':rule_attribute_id'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminPromotionsId(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions[':id'].$get(args, options))
}

export async function postAdminPromotionsId(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions[':id'].$post(args, options))
}

export async function deleteAdminPromotionsId(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions[':id'].$delete(args, options))
}

export async function postAdminPromotionsIdBuyRulesBatch(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions[':id']['buy-rules'].batch.$post(args, options))
}

export async function postAdminPromotionsIdRulesBatch(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions[':id'].rules.batch.$post(args, options))
}

export async function postAdminPromotionsIdTargetRulesBatch(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.promotions[':id']['target-rules'].batch.$post(args, options),
  )
}

export async function getAdminPromotionsIdRuleType(
  args: InferRequestType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.promotions[':id'][':rule_type'].$get(args, options))
}

export async function getAdminPropertyLabels(
  args: InferRequestType<(typeof client.admin)['property-labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['property-labels'].$get(args, options))
}

export async function postAdminPropertyLabels(
  args: InferRequestType<(typeof client.admin)['property-labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['property-labels'].$post(args, options))
}

export async function postAdminPropertyLabelsBatch(
  args: InferRequestType<(typeof client.admin)['property-labels']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['property-labels'].batch.$post(args, options))
}

export async function getAdminPropertyLabelsId(
  args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['property-labels'][':id'].$get(args, options))
}

export async function postAdminPropertyLabelsId(
  args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['property-labels'][':id'].$post(args, options))
}

export async function deleteAdminPropertyLabelsId(
  args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['property-labels'][':id'].$delete(args, options))
}

export async function getAdminRefundReasons(
  args: InferRequestType<(typeof client.admin)['refund-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['refund-reasons'].$get(args, options))
}

export async function postAdminRefundReasons(
  args: InferRequestType<(typeof client.admin)['refund-reasons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['refund-reasons'].$post(args, options))
}

export async function getAdminRefundReasonsId(
  args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['refund-reasons'][':id'].$get(args, options))
}

export async function postAdminRefundReasonsId(
  args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['refund-reasons'][':id'].$post(args, options))
}

export async function deleteAdminRefundReasonsId(
  args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['refund-reasons'][':id'].$delete(args, options))
}

export async function getAdminRegions(
  args: InferRequestType<typeof client.admin.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.regions.$get(args, options))
}

export async function postAdminRegions(
  args: InferRequestType<typeof client.admin.regions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.regions.$post(args, options))
}

export async function getAdminRegionsId(
  args: InferRequestType<(typeof client.admin.regions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.regions[':id'].$get(args, options))
}

export async function postAdminRegionsId(
  args: InferRequestType<(typeof client.admin.regions)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.regions[':id'].$post(args, options))
}

export async function deleteAdminRegionsId(
  args: InferRequestType<(typeof client.admin.regions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.regions[':id'].$delete(args, options))
}

export async function getAdminReservations(
  args: InferRequestType<typeof client.admin.reservations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.reservations.$get(args, options))
}

export async function postAdminReservations(
  args: InferRequestType<typeof client.admin.reservations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.reservations.$post(args, options))
}

export async function getAdminReservationsId(
  args: InferRequestType<(typeof client.admin.reservations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.reservations[':id'].$get(args, options))
}

export async function postAdminReservationsId(
  args: InferRequestType<(typeof client.admin.reservations)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.reservations[':id'].$post(args, options))
}

export async function deleteAdminReservationsId(
  args: InferRequestType<(typeof client.admin.reservations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.reservations[':id'].$delete(args, options))
}

export async function getAdminReturnReasons(
  args: InferRequestType<(typeof client.admin)['return-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['return-reasons'].$get(args, options))
}

export async function postAdminReturnReasons(
  args: InferRequestType<(typeof client.admin)['return-reasons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['return-reasons'].$post(args, options))
}

export async function getAdminReturnReasonsId(
  args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['return-reasons'][':id'].$get(args, options))
}

export async function postAdminReturnReasonsId(
  args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['return-reasons'][':id'].$post(args, options))
}

export async function deleteAdminReturnReasonsId(
  args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['return-reasons'][':id'].$delete(args, options))
}

export async function getAdminReturns(
  args: InferRequestType<typeof client.admin.returns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns.$get(args, options))
}

export async function postAdminReturns(
  args: InferRequestType<typeof client.admin.returns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns.$post(args, options))
}

export async function getAdminReturnsId(
  args: InferRequestType<(typeof client.admin.returns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].$get(args, options))
}

export async function postAdminReturnsId(
  args: InferRequestType<(typeof client.admin.returns)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].$post(args, options))
}

export async function postAdminReturnsIdCancel(
  args: InferRequestType<(typeof client.admin.returns)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].cancel.$post(args, options))
}

export async function postAdminReturnsIdDismissItems(
  args: InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id']['dismiss-items'].$post(args, options))
}

export async function postAdminReturnsIdDismissItemsActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['dismiss-items'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminReturnsIdDismissItemsActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['dismiss-items'][':action_id'].$delete(args, options),
  )
}

export async function postAdminReturnsIdReceive(
  args: InferRequestType<(typeof client.admin.returns)[':id']['receive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].receive.$post(args, options))
}

export async function deleteAdminReturnsIdReceive(
  args: InferRequestType<(typeof client.admin.returns)[':id']['receive']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].receive.$delete(args, options))
}

export async function postAdminReturnsIdReceiveItems(
  args: InferRequestType<(typeof client.admin.returns)[':id']['receive-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id']['receive-items'].$post(args, options))
}

export async function postAdminReturnsIdReceiveItemsActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['receive-items'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminReturnsIdReceiveItemsActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['receive-items'][':action_id'].$delete(args, options),
  )
}

export async function postAdminReturnsIdReceiveConfirm(
  args: InferRequestType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].receive.confirm.$post(args, options))
}

export async function postAdminReturnsIdRequest(
  args: InferRequestType<(typeof client.admin.returns)[':id']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].request.$post(args, options))
}

export async function deleteAdminReturnsIdRequest(
  args: InferRequestType<(typeof client.admin.returns)[':id']['request']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id'].request.$delete(args, options))
}

export async function postAdminReturnsIdRequestItems(
  args: InferRequestType<(typeof client.admin.returns)[':id']['request-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id']['request-items'].$post(args, options))
}

export async function postAdminReturnsIdRequestItemsActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['request-items'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminReturnsIdRequestItemsActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['request-items'][':action_id'].$delete(args, options),
  )
}

export async function postAdminReturnsIdShippingMethod(
  args: InferRequestType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.returns[':id']['shipping-method'].$post(args, options))
}

export async function postAdminReturnsIdShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['shipping-method'][':action_id'].$post(args, options),
  )
}

export async function deleteAdminReturnsIdShippingMethodActionId(
  args: InferRequestType<
    (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.returns[':id']['shipping-method'][':action_id'].$delete(args, options),
  )
}

export async function getAdminSalesChannels(
  args: InferRequestType<(typeof client.admin)['sales-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['sales-channels'].$get(args, options))
}

export async function postAdminSalesChannels(
  args: InferRequestType<(typeof client.admin)['sales-channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['sales-channels'].$post(args, options))
}

export async function getAdminSalesChannelsId(
  args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['sales-channels'][':id'].$get(args, options))
}

export async function postAdminSalesChannelsId(
  args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['sales-channels'][':id'].$post(args, options))
}

export async function deleteAdminSalesChannelsId(
  args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['sales-channels'][':id'].$delete(args, options))
}

export async function postAdminSalesChannelsIdProducts(
  args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['sales-channels'][':id'].products.$post(args, options))
}

export async function getAdminSearch(
  args: InferRequestType<typeof client.admin.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.search.$get(args, options))
}

export async function getAdminSearchIndexes(options?: ClientRequestOptions) {
  return await parseResponse(client.admin['search-indexes'].$get(undefined, options))
}

export async function deleteAdminSearchIndexesId(
  args: InferRequestType<(typeof client.admin)['search-indexes'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['search-indexes'][':id'].$delete(args, options))
}

export async function postAdminSearchIndexesIdReindex(
  args: InferRequestType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['search-indexes'][':id'].reindex.$post(args, options))
}

export async function getAdminShippingOptionTypes(
  args: InferRequestType<(typeof client.admin)['shipping-option-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-option-types'].$get(args, options))
}

export async function postAdminShippingOptionTypes(
  args: InferRequestType<(typeof client.admin)['shipping-option-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-option-types'].$post(args, options))
}

export async function getAdminShippingOptionTypesId(
  args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-option-types'][':id'].$get(args, options))
}

export async function postAdminShippingOptionTypesId(
  args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-option-types'][':id'].$post(args, options))
}

export async function deleteAdminShippingOptionTypesId(
  args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-option-types'][':id'].$delete(args, options))
}

export async function getAdminShippingOptions(
  args: InferRequestType<(typeof client.admin)['shipping-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-options'].$get(args, options))
}

export async function postAdminShippingOptions(
  args: InferRequestType<(typeof client.admin)['shipping-options']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-options'].$post(args, options))
}

export async function getAdminShippingOptionsId(
  args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-options'][':id'].$get(args, options))
}

export async function postAdminShippingOptionsId(
  args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-options'][':id'].$post(args, options))
}

export async function deleteAdminShippingOptionsId(
  args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-options'][':id'].$delete(args, options))
}

export async function postAdminShippingOptionsIdRulesBatch(
  args: InferRequestType<
    (typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['shipping-options'][':id'].rules.batch.$post(args, options),
  )
}

export async function getAdminShippingProfiles(
  args: InferRequestType<(typeof client.admin)['shipping-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-profiles'].$get(args, options))
}

export async function postAdminShippingProfiles(
  args: InferRequestType<(typeof client.admin)['shipping-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-profiles'].$post(args, options))
}

export async function getAdminShippingProfilesId(
  args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-profiles'][':id'].$get(args, options))
}

export async function postAdminShippingProfilesId(
  args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-profiles'][':id'].$post(args, options))
}

export async function deleteAdminShippingProfilesId(
  args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['shipping-profiles'][':id'].$delete(args, options))
}

export async function getAdminStockLocations(
  args: InferRequestType<(typeof client.admin)['stock-locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['stock-locations'].$get(args, options))
}

export async function postAdminStockLocations(
  args: InferRequestType<(typeof client.admin)['stock-locations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['stock-locations'].$post(args, options))
}

export async function getAdminStockLocationsId(
  args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['stock-locations'][':id'].$get(args, options))
}

export async function postAdminStockLocationsId(
  args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['stock-locations'][':id'].$post(args, options))
}

export async function deleteAdminStockLocationsId(
  args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['stock-locations'][':id'].$delete(args, options))
}

export async function postAdminStockLocationsIdFulfillmentProviders(
  args: InferRequestType<
    (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['stock-locations'][':id']['fulfillment-providers'].$post(args, options),
  )
}

export async function postAdminStockLocationsIdFulfillmentSets(
  args: InferRequestType<
    (typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['stock-locations'][':id']['fulfillment-sets'].$post(args, options),
  )
}

export async function postAdminStockLocationsIdSalesChannels(
  args: InferRequestType<
    (typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['stock-locations'][':id']['sales-channels'].$post(args, options),
  )
}

export async function getAdminStoreCreditAccounts(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['store-credit-accounts'].$get(args, options))
}

export async function postAdminStoreCreditAccounts(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['store-credit-accounts'].$post(args, options))
}

export async function getAdminStoreCreditAccountsId(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['store-credit-accounts'][':id'].$get(args, options))
}

export async function postAdminStoreCreditAccountsIdCredit(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['store-credit-accounts'][':id'].credit.$post(args, options),
  )
}

export async function postAdminStoreCreditAccountsIdDebit(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['store-credit-accounts'][':id'].debit.$post(args, options),
  )
}

export async function getAdminStoreCreditAccountsIdTransactions(
  args: InferRequestType<
    (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['store-credit-accounts'][':id'].transactions.$get(args, options),
  )
}

export async function getAdminStores(
  args: InferRequestType<typeof client.admin.stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.stores.$get(args, options))
}

export async function getAdminStoresId(
  args: InferRequestType<(typeof client.admin.stores)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.stores[':id'].$get(args, options))
}

export async function postAdminStoresId(
  args: InferRequestType<(typeof client.admin.stores)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.stores[':id'].$post(args, options))
}

export async function getAdminTaxProviders(
  args: InferRequestType<(typeof client.admin)['tax-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-providers'].$get(args, options))
}

export async function getAdminTaxRates(
  args: InferRequestType<(typeof client.admin)['tax-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-rates'].$get(args, options))
}

export async function postAdminTaxRates(
  args: InferRequestType<(typeof client.admin)['tax-rates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-rates'].$post(args, options))
}

export async function getAdminTaxRatesId(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-rates'][':id'].$get(args, options))
}

export async function postAdminTaxRatesId(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-rates'][':id'].$post(args, options))
}

export async function deleteAdminTaxRatesId(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-rates'][':id'].$delete(args, options))
}

export async function postAdminTaxRatesIdRules(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-rates'][':id'].rules.$post(args, options))
}

export async function deleteAdminTaxRatesIdRulesRuleId(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['tax-rates'][':id'].rules[':rule_id'].$delete(args, options),
  )
}

export async function getAdminTaxRegions(
  args: InferRequestType<(typeof client.admin)['tax-regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-regions'].$get(args, options))
}

export async function postAdminTaxRegions(
  args: InferRequestType<(typeof client.admin)['tax-regions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-regions'].$post(args, options))
}

export async function getAdminTaxRegionsId(
  args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-regions'][':id'].$get(args, options))
}

export async function postAdminTaxRegionsId(
  args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-regions'][':id'].$post(args, options))
}

export async function deleteAdminTaxRegionsId(
  args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['tax-regions'][':id'].$delete(args, options))
}

export async function getAdminTranslations(
  args: InferRequestType<typeof client.admin.translations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.translations.$get(args, options))
}

export async function postAdminTranslationsBatch(
  args: InferRequestType<typeof client.admin.translations.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.translations.batch.$post(args, options))
}

export async function getAdminTranslationsEntities(
  args: InferRequestType<typeof client.admin.translations.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.translations.entities.$get(args, options))
}

export async function getAdminTranslationsSettings(
  args: InferRequestType<typeof client.admin.translations.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.translations.settings.$get(args, options))
}

export async function postAdminTranslationsSettingsBatch(
  args: InferRequestType<typeof client.admin.translations.settings.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.translations.settings.batch.$post(args, options))
}

export async function getAdminTranslationsStatistics(
  args: InferRequestType<typeof client.admin.translations.statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.translations.statistics.$get(args, options))
}

export async function postAdminUploads(
  args: InferRequestType<typeof client.admin.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.uploads.$post(args, options))
}

export async function postAdminUploadsPresignedUrls(
  args: InferRequestType<(typeof client.admin.uploads)['presigned-urls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.uploads['presigned-urls'].$post(args, options))
}

export async function getAdminUploadsId(
  args: InferRequestType<(typeof client.admin.uploads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.uploads[':id'].$get(args, options))
}

export async function deleteAdminUploadsId(
  args: InferRequestType<(typeof client.admin.uploads)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.uploads[':id'].$delete(args, options))
}

export async function getAdminUsers(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$get(args, options))
}

export async function getAdminUsersMe(
  args: InferRequestType<typeof client.admin.users.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.me.$get(args, options))
}

export async function postAdminUsersMe(
  args: InferRequestType<typeof client.admin.users.me.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.me.$post(args, options))
}

export async function getAdminUsersId(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].$get(args, options))
}

export async function postAdminUsersId(
  args: InferRequestType<(typeof client.admin.users)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].$post(args, options))
}

export async function deleteAdminUsersId(
  args: InferRequestType<(typeof client.admin.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].$delete(args, options))
}

export async function getAdminUsersIdAuthProviders(
  args: InferRequestType<(typeof client.admin.users)[':id']['auth-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['auth-providers'].$get(args, options))
}

export async function postAdminUsersIdResetPassword(
  args: InferRequestType<(typeof client.admin.users)[':id']['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['reset-password'].$post(args, options))
}

export async function getAdminUsersIdRoles(
  args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].roles.$get(args, options))
}

export async function postAdminUsersIdRoles(
  args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].roles.$post(args, options))
}

export async function deleteAdminUsersIdRoles(
  args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].roles.$delete(args, options))
}

export async function deleteAdminUsersIdRolesRoleId(
  args: InferRequestType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].roles[':role_id'].$delete(args, options))
}

export async function getAdminViewsEntities(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.views.entities.$get(undefined, options))
}

export async function getAdminViewsEntityColumns(
  args: InferRequestType<(typeof client.admin.views)[':entity']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.views[':entity'].columns.$get(args, options))
}

export async function getAdminViewsEntityConfigurations(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.views[':entity'].configurations.$get(args, options))
}

export async function postAdminViewsEntityConfigurations(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.views[':entity'].configurations.$post(args, options))
}

export async function getAdminViewsEntityConfigurationsActive(
  args: InferRequestType<
    (typeof client.admin.views)[':entity']['configurations']['active']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.views[':entity'].configurations.active.$get(args, options),
  )
}

export async function postAdminViewsEntityConfigurationsActive(
  args: InferRequestType<
    (typeof client.admin.views)[':entity']['configurations']['active']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.views[':entity'].configurations.active.$post(args, options),
  )
}

export async function getAdminViewsEntityConfigurationsId(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.views[':entity'].configurations[':id'].$get(args, options),
  )
}

export async function postAdminViewsEntityConfigurationsId(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.views[':entity'].configurations[':id'].$post(args, options),
  )
}

export async function deleteAdminViewsEntityConfigurationsId(
  args: InferRequestType<
    (typeof client.admin.views)[':entity']['configurations'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.views[':entity'].configurations[':id'].$delete(args, options),
  )
}

export async function getAdminWorkflowsExecutions(
  args: InferRequestType<(typeof client.admin)['workflows-executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['workflows-executions'].$get(args, options))
}

export async function getAdminWorkflowsExecutionsId(
  args: InferRequestType<(typeof client.admin)['workflows-executions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['workflows-executions'][':id'].$get(args, options))
}

export async function postAdminWorkflowsExecutionsWorkflowIdRun(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['workflows-executions'][':workflow_id'].run.$post(args, options),
  )
}

export async function postAdminWorkflowsExecutionsWorkflowIdStepsFailure(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['workflows-executions'][':workflow_id'].steps.failure.$post(args, options),
  )
}

export async function postAdminWorkflowsExecutionsWorkflowIdStepsSuccess(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['workflows-executions'][':workflow_id'].steps.success.$post(args, options),
  )
}

export async function getAdminWorkflowsExecutionsWorkflowIdSubscribe(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['workflows-executions'][':workflow_id'].subscribe.$get(args, options),
  )
}

export async function getAdminWorkflowsExecutionsWorkflowIdTransactionId(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['workflows-executions'][':workflow_id'][':transaction_id'].$get(args, options),
  )
}

export async function getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribe(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['workflows-executions'][':workflow_id'][':transaction_id'].subscribe.$get(
      args,
      options,
    ),
  )
}

export async function postAuthMfaChallengesIdVerify(
  args: InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.mfa.challenges[':id'].verify.$post(args, options))
}

export async function getAuthMfaFactors(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.mfa.factors.$get(undefined, options))
}

export async function postAuthMfaFactors(
  args: InferRequestType<typeof client.auth.mfa.factors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.mfa.factors.$post(args, options))
}

export async function deleteAuthMfaFactorsId(
  args: InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.mfa.factors[':id'].$delete(args, options))
}

export async function postAuthMfaFactorsIdVerify(
  args: InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.mfa.factors[':id'].verify.$post(args, options))
}

export async function postAuthMfaRecoveryCodes(
  args: InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.mfa['recovery-codes'].$post(args, options))
}

export async function postAuthSession(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.session.$post(undefined, options))
}

export async function deleteAuthSession(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.session.$delete(undefined, options))
}

export async function postAuthTokenRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token.refresh.$post(undefined, options))
}

export async function getAuthUserProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.user.providers.$get(undefined, options))
}

export async function postAuthUserAuthProvider(
  args: InferRequestType<(typeof client.auth.user)[':auth_provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.user[':auth_provider'].$post(args, options))
}

export async function postAuthUserAuthProviderCallback(
  args: InferRequestType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.user[':auth_provider'].callback.$post(args, options))
}

export async function postAuthUserAuthProviderRegister(
  args: InferRequestType<(typeof client.auth.user)[':auth_provider']['register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.user[':auth_provider'].register.$post(args, options))
}

export async function postAuthUserAuthProviderResetPassword(
  args: InferRequestType<(typeof client.auth.user)[':auth_provider']['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth.user[':auth_provider']['reset-password'].$post(args, options),
  )
}

export async function postAuthUserAuthProviderUpdate(
  args: InferRequestType<(typeof client.auth.user)[':auth_provider']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.user[':auth_provider'].update.$post(args, options))
}

export async function postAuthAuthProviderUser(
  args: InferRequestType<(typeof client.auth)[':auth_provider']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':auth_provider'].user.$post(args, options))
}
