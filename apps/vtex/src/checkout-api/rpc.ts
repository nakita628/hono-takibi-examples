import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiCheckoutPubGatewayCallbackOrderGroup(
  args: InferRequestType<(typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.gatewayCallback[':orderGroup'].$post(args, options),
  )
}

export async function getApiCheckoutPubOrderForm(
  args: InferRequestType<typeof client.api.checkout.pub.orderForm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub.orderForm.$get(args, options))
}

export async function getApiCheckoutPubOrderFormOrderFormId(
  args: InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub.orderForm[':orderFormId'].$get(args, options))
}

export async function postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesData(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientPreferencesData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].attachments.clientPreferencesData.$post(
      args,
      options,
    ),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileData(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientProfileData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].attachments.clientProfileData.$post(
      args,
      options,
    ),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingData(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['marketingData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].attachments.marketingData.$post(
      args,
      options,
    ),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextData(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['merchantContextData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].attachments.merchantContextData.$post(
      args,
      options,
    ),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentData(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['paymentData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].attachments.paymentData.$post(args, options),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingData(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['shippingData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].attachments.shippingData.$post(args, options),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdCoupons(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['coupons']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].coupons.$post(args, options),
  )
}

export async function putApiCheckoutPubOrderFormOrderFormIdCustomDataAppId(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'].$put(args, options),
  )
}

export async function putApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldName(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'][':appFieldName'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldName(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'][':appFieldName'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiCheckoutPubOrderFormOrderFormIdInstallments(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].installments.$get(args, options),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdItems(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].items.$post(args, options),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdItemsRemoveAll(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['removeAll']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].items.removeAll.$post(args, options),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdItemsUpdate(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].items.update.$post(args, options),
  )
}

export async function putApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPrice(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items'][':itemIndex']['price']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].items[':itemIndex'].price.$put(args, options),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdMessagesClear(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['messages']['clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].messages.clear.$post(args, options),
  )
}

export async function patchApiCheckoutPubOrderFormOrderFormIdProfile(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['profile']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].profile.$patch(args, options),
  )
}

export async function postApiCheckoutPubOrderFormOrderFormIdTransaction(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub.orderForm[':orderFormId'].transaction.$post(args, options),
  )
}

export async function postApiCheckoutPubOrderFormsSimulation(
  args: InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub.orderForms.simulation.$post(args, options))
}

export async function putApiCheckoutPubOrders(
  args: InferRequestType<typeof client.api.checkout.pub.orders.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub.orders.$put(args, options))
}

export async function getApiCheckoutPubPickupPoints(
  args: InferRequestType<(typeof client.api.checkout.pub)['pickup-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub['pickup-points'].$get(args, options))
}

export async function getApiCheckoutPubPostalCodeCountryCodePostalCode(
  args: InferRequestType<
    (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pub['postal-code'][':countryCode'][':postalCode'].$get(args, options),
  )
}

export async function getApiCheckoutPubProfiles(
  args: InferRequestType<typeof client.api.checkout.pub.profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub.profiles.$get(args, options))
}

export async function getApiCheckoutPubRegionsRegionId(
  args: InferRequestType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pub.regions[':regionId'].$get(args, options))
}

export async function getApiCheckoutPvtConfigurationOrderForm(
  args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pvt.configuration.orderForm.$get(args, options))
}

export async function postApiCheckoutPvtConfigurationOrderForm(
  args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.checkout.pvt.configuration.orderForm.$post(args, options))
}

export async function getApiCheckoutPvtConfigurationWindowToChangeSeller(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pvt.configuration['window-to-change-seller'].$get(args, options),
  )
}

export async function postApiCheckoutPvtConfigurationWindowToChangeSeller(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pvt.configuration['window-to-change-seller'].$post(args, options),
  )
}

export async function getCheckoutChangeToAnonymousUserOrderFormId(
  args: InferRequestType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.checkout.changeToAnonymousUser[':orderFormId'].$get(args, options),
  )
}
