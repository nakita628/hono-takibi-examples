import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuotesQuoteIdQuoteEntitlementsRoute,
  getQuotesQuoteIdQuoteLineGroupsRoute,
  getQuotesQuoteIdRoute,
  getQuotesRoute,
  postQuotesCreateForChargeItemsAndChargesRoute,
  postQuotesQuoteIdConvertRoute,
  postQuotesQuoteIdDeleteRoute,
  postQuotesQuoteIdEditCreateSubscriptionQuoteForItemsRoute,
  postQuotesQuoteIdEditForChargeItemsAndChargesRoute,
  postQuotesQuoteIdEditUpdateSubscriptionQuoteForItemsRoute,
  postQuotesQuoteIdExtendExpiryDateRoute,
  postQuotesQuoteIdPdfRoute,
  postQuotesQuoteIdUpdateStatusRoute,
  postQuotesUpdateSubscriptionQuoteForItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotesHandler = app
  .openapi(getQuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdExtendExpiryDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdEditUpdateSubscriptionQuoteForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdEditCreateSubscriptionQuoteForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesUpdateSubscriptionQuoteForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIdQuoteLineGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdEditForChargeItemsAndChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesCreateForChargeItemsAndChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIdQuoteEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
