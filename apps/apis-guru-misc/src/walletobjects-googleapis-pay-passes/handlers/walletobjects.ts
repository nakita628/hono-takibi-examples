import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1EventTicketClassResourceIdRoute,
  getWalletobjectsV1EventTicketClassRoute,
  getWalletobjectsV1EventTicketObjectResourceIdRoute,
  getWalletobjectsV1EventTicketObjectRoute,
  getWalletobjectsV1FlightClassResourceIdRoute,
  getWalletobjectsV1FlightClassRoute,
  getWalletobjectsV1FlightObjectResourceIdRoute,
  getWalletobjectsV1FlightObjectRoute,
  getWalletobjectsV1GenericClassResourceIdRoute,
  getWalletobjectsV1GenericClassRoute,
  getWalletobjectsV1GenericObjectResourceIdRoute,
  getWalletobjectsV1GenericObjectRoute,
  getWalletobjectsV1GiftCardClassResourceIdRoute,
  getWalletobjectsV1GiftCardClassRoute,
  getWalletobjectsV1GiftCardObjectResourceIdRoute,
  getWalletobjectsV1GiftCardObjectRoute,
  getWalletobjectsV1IssuerResourceIdRoute,
  getWalletobjectsV1IssuerRoute,
  getWalletobjectsV1LoyaltyClassResourceIdRoute,
  getWalletobjectsV1LoyaltyClassRoute,
  getWalletobjectsV1LoyaltyObjectResourceIdRoute,
  getWalletobjectsV1LoyaltyObjectRoute,
  getWalletobjectsV1OfferClassResourceIdRoute,
  getWalletobjectsV1OfferClassRoute,
  getWalletobjectsV1OfferObjectResourceIdRoute,
  getWalletobjectsV1OfferObjectRoute,
  getWalletobjectsV1PermissionsResourceIdRoute,
  getWalletobjectsV1TransitClassResourceIdRoute,
  getWalletobjectsV1TransitClassRoute,
  getWalletobjectsV1TransitObjectResourceIdRoute,
  getWalletobjectsV1TransitObjectRoute,
  patchWalletobjectsV1EventTicketClassResourceIdRoute,
  patchWalletobjectsV1EventTicketObjectResourceIdRoute,
  patchWalletobjectsV1FlightClassResourceIdRoute,
  patchWalletobjectsV1FlightObjectResourceIdRoute,
  patchWalletobjectsV1GenericClassResourceIdRoute,
  patchWalletobjectsV1GenericObjectResourceIdRoute,
  patchWalletobjectsV1GiftCardClassResourceIdRoute,
  patchWalletobjectsV1GiftCardObjectResourceIdRoute,
  patchWalletobjectsV1IssuerResourceIdRoute,
  patchWalletobjectsV1LoyaltyClassResourceIdRoute,
  patchWalletobjectsV1LoyaltyObjectResourceIdRoute,
  patchWalletobjectsV1OfferClassResourceIdRoute,
  patchWalletobjectsV1OfferObjectResourceIdRoute,
  patchWalletobjectsV1TransitClassResourceIdRoute,
  patchWalletobjectsV1TransitObjectResourceIdRoute,
  postWalletobjectsV1EventTicketClassResourceIdAddMessageRoute,
  postWalletobjectsV1EventTicketClassRoute,
  postWalletobjectsV1EventTicketObjectResourceIdAddMessageRoute,
  postWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsRoute,
  postWalletobjectsV1EventTicketObjectRoute,
  postWalletobjectsV1FlightClassResourceIdAddMessageRoute,
  postWalletobjectsV1FlightClassRoute,
  postWalletobjectsV1FlightObjectResourceIdAddMessageRoute,
  postWalletobjectsV1FlightObjectRoute,
  postWalletobjectsV1GenericClassRoute,
  postWalletobjectsV1GenericObjectRoute,
  postWalletobjectsV1GiftCardClassResourceIdAddMessageRoute,
  postWalletobjectsV1GiftCardClassRoute,
  postWalletobjectsV1GiftCardObjectResourceIdAddMessageRoute,
  postWalletobjectsV1GiftCardObjectRoute,
  postWalletobjectsV1IssuerRoute,
  postWalletobjectsV1JwtRoute,
  postWalletobjectsV1LoyaltyClassResourceIdAddMessageRoute,
  postWalletobjectsV1LoyaltyClassRoute,
  postWalletobjectsV1LoyaltyObjectResourceIdAddMessageRoute,
  postWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsRoute,
  postWalletobjectsV1LoyaltyObjectRoute,
  postWalletobjectsV1OfferClassResourceIdAddMessageRoute,
  postWalletobjectsV1OfferClassRoute,
  postWalletobjectsV1OfferObjectResourceIdAddMessageRoute,
  postWalletobjectsV1OfferObjectRoute,
  postWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageRoute,
  postWalletobjectsV1PrivateContentUploadPrivateDataRoute,
  postWalletobjectsV1SmartTapRoute,
  postWalletobjectsV1TransitClassResourceIdAddMessageRoute,
  postWalletobjectsV1TransitClassRoute,
  postWalletobjectsV1TransitObjectResourceIdAddMessageRoute,
  postWalletobjectsV1TransitObjectRoute,
  putWalletobjectsV1EventTicketClassResourceIdRoute,
  putWalletobjectsV1EventTicketObjectResourceIdRoute,
  putWalletobjectsV1FlightClassResourceIdRoute,
  putWalletobjectsV1FlightObjectResourceIdRoute,
  putWalletobjectsV1GenericClassResourceIdRoute,
  putWalletobjectsV1GenericObjectResourceIdRoute,
  putWalletobjectsV1GiftCardClassResourceIdRoute,
  putWalletobjectsV1GiftCardObjectResourceIdRoute,
  putWalletobjectsV1IssuerResourceIdRoute,
  putWalletobjectsV1LoyaltyClassResourceIdRoute,
  putWalletobjectsV1LoyaltyObjectResourceIdRoute,
  putWalletobjectsV1OfferClassResourceIdRoute,
  putWalletobjectsV1OfferObjectResourceIdRoute,
  putWalletobjectsV1PermissionsResourceIdRoute,
  putWalletobjectsV1TransitClassResourceIdRoute,
  putWalletobjectsV1TransitObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletobjectsHandler = app
  .openapi(getWalletobjectsV1EventTicketClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1EventTicketClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1EventTicketClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1EventTicketClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1EventTicketObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1EventTicketObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1EventTicketObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1EventTicketObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1FlightClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1FlightClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1FlightClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1FlightClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1FlightObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1FlightObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1FlightObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1FlightObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GenericClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GenericClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GenericClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GenericClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GenericClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GenericObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GenericObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GenericObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GenericObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GenericObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GiftCardClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GiftCardClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GiftCardClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GiftCardClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GiftCardObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GiftCardObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GiftCardObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GiftCardObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1IssuerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1IssuerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1IssuerResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1IssuerResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1IssuerResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1JwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1LoyaltyClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1LoyaltyClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1LoyaltyClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1LoyaltyClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1LoyaltyObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1LoyaltyObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1LoyaltyObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1LoyaltyObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1OfferClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1OfferClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1OfferClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1OfferClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1OfferObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1OfferObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1OfferObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1OfferObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1PermissionsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1PermissionsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1PrivateContentUploadPrivateDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1SmartTapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1TransitClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1TransitClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1TransitClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1TransitClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1TransitObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1TransitObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1TransitObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1TransitObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
