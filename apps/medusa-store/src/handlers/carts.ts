import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoreCartsIdGiftCardsRoute,
  deleteStoreCartsIdLineItemsLineIdRoute,
  deleteStoreCartsIdPromotionsRoute,
  getStoreCartsIdRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const cartsHandler = app
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
