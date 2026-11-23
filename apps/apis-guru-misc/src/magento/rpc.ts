import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deleteV1AddressesAddressId(
  args: InferRequestType<(typeof client.V1.addresses)[':addressId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.addresses[':addressId'].$delete(args, options))
}

export async function putV1AmazonBillingAddressAmazonOrderReferenceId(
  args: InferRequestType<
    (typeof client.V1)['amazon-billing-address'][':amazonOrderReferenceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['amazon-billing-address'][':amazonOrderReferenceId'].$put(args, options),
  )
}

export async function putV1AmazonShippingAddressAmazonOrderReferenceId(
  args: InferRequestType<
    (typeof client.V1)['amazon-shipping-address'][':amazonOrderReferenceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['amazon-shipping-address'][':amazonOrderReferenceId'].$put(args, options),
  )
}

export async function deleteV1AmazonOrderRef(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.amazon['order-ref'].$delete(undefined, options))
}

export async function getV1AnalyticsLink(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.analytics.link.$get(undefined, options))
}

export async function getV1AttributeMetadataCustomer(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.attributeMetadata.customer.$get(undefined, options))
}

export async function getV1AttributeMetadataCustomerAttributeAttributeCode(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.attributeMetadata.customer.attribute[':attributeCode'].$get(args, options),
  )
}

export async function getV1AttributeMetadataCustomerCustom(
  args: InferRequestType<typeof client.V1.attributeMetadata.customer.custom.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.attributeMetadata.customer.custom.$get(args, options))
}

export async function getV1AttributeMetadataCustomerFormFormCode(
  args: InferRequestType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.attributeMetadata.customer.form[':formCode'].$get(args, options),
  )
}

export async function getV1AttributeMetadataCustomerAddress(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.attributeMetadata.customerAddress.$get(undefined, options))
}

export async function getV1AttributeMetadataCustomerAddressAttributeAttributeCode(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.attributeMetadata.customerAddress.attribute[':attributeCode'].$get(args, options),
  )
}

export async function getV1AttributeMetadataCustomerAddressCustom(
  args: InferRequestType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.attributeMetadata.customerAddress.custom.$get(args, options))
}

export async function getV1AttributeMetadataCustomerAddressFormFormCode(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.attributeMetadata.customerAddress.form[':formCode'].$get(args, options),
  )
}

export async function getV1BulkBulkUuidDetailedStatus(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.bulk[':bulkUuid']['detailed-status'].$get(args, options))
}

export async function getV1BulkBulkUuidOperationStatusStatus(
  args: InferRequestType<
    (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.bulk[':bulkUuid']['operation-status'][':status'].$get(args, options),
  )
}

export async function getV1BulkBulkUuidStatus(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.bulk[':bulkUuid'].status.$get(args, options))
}

export async function postV1BundleProductsOptionsAdd(
  args: InferRequestType<(typeof client.V1)['bundle-products']['options']['add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['bundle-products'].options.add.$post(args, options))
}

export async function getV1BundleProductsOptionsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.V1['bundle-products'].options.types.$get(undefined, options))
}

export async function putV1BundleProductsOptionsOptionId(
  args: InferRequestType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['bundle-products'].options[':optionId'].$put(args, options))
}

export async function getV1BundleProductsProductSkuChildren(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['bundle-products'][':productSku'].children.$get(args, options),
  )
}

export async function putV1BundleProductsSkuLinksId(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['bundle-products'][':sku'].links[':id'].$put(args, options))
}

export async function postV1BundleProductsSkuLinksOptionId(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['bundle-products'][':sku'].links[':optionId'].$post(args, options),
  )
}

export async function getV1BundleProductsSkuOptionsAll(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['bundle-products'][':sku'].options.all.$get(args, options))
}

export async function getV1BundleProductsSkuOptionsOptionId(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['bundle-products'][':sku'].options[':optionId'].$get(args, options),
  )
}

export async function deleteV1BundleProductsSkuOptionsOptionId(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['bundle-products'][':sku'].options[':optionId'].$delete(args, options),
  )
}

export async function deleteV1BundleProductsSkuOptionsOptionIdChildrenChildSku(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['children'][':childSku']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['bundle-products'][':sku'].options[':optionId'].children[':childSku'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1CartsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.index.$post(undefined, options))
}

export async function getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCode(
  args: InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts['guest-carts'][':cartId'].checkGiftCard[':giftCardCode'].$get(args, options),
  )
}

export async function postV1CartsGuestCartsCartIdGiftCards(
  args: InferRequestType<(typeof client.V1.carts)['guest-carts'][':cartId']['giftCards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts['guest-carts'][':cartId'].giftCards.$post(args, options),
  )
}

export async function deleteV1CartsGuestCartsCartIdGiftCardsGiftCardCode(
  args: InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts['guest-carts'][':cartId'].giftCards[':giftCardCode'].$delete(args, options),
  )
}

export async function getV1CartsLicence(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.licence.$get(undefined, options))
}

export async function getV1CartsMine(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.$get(undefined, options))
}

export async function putV1CartsMine(
  args: InferRequestType<typeof client.V1.carts.mine.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.$put(args, options))
}

export async function postV1CartsMine(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.$post(undefined, options))
}

export async function postV1CartsMineBalanceApply(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.balance.apply.$post(undefined, options))
}

export async function postV1CartsMineBalanceUnapply(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.balance.unapply.$post(undefined, options))
}

export async function getV1CartsMineBillingAddress(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine['billing-address'].$get(undefined, options))
}

export async function postV1CartsMineBillingAddress(
  args: InferRequestType<(typeof client.V1.carts.mine)['billing-address']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['billing-address'].$post(args, options))
}

export async function getV1CartsMineCheckGiftCardGiftCardCode(
  args: InferRequestType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts.mine.checkGiftCard[':giftCardCode'].$get(args, options),
  )
}

export async function postV1CartsMineCheckoutFields(
  args: InferRequestType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['checkout-fields'].$post(args, options))
}

export async function putV1CartsMineCollectTotals(
  args: InferRequestType<(typeof client.V1.carts.mine)['collect-totals']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['collect-totals'].$put(args, options))
}

export async function putV1CartsMineCollectionPointSearchRequest(
  args: InferRequestType<
    (typeof client.V1.carts.mine)['collection-point']['search-request']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts.mine['collection-point']['search-request'].$put(args, options),
  )
}

export async function deleteV1CartsMineCollectionPointSearchRequest(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts.mine['collection-point']['search-request'].$delete(undefined, options),
  )
}

export async function getV1CartsMineCollectionPointSearchResult(options?: ClientRequestOptions) {
  return await parseResponse(
    client.V1.carts.mine['collection-point']['search-result'].$get(undefined, options),
  )
}

export async function postV1CartsMineCollectionPointSelect(
  args: InferRequestType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['collection-point'].select.$post(args, options))
}

export async function getV1CartsMineCoupons(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.coupons.$get(undefined, options))
}

export async function deleteV1CartsMineCoupons(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.coupons.$delete(undefined, options))
}

export async function putV1CartsMineCouponsCouponCode(
  args: InferRequestType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.coupons[':couponCode'].$put(args, options))
}

export async function postV1CartsMineDeliveryOption(
  args: InferRequestType<(typeof client.V1.carts.mine)['delivery-option']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['delivery-option'].$post(args, options))
}

export async function postV1CartsMineEstimateShippingMethods(
  args: InferRequestType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['estimate-shipping-methods'].$post(args, options))
}

export async function postV1CartsMineEstimateShippingMethodsByAddressId(
  args: InferRequestType<
    (typeof client.V1.carts.mine)['estimate-shipping-methods-by-address-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts.mine['estimate-shipping-methods-by-address-id'].$post(args, options),
  )
}

export async function getV1CartsMineGiftMessage(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine['gift-message'].$get(undefined, options))
}

export async function postV1CartsMineGiftMessage(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['gift-message'].$post(args, options))
}

export async function getV1CartsMineGiftMessageItemId(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['gift-message'][':itemId'].$get(args, options))
}

export async function postV1CartsMineGiftMessageItemId(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['gift-message'][':itemId'].$post(args, options))
}

export async function postV1CartsMineGiftCards(
  args: InferRequestType<typeof client.V1.carts.mine.giftCards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.giftCards.$post(args, options))
}

export async function deleteV1CartsMineGiftCardsGiftCardCode(
  args: InferRequestType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.giftCards[':giftCardCode'].$delete(args, options))
}

export async function getV1CartsMineItems(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.items.$get(undefined, options))
}

export async function postV1CartsMineItems(
  args: InferRequestType<typeof client.V1.carts.mine.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.items.$post(args, options))
}

export async function putV1CartsMineItemsItemId(
  args: InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.items[':itemId'].$put(args, options))
}

export async function deleteV1CartsMineItemsItemId(
  args: InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.items[':itemId'].$delete(args, options))
}

export async function putV1CartsMineOrder(
  args: InferRequestType<typeof client.V1.carts.mine.order.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine.order.$put(args, options))
}

export async function getV1CartsMinePaymentInformation(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine['payment-information'].$get(undefined, options))
}

export async function postV1CartsMinePaymentInformation(
  args: InferRequestType<(typeof client.V1.carts.mine)['payment-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['payment-information'].$post(args, options))
}

export async function getV1CartsMinePaymentMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine['payment-methods'].$get(undefined, options))
}

export async function getV1CartsMineSelectedPaymentMethod(options?: ClientRequestOptions) {
  return await parseResponse(
    client.V1.carts.mine['selected-payment-method'].$get(undefined, options),
  )
}

export async function putV1CartsMineSelectedPaymentMethod(
  args: InferRequestType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['selected-payment-method'].$put(args, options))
}

export async function postV1CartsMineSetPaymentInformation(
  args: InferRequestType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['set-payment-information'].$post(args, options))
}

export async function postV1CartsMineShippingInformation(
  args: InferRequestType<(typeof client.V1.carts.mine)['shipping-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['shipping-information'].$post(args, options))
}

export async function getV1CartsMineShippingMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine['shipping-methods'].$get(undefined, options))
}

export async function getV1CartsMineTotals(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.carts.mine.totals.$get(undefined, options))
}

export async function postV1CartsMineTotalsInformation(
  args: InferRequestType<(typeof client.V1.carts.mine)['totals-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.mine['totals-information'].$post(args, options))
}

export async function getV1CartsSearch(
  args: InferRequestType<typeof client.V1.carts.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts.search.$get(args, options))
}

export async function getV1CartsCartId(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].$get(args, options))
}

export async function putV1CartsCartId(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].$put(args, options))
}

export async function getV1CartsCartIdBillingAddress(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId']['billing-address'].$get(args, options))
}

export async function postV1CartsCartIdBillingAddress(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId']['billing-address'].$post(args, options))
}

export async function getV1CartsCartIdCoupons(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].coupons.$get(args, options))
}

export async function deleteV1CartsCartIdCoupons(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].coupons.$delete(args, options))
}

export async function putV1CartsCartIdCouponsCouponCode(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].coupons[':couponCode'].$put(args, options))
}

export async function postV1CartsCartIdEstimateShippingMethods(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId']['estimate-shipping-methods'].$post(args, options),
  )
}

export async function postV1CartsCartIdEstimateShippingMethodsByAddressId(
  args: InferRequestType<
    (typeof client.V1.carts)[':cartId']['estimate-shipping-methods-by-address-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId']['estimate-shipping-methods-by-address-id'].$post(args, options),
  )
}

export async function getV1CartsCartIdGiftMessage(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId']['gift-message'].$get(args, options))
}

export async function postV1CartsCartIdGiftMessage(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId']['gift-message'].$post(args, options))
}

export async function getV1CartsCartIdGiftMessageItemId(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId']['gift-message'][':itemId'].$get(args, options),
  )
}

export async function postV1CartsCartIdGiftMessageItemId(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId']['gift-message'][':itemId'].$post(args, options),
  )
}

export async function putV1CartsCartIdGiftCards(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].giftCards.$put(args, options))
}

export async function deleteV1CartsCartIdGiftCardsGiftCardCode(
  args: InferRequestType<
    (typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId'].giftCards[':giftCardCode'].$delete(args, options),
  )
}

export async function getV1CartsCartIdItems(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].items.$get(args, options))
}

export async function putV1CartsCartIdItemsItemId(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].items[':itemId'].$put(args, options))
}

export async function deleteV1CartsCartIdItemsItemId(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].items[':itemId'].$delete(args, options))
}

export async function putV1CartsCartIdOrder(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['order']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].order.$put(args, options))
}

export async function getV1CartsCartIdPaymentMethods(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId']['payment-methods'].$get(args, options))
}

export async function getV1CartsCartIdSelectedPaymentMethod(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId']['selected-payment-method'].$get(args, options),
  )
}

export async function putV1CartsCartIdSelectedPaymentMethod(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId']['selected-payment-method'].$put(args, options),
  )
}

export async function postV1CartsCartIdShippingInformation(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.carts[':cartId']['shipping-information'].$post(args, options),
  )
}

export async function getV1CartsCartIdShippingMethods(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId']['shipping-methods'].$get(args, options))
}

export async function getV1CartsCartIdTotals(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId'].totals.$get(args, options))
}

export async function postV1CartsCartIdTotalsInformation(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':cartId']['totals-information'].$post(args, options))
}

export async function getV1CartsQuoteIdGiftCards(
  args: InferRequestType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':quoteId'].giftCards.$get(args, options))
}

export async function postV1CartsQuoteIdItems(
  args: InferRequestType<(typeof client.V1.carts)[':quoteId']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.carts[':quoteId'].items.$post(args, options))
}

export async function getV1Categories(
  args: InferRequestType<typeof client.V1.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories.$get(args, options))
}

export async function postV1Categories(
  args: InferRequestType<typeof client.V1.categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories.$post(args, options))
}

export async function getV1CategoriesAttributes(
  args: InferRequestType<typeof client.V1.categories.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories.attributes.$get(args, options))
}

export async function getV1CategoriesAttributesAttributeCode(
  args: InferRequestType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories.attributes[':attributeCode'].$get(args, options))
}

export async function getV1CategoriesAttributesAttributeCodeOptions(
  args: InferRequestType<
    (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.categories.attributes[':attributeCode'].options.$get(args, options),
  )
}

export async function getV1CategoriesList(
  args: InferRequestType<typeof client.V1.categories.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories.list.$get(args, options))
}

export async function getV1CategoriesCategoryId(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories[':categoryId'].$get(args, options))
}

export async function deleteV1CategoriesCategoryId(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories[':categoryId'].$delete(args, options))
}

export async function putV1CategoriesCategoryIdMove(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['move']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories[':categoryId'].move.$put(args, options))
}

export async function getV1CategoriesCategoryIdProducts(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories[':categoryId'].products.$get(args, options))
}

export async function putV1CategoriesCategoryIdProducts(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories[':categoryId'].products.$put(args, options))
}

export async function postV1CategoriesCategoryIdProducts(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories[':categoryId'].products.$post(args, options))
}

export async function deleteV1CategoriesCategoryIdProductsSku(
  args: InferRequestType<
    (typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.categories[':categoryId'].products[':sku'].$delete(args, options),
  )
}

export async function putV1CategoriesId(
  args: InferRequestType<(typeof client.V1.categories)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.categories[':id'].$put(args, options))
}

export async function postV1CmsBlock(
  args: InferRequestType<typeof client.V1.cmsBlock.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsBlock.$post(args, options))
}

export async function getV1CmsBlockSearch(
  args: InferRequestType<typeof client.V1.cmsBlock.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsBlock.search.$get(args, options))
}

export async function getV1CmsBlockBlockId(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsBlock[':blockId'].$get(args, options))
}

export async function deleteV1CmsBlockBlockId(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsBlock[':blockId'].$delete(args, options))
}

export async function putV1CmsBlockId(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsBlock[':id'].$put(args, options))
}

export async function postV1CmsPage(
  args: InferRequestType<typeof client.V1.cmsPage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsPage.$post(args, options))
}

export async function getV1CmsPageSearch(
  args: InferRequestType<typeof client.V1.cmsPage.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsPage.search.$get(args, options))
}

export async function putV1CmsPageId(
  args: InferRequestType<(typeof client.V1.cmsPage)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsPage[':id'].$put(args, options))
}

export async function getV1CmsPagePageId(
  args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsPage[':pageId'].$get(args, options))
}

export async function deleteV1CmsPagePageId(
  args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.cmsPage[':pageId'].$delete(args, options))
}

export async function getV1CompanyIndex(
  args: InferRequestType<typeof client.V1.company.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.index.$get(args, options))
}

export async function postV1CompanyIndex(
  args: InferRequestType<typeof client.V1.company.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.index.$post(args, options))
}

export async function putV1CompanyAssignRoles(
  args: InferRequestType<typeof client.V1.company.assignRoles.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.assignRoles.$put(args, options))
}

export async function getV1CompanyRoleIndex(
  args: InferRequestType<typeof client.V1.company.role.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.role.index.$get(args, options))
}

export async function postV1CompanyRoleIndex(
  args: InferRequestType<typeof client.V1.company.role.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.role.index.$post(args, options))
}

export async function putV1CompanyRoleId(
  args: InferRequestType<(typeof client.V1.company.role)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.role[':id'].$put(args, options))
}

export async function getV1CompanyRoleRoleId(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.role[':roleId'].$get(args, options))
}

export async function deleteV1CompanyRoleRoleId(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.role[':roleId'].$delete(args, options))
}

export async function getV1CompanyRoleRoleIdUsers(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company.role[':roleId'].users.$get(args, options))
}

export async function getV1CompanyCompanyId(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company[':companyId'].$get(args, options))
}

export async function putV1CompanyCompanyId(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company[':companyId'].$put(args, options))
}

export async function deleteV1CompanyCompanyId(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.company[':companyId'].$delete(args, options))
}

export async function getV1CompanyCreditsIndex(
  args: InferRequestType<typeof client.V1.companyCredits.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.companyCredits.index.$get(args, options))
}

export async function getV1CompanyCreditsCompanyCompanyId(
  args: InferRequestType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.companyCredits.company[':companyId'].$get(args, options))
}

export async function getV1CompanyCreditsHistory(
  args: InferRequestType<typeof client.V1.companyCredits.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.companyCredits.history.$get(args, options))
}

export async function putV1CompanyCreditsHistoryHistoryId(
  args: InferRequestType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.companyCredits.history[':historyId'].$put(args, options))
}

export async function getV1CompanyCreditsCreditId(
  args: InferRequestType<(typeof client.V1.companyCredits)[':creditId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.companyCredits[':creditId'].$get(args, options))
}

export async function postV1CompanyCreditsCreditIdDecreaseBalance(
  args: InferRequestType<
    (typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.companyCredits[':creditId'].decreaseBalance.$post(args, options),
  )
}

export async function postV1CompanyCreditsCreditIdIncreaseBalance(
  args: InferRequestType<
    (typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.companyCredits[':creditId'].increaseBalance.$post(args, options),
  )
}

export async function putV1CompanyCreditsId(
  args: InferRequestType<(typeof client.V1.companyCredits)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.companyCredits[':id'].$put(args, options))
}

export async function putV1ConfigurableProductsVariation(
  args: InferRequestType<(typeof client.V1)['configurable-products']['variation']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['configurable-products'].variation.$put(args, options))
}

export async function postV1ConfigurableProductsSkuChild(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['configurable-products'][':sku'].child.$post(args, options))
}

export async function getV1ConfigurableProductsSkuChildren(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['configurable-products'][':sku'].children.$get(args, options),
  )
}

export async function deleteV1ConfigurableProductsSkuChildrenChildSku(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['children'][':childSku']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['configurable-products'][':sku'].children[':childSku'].$delete(args, options),
  )
}

export async function postV1ConfigurableProductsSkuOptions(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['options']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['configurable-products'][':sku'].options.$post(args, options),
  )
}

export async function getV1ConfigurableProductsSkuOptionsAll(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['configurable-products'][':sku'].options.all.$get(args, options),
  )
}

export async function getV1ConfigurableProductsSkuOptionsId(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['configurable-products'][':sku'].options[':id'].$get(args, options),
  )
}

export async function putV1ConfigurableProductsSkuOptionsId(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['configurable-products'][':sku'].options[':id'].$put(args, options),
  )
}

export async function deleteV1ConfigurableProductsSkuOptionsId(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['configurable-products'][':sku'].options[':id'].$delete(args, options),
  )
}

export async function postV1Coupons(
  args: InferRequestType<typeof client.V1.coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons.$post(args, options))
}

export async function postV1CouponsDeleteByCodes(
  args: InferRequestType<typeof client.V1.coupons.deleteByCodes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons.deleteByCodes.$post(args, options))
}

export async function postV1CouponsDeleteByIds(
  args: InferRequestType<typeof client.V1.coupons.deleteByIds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons.deleteByIds.$post(args, options))
}

export async function postV1CouponsGenerate(
  args: InferRequestType<typeof client.V1.coupons.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons.generate.$post(args, options))
}

export async function getV1CouponsSearch(
  args: InferRequestType<typeof client.V1.coupons.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons.search.$get(args, options))
}

export async function getV1CouponsCouponId(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons[':couponId'].$get(args, options))
}

export async function putV1CouponsCouponId(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons[':couponId'].$put(args, options))
}

export async function deleteV1CouponsCouponId(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.coupons[':couponId'].$delete(args, options))
}

export async function postV1Creditmemo(
  args: InferRequestType<typeof client.V1.creditmemo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemo.$post(args, options))
}

export async function postV1CreditmemoRefund(
  args: InferRequestType<typeof client.V1.creditmemo.refund.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemo.refund.$post(args, options))
}

export async function getV1CreditmemoId(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemo[':id'].$get(args, options))
}

export async function putV1CreditmemoId(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemo[':id'].$put(args, options))
}

export async function getV1CreditmemoIdComments(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemo[':id'].comments.$get(args, options))
}

export async function postV1CreditmemoIdComments(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemo[':id'].comments.$post(args, options))
}

export async function postV1CreditmemoIdEmails(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemo[':id'].emails.$post(args, options))
}

export async function getV1Creditmemos(
  args: InferRequestType<typeof client.V1.creditmemos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.creditmemos.$get(args, options))
}

export async function postV1CustomerGroups(
  args: InferRequestType<typeof client.V1.customerGroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups.$post(args, options))
}

export async function getV1CustomerGroupsDefault(
  args: InferRequestType<typeof client.V1.customerGroups.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups.default.$get(args, options))
}

export async function putV1CustomerGroupsDefaultId(
  args: InferRequestType<(typeof client.V1.customerGroups.default)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups.default[':id'].$put(args, options))
}

export async function getV1CustomerGroupsDefaultStoreId(
  args: InferRequestType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups.default[':storeId'].$get(args, options))
}

export async function getV1CustomerGroupsSearch(
  args: InferRequestType<typeof client.V1.customerGroups.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups.search.$get(args, options))
}

export async function getV1CustomerGroupsId(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups[':id'].$get(args, options))
}

export async function putV1CustomerGroupsId(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups[':id'].$put(args, options))
}

export async function deleteV1CustomerGroupsId(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups[':id'].$delete(args, options))
}

export async function getV1CustomerGroupsIdPermissions(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customerGroups[':id'].permissions.$get(args, options))
}

export async function postV1Customers(
  args: InferRequestType<typeof client.V1.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.$post(args, options))
}

export async function getV1CustomersAddressesAddressId(
  args: InferRequestType<(typeof client.V1.customers.addresses)[':addressId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.addresses[':addressId'].$get(args, options))
}

export async function postV1CustomersConfirm(
  args: InferRequestType<typeof client.V1.customers.confirm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.confirm.$post(args, options))
}

export async function postV1CustomersIsEmailAvailable(
  args: InferRequestType<typeof client.V1.customers.isEmailAvailable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.isEmailAvailable.$post(args, options))
}

export async function getV1CustomersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.customers.me.$get(undefined, options))
}

export async function putV1CustomersMe(
  args: InferRequestType<typeof client.V1.customers.me.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.me.$put(args, options))
}

export async function putV1CustomersMeActivate(
  args: InferRequestType<typeof client.V1.customers.me.activate.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.me.activate.$put(args, options))
}

export async function getV1CustomersMeBillingAddress(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.customers.me.billingAddress.$get(undefined, options))
}

export async function putV1CustomersMePassword(
  args: InferRequestType<typeof client.V1.customers.me.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.me.password.$put(args, options))
}

export async function getV1CustomersMeShippingAddress(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.customers.me.shippingAddress.$get(undefined, options))
}

export async function putV1CustomersPassword(
  args: InferRequestType<typeof client.V1.customers.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.password.$put(args, options))
}

export async function postV1CustomersResetPassword(
  args: InferRequestType<typeof client.V1.customers.resetPassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.resetPassword.$post(args, options))
}

export async function getV1CustomersSearch(
  args: InferRequestType<typeof client.V1.customers.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.search.$get(args, options))
}

export async function putV1CustomersValidate(
  args: InferRequestType<typeof client.V1.customers.validate.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers.validate.$put(args, options))
}

export async function getV1CustomersCustomerId(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':customerId'].$get(args, options))
}

export async function putV1CustomersCustomerId(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':customerId'].$put(args, options))
}

export async function deleteV1CustomersCustomerId(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':customerId'].$delete(args, options))
}

export async function getV1CustomersCustomerIdBillingAddress(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':customerId'].billingAddress.$get(args, options))
}

export async function postV1CustomersCustomerIdCarts(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['carts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':customerId'].carts.$post(args, options))
}

export async function getV1CustomersCustomerIdConfirm(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':customerId'].confirm.$get(args, options))
}

export async function getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkToken(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.customers[':customerId'].password.resetLinkToken[':resetPasswordLinkToken'].$get(
      args,
      options,
    ),
  )
}

export async function getV1CustomersCustomerIdPermissionsReadonly(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.customers[':customerId'].permissions.readonly.$get(args, options),
  )
}

export async function getV1CustomersCustomerIdShippingAddress(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':customerId'].shippingAddress.$get(args, options))
}

export async function putV1CustomersEmailActivate(
  args: InferRequestType<(typeof client.V1.customers)[':email']['activate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.customers[':email'].activate.$put(args, options))
}

export async function getV1DirectoryCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.directory.countries.$get(undefined, options))
}

export async function getV1DirectoryCountriesCountryId(
  args: InferRequestType<(typeof client.V1.directory.countries)[':countryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.directory.countries[':countryId'].$get(args, options))
}

export async function getV1DirectoryCurrency(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.directory.currency.$get(undefined, options))
}

export async function postV1EavAttributeSets(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.eav['attribute-sets'].$post(args, options))
}

export async function getV1EavAttributeSetsList(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.eav['attribute-sets'].list.$get(args, options))
}

export async function getV1EavAttributeSetsAttributeSetId(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.eav['attribute-sets'][':attributeSetId'].$get(args, options))
}

export async function putV1EavAttributeSetsAttributeSetId(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.eav['attribute-sets'][':attributeSetId'].$put(args, options))
}

export async function deleteV1EavAttributeSetsAttributeSetId(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.eav['attribute-sets'][':attributeSetId'].$delete(args, options),
  )
}

export async function getV1GiftWrappings(
  args: InferRequestType<(typeof client.V1)['gift-wrappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['gift-wrappings'].$get(args, options))
}

export async function postV1GiftWrappings(
  args: InferRequestType<(typeof client.V1)['gift-wrappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['gift-wrappings'].$post(args, options))
}

export async function getV1GiftWrappingsId(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['gift-wrappings'][':id'].$get(args, options))
}

export async function deleteV1GiftWrappingsId(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['gift-wrappings'][':id'].$delete(args, options))
}

export async function putV1GiftWrappingsWrappingId(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['gift-wrappings'][':wrappingId'].$put(args, options))
}

export async function postV1GiftregistryMineEstimateShippingMethods(
  args: InferRequestType<
    (typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.giftregistry.mine['estimate-shipping-methods'].$post(args, options),
  )
}

export async function postV1GuestCarts(options?: ClientRequestOptions) {
  return await parseResponse(client.V1['guest-carts'].$post(undefined, options))
}

export async function getV1GuestCartsCartId(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].$get(args, options))
}

export async function putV1GuestCartsCartId(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].$put(args, options))
}

export async function getV1GuestCartsCartIdBillingAddress(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['billing-address'].$get(args, options),
  )
}

export async function postV1GuestCartsCartIdBillingAddress(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['billing-address'].$post(args, options),
  )
}

export async function postV1GuestCartsCartIdCheckoutFields(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['checkout-fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['checkout-fields'].$post(args, options),
  )
}

export async function putV1GuestCartsCartIdCollectTotals(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['collect-totals']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['collect-totals'].$put(args, options),
  )
}

export async function putV1GuestCartsCartIdCollectionPointSearchRequest(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['collection-point']['search-request'].$put(args, options),
  )
}

export async function deleteV1GuestCartsCartIdCollectionPointSearchRequest(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['collection-point']['search-request'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1GuestCartsCartIdCollectionPointSearchResult(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['collection-point']['search-result'].$get(args, options),
  )
}

export async function postV1GuestCartsCartIdCollectionPointSelect(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['select']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['collection-point'].select.$post(args, options),
  )
}

export async function getV1GuestCartsCartIdCoupons(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].coupons.$get(args, options))
}

export async function deleteV1GuestCartsCartIdCoupons(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].coupons.$delete(args, options))
}

export async function putV1GuestCartsCartIdCouponsCouponCode(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['coupons'][':couponCode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId'].coupons[':couponCode'].$put(args, options),
  )
}

export async function postV1GuestCartsCartIdDeliveryOption(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['delivery-option']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['delivery-option'].$post(args, options),
  )
}

export async function postV1GuestCartsCartIdEstimateShippingMethods(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['estimate-shipping-methods']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['estimate-shipping-methods'].$post(args, options),
  )
}

export async function getV1GuestCartsCartIdGiftMessage(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['gift-message'].$get(args, options),
  )
}

export async function postV1GuestCartsCartIdGiftMessage(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['gift-message'].$post(args, options),
  )
}

export async function getV1GuestCartsCartIdGiftMessageItemId(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['gift-message'][':itemId'].$get(args, options),
  )
}

export async function postV1GuestCartsCartIdGiftMessageItemId(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['gift-message'][':itemId'].$post(args, options),
  )
}

export async function getV1GuestCartsCartIdItems(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].items.$get(args, options))
}

export async function postV1GuestCartsCartIdItems(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].items.$post(args, options))
}

export async function putV1GuestCartsCartIdItemsItemId(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId'].items[':itemId'].$put(args, options),
  )
}

export async function deleteV1GuestCartsCartIdItemsItemId(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId'].items[':itemId'].$delete(args, options),
  )
}

export async function putV1GuestCartsCartIdOrder(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].order.$put(args, options))
}

export async function getV1GuestCartsCartIdPaymentInformation(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['payment-information'].$get(args, options),
  )
}

export async function postV1GuestCartsCartIdPaymentInformation(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['payment-information'].$post(args, options),
  )
}

export async function getV1GuestCartsCartIdPaymentMethods(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['payment-methods'].$get(args, options),
  )
}

export async function getV1GuestCartsCartIdSelectedPaymentMethod(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['selected-payment-method'].$get(args, options),
  )
}

export async function putV1GuestCartsCartIdSelectedPaymentMethod(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['selected-payment-method'].$put(args, options),
  )
}

export async function postV1GuestCartsCartIdSetPaymentInformation(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['set-payment-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['set-payment-information'].$post(args, options),
  )
}

export async function postV1GuestCartsCartIdShippingInformation(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['shipping-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['shipping-information'].$post(args, options),
  )
}

export async function getV1GuestCartsCartIdShippingMethods(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['shipping-methods'].$get(args, options),
  )
}

export async function getV1GuestCartsCartIdTotals(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['guest-carts'][':cartId'].totals.$get(args, options))
}

export async function postV1GuestCartsCartIdTotalsInformation(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-carts'][':cartId']['totals-information'].$post(args, options),
  )
}

export async function postV1GuestGiftregistryCartIdEstimateShippingMethods(
  args: InferRequestType<
    (typeof client.V1)['guest-giftregistry'][':cartId']['estimate-shipping-methods']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['guest-giftregistry'][':cartId']['estimate-shipping-methods'].$post(args, options),
  )
}

export async function putV1HierarchyMoveId(
  args: InferRequestType<(typeof client.V1.hierarchy.move)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.hierarchy.move[':id'].$put(args, options))
}

export async function getV1HierarchyId(
  args: InferRequestType<(typeof client.V1.hierarchy)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.hierarchy[':id'].$get(args, options))
}

export async function postV1IntegrationAdminToken(
  args: InferRequestType<typeof client.V1.integration.admin.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.integration.admin.token.$post(args, options))
}

export async function postV1IntegrationCustomerToken(
  args: InferRequestType<typeof client.V1.integration.customer.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.integration.customer.token.$post(args, options))
}

export async function postV1InvoiceInvoiceIdRefund(
  args: InferRequestType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoice[':invoiceId'].refund.$post(args, options))
}

export async function getV1Invoices(
  args: InferRequestType<typeof client.V1.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices.$get(args, options))
}

export async function postV1InvoicesIndex(
  args: InferRequestType<typeof client.V1.invoices.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices.index.$post(args, options))
}

export async function postV1InvoicesComments(
  args: InferRequestType<typeof client.V1.invoices.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices.comments.$post(args, options))
}

export async function getV1InvoicesId(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices[':id'].$get(args, options))
}

export async function postV1InvoicesIdCapture(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices[':id'].capture.$post(args, options))
}

export async function getV1InvoicesIdComments(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices[':id'].comments.$get(args, options))
}

export async function postV1InvoicesIdEmails(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices[':id'].emails.$post(args, options))
}

export async function postV1InvoicesIdVoid(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.invoices[':id'].void.$post(args, options))
}

export async function getV1Modules(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.modules.$get(undefined, options))
}

export async function getV1NegotiableCartsCartIdBillingAddress(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['billing-address'].$get(args, options),
  )
}

export async function postV1NegotiableCartsCartIdBillingAddress(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['billing-address'].$post(args, options),
  )
}

export async function deleteV1NegotiableCartsCartIdCoupons(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['coupons']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId'].coupons.$delete(args, options),
  )
}

export async function putV1NegotiableCartsCartIdCouponsCouponCode(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['coupons'][':couponCode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId'].coupons[':couponCode'].$put(args, options),
  )
}

export async function postV1NegotiableCartsCartIdEstimateShippingMethods(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['estimate-shipping-methods'].$post(args, options),
  )
}

export async function postV1NegotiableCartsCartIdEstimateShippingMethodsByAddressId(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id'].$post(
      args,
      options,
    ),
  )
}

export async function postV1NegotiableCartsCartIdGiftCards(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['giftCards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId'].giftCards.$post(args, options),
  )
}

export async function deleteV1NegotiableCartsCartIdGiftCardsGiftCardCode(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId'].giftCards[':giftCardCode'].$delete(args, options),
  )
}

export async function getV1NegotiableCartsCartIdPaymentInformation(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['payment-information'].$get(args, options),
  )
}

export async function postV1NegotiableCartsCartIdPaymentInformation(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['payment-information'].$post(args, options),
  )
}

export async function postV1NegotiableCartsCartIdSetPaymentInformation(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['set-payment-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['set-payment-information'].$post(args, options),
  )
}

export async function postV1NegotiableCartsCartIdShippingInformation(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['shipping-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['negotiable-carts'][':cartId']['shipping-information'].$post(args, options),
  )
}

export async function getV1NegotiableCartsCartIdTotals(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['negotiable-carts'][':cartId'].totals.$get(args, options))
}

export async function getV1NegotiableQuoteAttachmentContent(
  args: InferRequestType<typeof client.V1.negotiableQuote.attachmentContent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.negotiableQuote.attachmentContent.$get(args, options))
}

export async function postV1NegotiableQuoteDecline(
  args: InferRequestType<typeof client.V1.negotiableQuote.decline.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.negotiableQuote.decline.$post(args, options))
}

export async function postV1NegotiableQuotePricesUpdated(
  args: InferRequestType<typeof client.V1.negotiableQuote.pricesUpdated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.negotiableQuote.pricesUpdated.$post(args, options))
}

export async function postV1NegotiableQuoteRequest(
  args: InferRequestType<typeof client.V1.negotiableQuote.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.negotiableQuote.request.$post(args, options))
}

export async function postV1NegotiableQuoteSubmitToCustomer(
  args: InferRequestType<typeof client.V1.negotiableQuote.submitToCustomer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.negotiableQuote.submitToCustomer.$post(args, options))
}

export async function putV1NegotiableQuoteQuoteId(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.negotiableQuote[':quoteId'].$put(args, options))
}

export async function getV1NegotiableQuoteQuoteIdComments(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.negotiableQuote[':quoteId'].comments.$get(args, options))
}

export async function putV1NegotiableQuoteQuoteIdShippingMethod(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['shippingMethod']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.negotiableQuote[':quoteId'].shippingMethod.$put(args, options),
  )
}

export async function postV1OrderOrderIdInvoice(
  args: InferRequestType<(typeof client.V1.order)[':orderId']['invoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.order[':orderId'].invoice.$post(args, options))
}

export async function postV1OrderOrderIdRefund(
  args: InferRequestType<(typeof client.V1.order)[':orderId']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.order[':orderId'].refund.$post(args, options))
}

export async function postV1OrderOrderIdShip(
  args: InferRequestType<(typeof client.V1.order)[':orderId']['ship']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.order[':orderId'].ship.$post(args, options))
}

export async function getV1Orders(
  args: InferRequestType<typeof client.V1.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders.$get(args, options))
}

export async function postV1OrdersIndex(
  args: InferRequestType<typeof client.V1.orders.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders.index.$post(args, options))
}

export async function putV1OrdersCreate(
  args: InferRequestType<typeof client.V1.orders.create.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders.create.$put(args, options))
}

export async function getV1OrdersItems(
  args: InferRequestType<typeof client.V1.orders.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders.items.$get(args, options))
}

export async function getV1OrdersItemsId(
  args: InferRequestType<(typeof client.V1.orders.items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders.items[':id'].$get(args, options))
}

export async function getV1OrdersId(
  args: InferRequestType<(typeof client.V1.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].$get(args, options))
}

export async function postV1OrdersIdCancel(
  args: InferRequestType<(typeof client.V1.orders)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].cancel.$post(args, options))
}

export async function getV1OrdersIdComments(
  args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].comments.$get(args, options))
}

export async function postV1OrdersIdComments(
  args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].comments.$post(args, options))
}

export async function postV1OrdersIdEmails(
  args: InferRequestType<(typeof client.V1.orders)[':id']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].emails.$post(args, options))
}

export async function postV1OrdersIdHold(
  args: InferRequestType<(typeof client.V1.orders)[':id']['hold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].hold.$post(args, options))
}

export async function getV1OrdersIdStatuses(
  args: InferRequestType<(typeof client.V1.orders)[':id']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].statuses.$get(args, options))
}

export async function postV1OrdersIdUnhold(
  args: InferRequestType<(typeof client.V1.orders)[':id']['unhold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':id'].unhold.$post(args, options))
}

export async function putV1OrdersParentId(
  args: InferRequestType<(typeof client.V1.orders)[':parent_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.orders[':parent_id'].$put(args, options))
}

export async function getV1Products(
  args: InferRequestType<typeof client.V1.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.$get(args, options))
}

export async function postV1Products(
  args: InferRequestType<typeof client.V1.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.$post(args, options))
}

export async function getV1ProductsRenderInfo(
  args: InferRequestType<(typeof client.V1)['products-render-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1['products-render-info'].$get(args, options))
}

export async function postV1ProductsAttributeSets(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['attribute-sets'].$post(args, options))
}

export async function postV1ProductsAttributeSetsAttributes(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['attribute-sets'].attributes.$post(args, options))
}

export async function postV1ProductsAttributeSetsGroups(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['attribute-sets'].groups.$post(args, options))
}

export async function getV1ProductsAttributeSetsGroupsList(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['attribute-sets'].groups.list.$get(args, options))
}

export async function deleteV1ProductsAttributeSetsGroupsGroupId(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['attribute-sets'].groups[':groupId'].$delete(args, options),
  )
}

export async function getV1ProductsAttributeSetsSetsList(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['attribute-sets'].sets.list.$get(args, options))
}

export async function getV1ProductsAttributeSetsAttributeSetId(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['attribute-sets'][':attributeSetId'].$get(args, options),
  )
}

export async function putV1ProductsAttributeSetsAttributeSetId(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['attribute-sets'][':attributeSetId'].$put(args, options),
  )
}

export async function deleteV1ProductsAttributeSetsAttributeSetId(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['attribute-sets'][':attributeSetId'].$delete(args, options),
  )
}

export async function getV1ProductsAttributeSetsAttributeSetIdAttributes(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['attribute-sets'][':attributeSetId'].attributes.$get(args, options),
  )
}

export async function deleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCode(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes'][':attributeCode']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['attribute-sets'][':attributeSetId'].attributes[':attributeCode'].$delete(
      args,
      options,
    ),
  )
}

export async function putV1ProductsAttributeSetsAttributeSetIdGroups(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['groups']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['attribute-sets'][':attributeSetId'].groups.$put(args, options),
  )
}

export async function getV1ProductsAttributes(
  args: InferRequestType<typeof client.V1.products.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.attributes.$get(args, options))
}

export async function postV1ProductsAttributes(
  args: InferRequestType<typeof client.V1.products.attributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.attributes.$post(args, options))
}

export async function getV1ProductsAttributesTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.products.attributes.types.$get(undefined, options))
}

export async function getV1ProductsAttributesAttributeCode(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.attributes[':attributeCode'].$get(args, options))
}

export async function putV1ProductsAttributesAttributeCode(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.attributes[':attributeCode'].$put(args, options))
}

export async function deleteV1ProductsAttributesAttributeCode(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.attributes[':attributeCode'].$delete(args, options))
}

export async function getV1ProductsAttributesAttributeCodeOptions(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products.attributes[':attributeCode'].options.$get(args, options),
  )
}

export async function postV1ProductsAttributesAttributeCodeOptions(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products.attributes[':attributeCode'].options.$post(args, options),
  )
}

export async function deleteV1ProductsAttributesAttributeCodeOptionsOptionId(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options'][':optionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products.attributes[':attributeCode'].options[':optionId'].$delete(args, options),
  )
}

export async function postV1ProductsBasePrices(
  args: InferRequestType<(typeof client.V1.products)['base-prices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['base-prices'].$post(args, options))
}

export async function postV1ProductsBasePricesInformation(
  args: InferRequestType<(typeof client.V1.products)['base-prices-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['base-prices-information'].$post(args, options))
}

export async function postV1ProductsCost(
  args: InferRequestType<typeof client.V1.products.cost.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.cost.$post(args, options))
}

export async function postV1ProductsCostDelete(
  args: InferRequestType<(typeof client.V1.products)['cost-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['cost-delete'].$post(args, options))
}

export async function postV1ProductsCostInformation(
  args: InferRequestType<(typeof client.V1.products)['cost-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['cost-information'].$post(args, options))
}

export async function deleteV1ProductsDownloadableLinksSamplesId(
  args: InferRequestType<
    (typeof client.V1.products)['downloadable-links']['samples'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products['downloadable-links'].samples[':id'].$delete(args, options),
  )
}

export async function deleteV1ProductsDownloadableLinksId(
  args: InferRequestType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['downloadable-links'][':id'].$delete(args, options))
}

export async function getV1ProductsLinksTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.products.links.types.$get(undefined, options))
}

export async function getV1ProductsLinksTypeAttributes(
  args: InferRequestType<(typeof client.V1.products.links)[':type']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.links[':type'].attributes.$get(args, options))
}

export async function getV1ProductsMediaTypesAttributeSetName(
  args: InferRequestType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products.media.types[':attributeSetName'].$get(args, options),
  )
}

export async function postV1ProductsOptions(
  args: InferRequestType<typeof client.V1.products.options.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.options.$post(args, options))
}

export async function getV1ProductsOptionsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.products.options.types.$get(undefined, options))
}

export async function putV1ProductsOptionsOptionId(
  args: InferRequestType<(typeof client.V1.products.options)[':optionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products.options[':optionId'].$put(args, options))
}

export async function postV1ProductsSpecialPrice(
  args: InferRequestType<(typeof client.V1.products)['special-price']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['special-price'].$post(args, options))
}

export async function postV1ProductsSpecialPriceDelete(
  args: InferRequestType<(typeof client.V1.products)['special-price-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['special-price-delete'].$post(args, options))
}

export async function postV1ProductsSpecialPriceInformation(
  args: InferRequestType<(typeof client.V1.products)['special-price-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['special-price-information'].$post(args, options))
}

export async function putV1ProductsTierPrices(
  args: InferRequestType<(typeof client.V1.products)['tier-prices']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['tier-prices'].$put(args, options))
}

export async function postV1ProductsTierPrices(
  args: InferRequestType<(typeof client.V1.products)['tier-prices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['tier-prices'].$post(args, options))
}

export async function postV1ProductsTierPricesDelete(
  args: InferRequestType<(typeof client.V1.products)['tier-prices-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['tier-prices-delete'].$post(args, options))
}

export async function postV1ProductsTierPricesInformation(
  args: InferRequestType<(typeof client.V1.products)['tier-prices-information']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products['tier-prices-information'].$post(args, options))
}

export async function getV1ProductsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.products.types.$get(undefined, options))
}

export async function putV1ProductsProductSkuStockItemsItemId(
  args: InferRequestType<
    (typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':productSku'].stockItems[':itemId'].$put(args, options),
  )
}

export async function getV1ProductsSku(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].$get(args, options))
}

export async function putV1ProductsSku(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].$put(args, options))
}

export async function deleteV1ProductsSku(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].$delete(args, options))
}

export async function getV1ProductsSkuDownloadableLinks(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku']['downloadable-links'].$get(args, options))
}

export async function postV1ProductsSkuDownloadableLinks(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku']['downloadable-links'].$post(args, options))
}

export async function getV1ProductsSkuDownloadableLinksSamples(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku']['downloadable-links'].samples.$get(args, options),
  )
}

export async function postV1ProductsSkuDownloadableLinksSamples(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku']['downloadable-links'].samples.$post(args, options),
  )
}

export async function putV1ProductsSkuDownloadableLinksSamplesId(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku']['downloadable-links'].samples[':id'].$put(args, options),
  )
}

export async function putV1ProductsSkuDownloadableLinksId(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku']['downloadable-links'][':id'].$put(args, options),
  )
}

export async function getV1ProductsSkuGroupPricesCustomerGroupIdTiers(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers.$get(args, options),
  )
}

export async function deleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQty(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers[':qty'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePrice(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['price'][':price']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers[':qty'].price[
      ':price'
    ].$post(args, options),
  )
}

export async function putV1ProductsSkuLinks(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].links.$put(args, options))
}

export async function postV1ProductsSkuLinks(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].links.$post(args, options))
}

export async function getV1ProductsSkuLinksType(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].links[':type'].$get(args, options))
}

export async function deleteV1ProductsSkuLinksTypeLinkedProductSku(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['links'][':type'][':linkedProductSku']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku'].links[':type'][':linkedProductSku'].$delete(args, options),
  )
}

export async function getV1ProductsSkuMedia(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].media.$get(args, options))
}

export async function postV1ProductsSkuMedia(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].media.$post(args, options))
}

export async function getV1ProductsSkuMediaEntryId(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].media[':entryId'].$get(args, options))
}

export async function putV1ProductsSkuMediaEntryId(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].media[':entryId'].$put(args, options))
}

export async function deleteV1ProductsSkuMediaEntryId(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].media[':entryId'].$delete(args, options))
}

export async function getV1ProductsSkuOptions(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].options.$get(args, options))
}

export async function getV1ProductsSkuOptionsOptionId(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].options[':optionId'].$get(args, options))
}

export async function deleteV1ProductsSkuOptionsOptionId(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].options[':optionId'].$delete(args, options))
}

export async function putV1ProductsSkuWebsites(
  args: InferRequestType<(typeof client.V1.products)[':sku']['websites']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].websites.$put(args, options))
}

export async function postV1ProductsSkuWebsites(
  args: InferRequestType<(typeof client.V1.products)[':sku']['websites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.products[':sku'].websites.$post(args, options))
}

export async function deleteV1ProductsSkuWebsitesWebsiteId(
  args: InferRequestType<(typeof client.V1.products)[':sku']['websites'][':websiteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.products[':sku'].websites[':websiteId'].$delete(args, options),
  )
}

export async function postV1RequisitionLists(
  args: InferRequestType<typeof client.V1.requisition_lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.requisition_lists.$post(args, options))
}

export async function getV1Returns(
  args: InferRequestType<typeof client.V1.returns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns.$get(args, options))
}

export async function postV1Returns(
  args: InferRequestType<typeof client.V1.returns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns.$post(args, options))
}

export async function getV1ReturnsId(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id'].$get(args, options))
}

export async function putV1ReturnsId(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id'].$put(args, options))
}

export async function deleteV1ReturnsId(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id'].$delete(args, options))
}

export async function getV1ReturnsIdComments(
  args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id'].comments.$get(args, options))
}

export async function postV1ReturnsIdComments(
  args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id'].comments.$post(args, options))
}

export async function getV1ReturnsIdLabels(
  args: InferRequestType<(typeof client.V1.returns)[':id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id'].labels.$get(args, options))
}

export async function getV1ReturnsIdTrackingNumbers(
  args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id']['tracking-numbers'].$get(args, options))
}

export async function postV1ReturnsIdTrackingNumbers(
  args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returns[':id']['tracking-numbers'].$post(args, options))
}

export async function deleteV1ReturnsIdTrackingNumbersTrackId(
  args: InferRequestType<
    (typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.returns[':id']['tracking-numbers'][':trackId'].$delete(args, options),
  )
}

export async function getV1ReturnsAttributeMetadata(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.returnsAttributeMetadata.$get(undefined, options))
}

export async function getV1ReturnsAttributeMetadataCustom(
  args: InferRequestType<typeof client.V1.returnsAttributeMetadata.custom.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.returnsAttributeMetadata.custom.$get(args, options))
}

export async function getV1ReturnsAttributeMetadataFormFormCode(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.returnsAttributeMetadata.form[':formCode'].$get(args, options),
  )
}

export async function getV1ReturnsAttributeMetadataAttributeCode(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.returnsAttributeMetadata[':attributeCode'].$get(args, options),
  )
}

export async function postV1RewardMineUseReward(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.reward.mine['use-reward'].$post(undefined, options))
}

export async function postV1SalesRules(
  args: InferRequestType<typeof client.V1.salesRules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.salesRules.$post(args, options))
}

export async function getV1SalesRulesSearch(
  args: InferRequestType<typeof client.V1.salesRules.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.salesRules.search.$get(args, options))
}

export async function getV1SalesRulesRuleId(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.salesRules[':ruleId'].$get(args, options))
}

export async function putV1SalesRulesRuleId(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.salesRules[':ruleId'].$put(args, options))
}

export async function deleteV1SalesRulesRuleId(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.salesRules[':ruleId'].$delete(args, options))
}

export async function getV1Search(
  args: InferRequestType<typeof client.V1.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.search.$get(args, options))
}

export async function postV1SharedCatalog(
  args: InferRequestType<typeof client.V1.sharedCatalog.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog.$post(args, options))
}

export async function getV1SharedCatalogIndex(
  args: InferRequestType<typeof client.V1.sharedCatalog.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog.index.$get(args, options))
}

export async function putV1SharedCatalogId(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':id'].$put(args, options))
}

export async function postV1SharedCatalogIdAssignCategories(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':id'].assignCategories.$post(args, options))
}

export async function postV1SharedCatalogIdAssignProducts(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':id'].assignProducts.$post(args, options))
}

export async function getV1SharedCatalogIdCategories(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':id'].categories.$get(args, options))
}

export async function getV1SharedCatalogIdProducts(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':id'].products.$get(args, options))
}

export async function postV1SharedCatalogIdUnassignCategories(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignCategories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':id'].unassignCategories.$post(args, options))
}

export async function postV1SharedCatalogIdUnassignProducts(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':id'].unassignProducts.$post(args, options))
}

export async function getV1SharedCatalogSharedCatalogId(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':sharedCatalogId'].$get(args, options))
}

export async function deleteV1SharedCatalogSharedCatalogId(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.sharedCatalog[':sharedCatalogId'].$delete(args, options))
}

export async function postV1SharedCatalogSharedCatalogIdAssignCompanies(
  args: InferRequestType<
    (typeof client.V1.sharedCatalog)[':sharedCatalogId']['assignCompanies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.sharedCatalog[':sharedCatalogId'].assignCompanies.$post(args, options),
  )
}

export async function getV1SharedCatalogSharedCatalogIdCompanies(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.sharedCatalog[':sharedCatalogId'].companies.$get(args, options),
  )
}

export async function postV1SharedCatalogSharedCatalogIdUnassignCompanies(
  args: InferRequestType<
    (typeof client.V1.sharedCatalog)[':sharedCatalogId']['unassignCompanies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1.sharedCatalog[':sharedCatalogId'].unassignCompanies.$post(args, options),
  )
}

export async function postV1ShipmentIndex(
  args: InferRequestType<typeof client.V1.shipment.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment.index.$post(args, options))
}

export async function postV1ShipmentTrack(
  args: InferRequestType<typeof client.V1.shipment.track.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment.track.$post(args, options))
}

export async function deleteV1ShipmentTrackId(
  args: InferRequestType<(typeof client.V1.shipment.track)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment.track[':id'].$delete(args, options))
}

export async function getV1ShipmentId(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment[':id'].$get(args, options))
}

export async function getV1ShipmentIdComments(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment[':id'].comments.$get(args, options))
}

export async function postV1ShipmentIdComments(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment[':id'].comments.$post(args, options))
}

export async function postV1ShipmentIdEmails(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment[':id'].emails.$post(args, options))
}

export async function getV1ShipmentIdLabel(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['label']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipment[':id'].label.$get(args, options))
}

export async function getV1Shipments(
  args: InferRequestType<typeof client.V1.shipments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.shipments.$get(args, options))
}

export async function getV1StockItemsLowStockIndex(
  args: InferRequestType<typeof client.V1.stockItems.lowStock.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.stockItems.lowStock.index.$get(args, options))
}

export async function getV1StockItemsProductSku(
  args: InferRequestType<(typeof client.V1.stockItems)[':productSku']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.stockItems[':productSku'].$get(args, options))
}

export async function getV1StockStatusesProductSku(
  args: InferRequestType<(typeof client.V1.stockStatuses)[':productSku']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.stockStatuses[':productSku'].$get(args, options))
}

export async function getV1StoreStoreConfigs(
  args: InferRequestType<typeof client.V1.store.storeConfigs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.store.storeConfigs.$get(args, options))
}

export async function getV1StoreStoreGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.store.storeGroups.$get(undefined, options))
}

export async function getV1StoreStoreViews(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.store.storeViews.$get(undefined, options))
}

export async function getV1StoreWebsites(options?: ClientRequestOptions) {
  return await parseResponse(client.V1.store.websites.$get(undefined, options))
}

export async function postV1TaxClasses(
  args: InferRequestType<typeof client.V1.taxClasses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxClasses.$post(args, options))
}

export async function getV1TaxClassesSearch(
  args: InferRequestType<typeof client.V1.taxClasses.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxClasses.search.$get(args, options))
}

export async function putV1TaxClassesClassId(
  args: InferRequestType<(typeof client.V1.taxClasses)[':classId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxClasses[':classId'].$put(args, options))
}

export async function getV1TaxClassesTaxClassId(
  args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxClasses[':taxClassId'].$get(args, options))
}

export async function deleteV1TaxClassesTaxClassId(
  args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxClasses[':taxClassId'].$delete(args, options))
}

export async function putV1TaxRates(
  args: InferRequestType<typeof client.V1.taxRates.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRates.$put(args, options))
}

export async function postV1TaxRates(
  args: InferRequestType<typeof client.V1.taxRates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRates.$post(args, options))
}

export async function getV1TaxRatesSearch(
  args: InferRequestType<typeof client.V1.taxRates.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRates.search.$get(args, options))
}

export async function getV1TaxRatesRateId(
  args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRates[':rateId'].$get(args, options))
}

export async function deleteV1TaxRatesRateId(
  args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRates[':rateId'].$delete(args, options))
}

export async function putV1TaxRules(
  args: InferRequestType<typeof client.V1.taxRules.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRules.$put(args, options))
}

export async function postV1TaxRules(
  args: InferRequestType<typeof client.V1.taxRules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRules.$post(args, options))
}

export async function getV1TaxRulesSearch(
  args: InferRequestType<typeof client.V1.taxRules.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRules.search.$get(args, options))
}

export async function getV1TaxRulesRuleId(
  args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRules[':ruleId'].$get(args, options))
}

export async function deleteV1TaxRulesRuleId(
  args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.taxRules[':ruleId'].$delete(args, options))
}

export async function getV1TeamIndex(
  args: InferRequestType<typeof client.V1.team.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.team.index.$get(args, options))
}

export async function postV1TeamCompanyId(
  args: InferRequestType<(typeof client.V1.team)[':companyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.team[':companyId'].$post(args, options))
}

export async function getV1TeamTeamId(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.team[':teamId'].$get(args, options))
}

export async function putV1TeamTeamId(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.team[':teamId'].$put(args, options))
}

export async function deleteV1TeamTeamId(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.team[':teamId'].$delete(args, options))
}

export async function putV1TemandoRmaRmaIdShipments(
  args: InferRequestType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.temando.rma[':rmaId'].shipments.$put(args, options))
}

export async function getV1Transactions(
  args: InferRequestType<typeof client.V1.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.transactions.$get(args, options))
}

export async function getV1TransactionsId(
  args: InferRequestType<(typeof client.V1.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.V1.transactions[':id'].$get(args, options))
}

export async function postV1WorldpayGuestCartsCartIdPaymentInformation(
  args: InferRequestType<
    (typeof client.V1)['worldpay-guest-carts'][':cartId']['payment-information']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.V1['worldpay-guest-carts'][':cartId']['payment-information'].$post(args, options),
  )
}
