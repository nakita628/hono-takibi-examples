import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWalletobjectsV1EventTicketClass(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.eventTicketClass.$get(args, options))
}

export async function postWalletobjectsV1EventTicketClass(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.eventTicketClass.$post(args, options))
}

export async function getWalletobjectsV1EventTicketClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketClass[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1EventTicketClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketClass[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1EventTicketClassResourceId(
  args: InferRequestType<
    (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketClass[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1EventTicketClassResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketClass[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1EventTicketObject(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.eventTicketObject.$get(args, options))
}

export async function postWalletobjectsV1EventTicketObject(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.eventTicketObject.$post(args, options))
}

export async function getWalletobjectsV1EventTicketObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketObject[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1EventTicketObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketObject[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1EventTicketObjectResourceId(
  args: InferRequestType<
    (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketObject[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1EventTicketObjectResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketObject[':resourceId'].addMessage.$post(args, options),
  )
}

export async function postWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjects(
  args: InferRequestType<
    (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.eventTicketObject[':resourceId'].modifyLinkedOfferObjects.$post(
      args,
      options,
    ),
  )
}

export async function getWalletobjectsV1FlightClass(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.flightClass.$get(args, options))
}

export async function postWalletobjectsV1FlightClass(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.flightClass.$post(args, options))
}

export async function getWalletobjectsV1FlightClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.flightClass[':resourceId'].$get(args, options))
}

export async function putWalletobjectsV1FlightClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.flightClass[':resourceId'].$put(args, options))
}

export async function patchWalletobjectsV1FlightClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.flightClass[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1FlightClassResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.flightClass[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1FlightObject(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.flightObject.$get(args, options))
}

export async function postWalletobjectsV1FlightObject(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.flightObject.$post(args, options))
}

export async function getWalletobjectsV1FlightObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.flightObject[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1FlightObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.flightObject[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1FlightObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.flightObject[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1FlightObjectResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.flightObject[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1GenericClass(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.genericClass.$get(args, options))
}

export async function postWalletobjectsV1GenericClass(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.genericClass.$post(args, options))
}

export async function getWalletobjectsV1GenericClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.genericClass[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1GenericClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.genericClass[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1GenericClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.genericClass[':resourceId'].$patch(args, options),
  )
}

export async function getWalletobjectsV1GenericObject(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.genericObject.$get(args, options))
}

export async function postWalletobjectsV1GenericObject(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.genericObject.$post(args, options))
}

export async function getWalletobjectsV1GenericObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.genericObject[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1GenericObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.genericObject[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1GenericObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.genericObject[':resourceId'].$patch(args, options),
  )
}

export async function getWalletobjectsV1GiftCardClass(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.giftCardClass.$get(args, options))
}

export async function postWalletobjectsV1GiftCardClass(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.giftCardClass.$post(args, options))
}

export async function getWalletobjectsV1GiftCardClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardClass[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1GiftCardClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardClass[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1GiftCardClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardClass[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1GiftCardClassResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardClass[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1GiftCardObject(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.giftCardObject.$get(args, options))
}

export async function postWalletobjectsV1GiftCardObject(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.giftCardObject.$post(args, options))
}

export async function getWalletobjectsV1GiftCardObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardObject[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1GiftCardObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardObject[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1GiftCardObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardObject[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1GiftCardObjectResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.giftCardObject[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1Issuer(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.issuer.$get(args, options))
}

export async function postWalletobjectsV1Issuer(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.issuer.$post(args, options))
}

export async function getWalletobjectsV1IssuerResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.issuer[':resourceId'].$get(args, options))
}

export async function putWalletobjectsV1IssuerResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.issuer[':resourceId'].$put(args, options))
}

export async function patchWalletobjectsV1IssuerResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.issuer[':resourceId'].$patch(args, options))
}

export async function postWalletobjectsV1Jwt(
  args: InferRequestType<typeof client.walletobjects.v1.jwt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.jwt.$post(args, options))
}

export async function getWalletobjectsV1LoyaltyClass(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.loyaltyClass.$get(args, options))
}

export async function postWalletobjectsV1LoyaltyClass(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.loyaltyClass.$post(args, options))
}

export async function getWalletobjectsV1LoyaltyClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyClass[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1LoyaltyClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyClass[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1LoyaltyClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyClass[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1LoyaltyClassResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyClass[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1LoyaltyObject(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.loyaltyObject.$get(args, options))
}

export async function postWalletobjectsV1LoyaltyObject(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.loyaltyObject.$post(args, options))
}

export async function getWalletobjectsV1LoyaltyObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyObject[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1LoyaltyObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyObject[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1LoyaltyObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyObject[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1LoyaltyObjectResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyObject[':resourceId'].addMessage.$post(args, options),
  )
}

export async function postWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjects(
  args: InferRequestType<
    (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.loyaltyObject[':resourceId'].modifyLinkedOfferObjects.$post(
      args,
      options,
    ),
  )
}

export async function getWalletobjectsV1OfferClass(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerClass.$get(args, options))
}

export async function postWalletobjectsV1OfferClass(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerClass.$post(args, options))
}

export async function getWalletobjectsV1OfferClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$get(args, options))
}

export async function putWalletobjectsV1OfferClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$put(args, options))
}

export async function patchWalletobjectsV1OfferClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.offerClass[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1OfferClassResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.offerClass[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1OfferObject(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerObject.$get(args, options))
}

export async function postWalletobjectsV1OfferObject(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerObject.$post(args, options))
}

export async function getWalletobjectsV1OfferObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerObject[':resourceId'].$get(args, options))
}

export async function putWalletobjectsV1OfferObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.offerObject[':resourceId'].$put(args, options))
}

export async function patchWalletobjectsV1OfferObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.offerObject[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1OfferObjectResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.offerObject[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1PermissionsResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.permissions[':resourceId'].$get(args, options))
}

export async function putWalletobjectsV1PermissionsResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.permissions[':resourceId'].$put(args, options))
}

export async function postWalletobjectsV1PrivateContentUploadPrivateData(
  args: InferRequestType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.privateContent.uploadPrivateData.$post(args, options),
  )
}

export async function postWalletobjectsV1PrivateContentIssuerIdUploadPrivateImage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.privateContent[':issuerId'].uploadPrivateImage.$post(args, options),
  )
}

export async function postWalletobjectsV1SmartTap(
  args: InferRequestType<typeof client.walletobjects.v1.smartTap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.smartTap.$post(args, options))
}

export async function getWalletobjectsV1TransitClass(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.transitClass.$get(args, options))
}

export async function postWalletobjectsV1TransitClass(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.transitClass.$post(args, options))
}

export async function getWalletobjectsV1TransitClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitClass[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1TransitClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitClass[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1TransitClassResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitClass[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1TransitClassResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitClass[':resourceId'].addMessage.$post(args, options),
  )
}

export async function getWalletobjectsV1TransitObject(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.transitObject.$get(args, options))
}

export async function postWalletobjectsV1TransitObject(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.walletobjects.v1.transitObject.$post(args, options))
}

export async function getWalletobjectsV1TransitObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitObject[':resourceId'].$get(args, options),
  )
}

export async function putWalletobjectsV1TransitObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitObject[':resourceId'].$put(args, options),
  )
}

export async function patchWalletobjectsV1TransitObjectResourceId(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitObject[':resourceId'].$patch(args, options),
  )
}

export async function postWalletobjectsV1TransitObjectResourceIdAddMessage(
  args: InferRequestType<
    (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.walletobjects.v1.transitObject[':resourceId'].addMessage.$post(args, options),
  )
}
