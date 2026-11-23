import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuthCustomerEmailpassVerificationConfirm(
  args: InferRequestType<typeof client.auth.customer.emailpass.verification.confirm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth.customer.emailpass.verification.confirm.$post(args, options),
  )
}

export async function getAuthCustomerProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.customer.providers.$get(undefined, options))
}

export async function postAuthCustomerAuthProvider(
  args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.customer[':auth_provider'].$post(args, options))
}

export async function postAuthCustomerAuthProviderCallback(
  args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.customer[':auth_provider'].callback.$post(args, options))
}

export async function postAuthCustomerAuthProviderRegister(
  args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.customer[':auth_provider'].register.$post(args, options))
}

export async function postAuthCustomerAuthProviderResetPassword(
  args: InferRequestType<
    (typeof client.auth.customer)[':auth_provider']['reset-password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth.customer[':auth_provider']['reset-password'].$post(args, options),
  )
}

export async function postAuthCustomerAuthProviderUpdate(
  args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.customer[':auth_provider'].update.$post(args, options))
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

export async function postAuthVerificationConfirm(
  args: InferRequestType<typeof client.auth.verification.confirm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.verification.confirm.$post(args, options))
}

export async function postAuthVerificationRequest(
  args: InferRequestType<typeof client.auth.verification.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.verification.request.$post(args, options))
}

export async function postStoreCarts(
  args: InferRequestType<typeof client.store.carts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts.$post(args, options))
}

export async function getStoreCartsId(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id'].$get(args, options))
}

export async function postStoreCartsId(
  args: InferRequestType<(typeof client.store.carts)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id'].$post(args, options))
}

export async function postStoreCartsIdComplete(
  args: InferRequestType<(typeof client.store.carts)[':id']['complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id'].complete.$post(args, options))
}

export async function postStoreCartsIdCustomer(
  args: InferRequestType<(typeof client.store.carts)[':id']['customer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id'].customer.$post(args, options))
}

export async function postStoreCartsIdGiftCards(
  args: InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id']['gift-cards'].$post(args, options))
}

export async function deleteStoreCartsIdGiftCards(
  args: InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id']['gift-cards'].$delete(args, options))
}

export async function postStoreCartsIdLineItems(
  args: InferRequestType<(typeof client.store.carts)[':id']['line-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id']['line-items'].$post(args, options))
}

export async function postStoreCartsIdLineItemsLineId(
  args: InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.store.carts[':id']['line-items'][':line_id'].$post(args, options),
  )
}

export async function deleteStoreCartsIdLineItemsLineId(
  args: InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.store.carts[':id']['line-items'][':line_id'].$delete(args, options),
  )
}

export async function postStoreCartsIdPromotions(
  args: InferRequestType<(typeof client.store.carts)[':id']['promotions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id'].promotions.$post(args, options))
}

export async function deleteStoreCartsIdPromotions(
  args: InferRequestType<(typeof client.store.carts)[':id']['promotions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id'].promotions.$delete(args, options))
}

export async function postStoreCartsIdShippingMethods(
  args: InferRequestType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id']['shipping-methods'].$post(args, options))
}

export async function postStoreCartsIdStoreCredits(
  args: InferRequestType<(typeof client.store.carts)[':id']['store-credits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id']['store-credits'].$post(args, options))
}

export async function postStoreCartsIdTaxes(
  args: InferRequestType<(typeof client.store.carts)[':id']['taxes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.carts[':id'].taxes.$post(args, options))
}

export async function getStoreCollections(
  args: InferRequestType<typeof client.store.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.collections.$get(args, options))
}

export async function getStoreCollectionsId(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.collections[':id'].$get(args, options))
}

export async function getStoreCurrencies(
  args: InferRequestType<typeof client.store.currencies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.currencies.$get(args, options))
}

export async function getStoreCurrenciesCode(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.currencies[':code'].$get(args, options))
}

export async function postStoreCustomers(
  args: InferRequestType<typeof client.store.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.customers.$post(args, options))
}

export async function getStoreCustomersMe(
  args: InferRequestType<typeof client.store.customers.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.customers.me.$get(args, options))
}

export async function postStoreCustomersMe(
  args: InferRequestType<typeof client.store.customers.me.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.customers.me.$post(args, options))
}

export async function getStoreCustomersMeAddresses(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.customers.me.addresses.$get(args, options))
}

export async function postStoreCustomersMeAddresses(
  args: InferRequestType<typeof client.store.customers.me.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.customers.me.addresses.$post(args, options))
}

export async function getStoreCustomersMeAddressesAddressId(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.customers.me.addresses[':address_id'].$get(args, options))
}

export async function postStoreCustomersMeAddressesAddressId(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.store.customers.me.addresses[':address_id'].$post(args, options),
  )
}

export async function deleteStoreCustomersMeAddressesAddressId(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.store.customers.me.addresses[':address_id'].$delete(args, options),
  )
}

export async function getStoreGiftCardsIdOrCode(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['gift-cards'][':idOrCode'].$get(args, options))
}

export async function getStoreLocales(
  args: InferRequestType<typeof client.store.locales.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.locales.$get(args, options))
}

export async function getStoreOrders(
  args: InferRequestType<typeof client.store.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.orders.$get(args, options))
}

export async function getStoreOrdersId(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.orders[':id'].$get(args, options))
}

export async function postStoreOrdersIdTransferAccept(
  args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.orders[':id'].transfer.accept.$post(args, options))
}

export async function postStoreOrdersIdTransferCancel(
  args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.orders[':id'].transfer.cancel.$post(args, options))
}

export async function postStoreOrdersIdTransferDecline(
  args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.orders[':id'].transfer.decline.$post(args, options))
}

export async function postStoreOrdersIdTransferRequest(
  args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.orders[':id'].transfer.request.$post(args, options))
}

export async function postStorePaymentCollections(
  args: InferRequestType<(typeof client.store)['payment-collections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['payment-collections'].$post(args, options))
}

export async function postStorePaymentCollectionsIdPaymentSessions(
  args: InferRequestType<
    (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.store['payment-collections'][':id']['payment-sessions'].$post(args, options),
  )
}

export async function postStorePaymentCollectionsIdPaymentSessionsSessionId(
  args: InferRequestType<
    (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.store['payment-collections'][':id']['payment-sessions'][':session_id'].$post(
      args,
      options,
    ),
  )
}

export async function getStorePaymentProviders(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['payment-providers'].$get(args, options))
}

export async function getStoreProductCategories(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-categories'].$get(args, options))
}

export async function getStoreProductCategoriesId(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-categories'][':id'].$get(args, options))
}

export async function getStoreProductOptions(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-options'].$get(args, options))
}

export async function getStoreProductOptionsId(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-options'][':id'].$get(args, options))
}

export async function getStoreProductTags(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-tags'].$get(args, options))
}

export async function getStoreProductTagsId(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-tags'][':id'].$get(args, options))
}

export async function getStoreProductTypes(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-types'].$get(args, options))
}

export async function getStoreProductTypesId(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-types'][':id'].$get(args, options))
}

export async function getStoreProductVariants(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['product-variants'].$get(args, options))
}

export async function getStoreProducts(
  args: InferRequestType<typeof client.store.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.products.$get(args, options))
}

export async function getStoreProductsId(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.products[':id'].$get(args, options))
}

export async function getStoreRegions(
  args: InferRequestType<typeof client.store.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.regions.$get(args, options))
}

export async function getStoreRegionsId(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.regions[':id'].$get(args, options))
}

export async function getStoreReturnReasons(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['return-reasons'].$get(args, options))
}

export async function getStoreReturnReasonsId(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['return-reasons'][':id'].$get(args, options))
}

export async function postStoreReturns(
  args: InferRequestType<typeof client.store.returns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.returns.$post(args, options))
}

export async function postStoreSearch(
  args: InferRequestType<typeof client.store.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.search.$post(args, options))
}

export async function getStoreShippingOptions(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['shipping-options'].$get(args, options))
}

export async function postStoreShippingOptionsIdCalculate(
  args: InferRequestType<(typeof client.store)['shipping-options'][':id']['calculate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['shipping-options'][':id'].calculate.$post(args, options))
}

export async function getStoreStoreCreditAccounts(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['store-credit-accounts'].$get(args, options))
}

export async function postStoreStoreCreditAccountsClaim(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['store-credit-accounts'].claim.$post(args, options))
}

export async function getStoreStoreCreditAccountsId(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store['store-credit-accounts'][':id'].$get(args, options))
}
