import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoreCartsIdGiftCardsRoute,
  deleteStoreCartsIdLineItemsLineIdRoute,
  deleteStoreCartsIdPromotionsRoute,
  deleteStoreCustomersMeAddressesAddressIdRoute,
  getStoreCartsIdRoute,
  getStoreCollectionsIdRoute,
  getStoreCollectionsRoute,
  getStoreCurrenciesCodeRoute,
  getStoreCurrenciesRoute,
  getStoreCustomersMeAddressesAddressIdRoute,
  getStoreCustomersMeAddressesRoute,
  getStoreCustomersMeRoute,
  getStoreGiftCardsIdOrCodeRoute,
  getStoreLocalesRoute,
  getStoreOrdersIdRoute,
  getStoreOrdersRoute,
  getStorePaymentProvidersRoute,
  getStoreProductCategoriesIdRoute,
  getStoreProductCategoriesRoute,
  getStoreProductOptionsIdRoute,
  getStoreProductOptionsRoute,
  getStoreProductsIdRoute,
  getStoreProductsRoute,
  getStoreProductTagsIdRoute,
  getStoreProductTagsRoute,
  getStoreProductTypesIdRoute,
  getStoreProductTypesRoute,
  getStoreProductVariantsRoute,
  getStoreRegionsIdRoute,
  getStoreRegionsRoute,
  getStoreReturnReasonsIdRoute,
  getStoreReturnReasonsRoute,
  getStoreShippingOptionsRoute,
  getStoreStoreCreditAccountsIdRoute,
  getStoreStoreCreditAccountsRoute,
  postStoreCartsIdCompleteRoute,
  postStoreCartsIdCustomerRoute,
  postStoreCartsIdGiftCardsRoute,
  postStoreCartsIdLineItemsLineIdRoute,
  postStoreCartsIdLineItemsRoute,
  postStoreCartsIdPromotionsRoute,
  postStoreCartsIdRoute,
  postStoreCartsIdShippingMethodsRoute,
  postStoreCartsIdStoreCreditsRoute,
  postStoreCartsIdTaxesRoute,
  postStoreCartsRoute,
  postStoreCustomersMeAddressesAddressIdRoute,
  postStoreCustomersMeAddressesRoute,
  postStoreCustomersMeRoute,
  postStoreCustomersRoute,
  postStoreOrdersIdTransferAcceptRoute,
  postStoreOrdersIdTransferCancelRoute,
  postStoreOrdersIdTransferDeclineRoute,
  postStoreOrdersIdTransferRequestRoute,
  postStorePaymentCollectionsIdPaymentSessionsRoute,
  postStorePaymentCollectionsIdPaymentSessionsSessionIdRoute,
  postStorePaymentCollectionsRoute,
  postStoreReturnsRoute,
  postStoreSearchRoute,
  postStoreShippingOptionsIdCalculateRoute,
  postStoreStoreCreditAccountsClaimRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storeHandler = app
  .openapi(postStoreCartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCartsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoreCartsIdGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdLineItemsLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoreCartsIdLineItemsLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoreCartsIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdStoreCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCartsIdTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCurrenciesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCustomersMeAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCustomersMeAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCustomersMeAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreCustomersMeAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoreCustomersMeAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreGiftCardsIdOrCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreLocalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorePaymentCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorePaymentCollectionsIdPaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorePaymentCollectionsIdPaymentSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorePaymentProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreReturnReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreShippingOptionsIdCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreStoreCreditAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreStoreCreditAccountsClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreStoreCreditAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
