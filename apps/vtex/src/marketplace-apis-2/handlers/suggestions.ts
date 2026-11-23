import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuggestionsSellerIdSellerSkuIdRoute,
  getSuggestionsConfigurationAutoapprovalToggleRoute,
  getSuggestionsConfigurationRoute,
  getSuggestionsConfigurationSellerSellerIdRoute,
  getSuggestionsRoute,
  getSuggestionsSellerIdSellerSkuIdRoute,
  getSuggestionsSellerIdSellerskuidVersionsRoute,
  getSuggestionsSellerIdSellerskuidVersionsVersionRoute,
  putSuggestionsConfigurationAutoapprovalToggleRoute,
  putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRoute,
  putSuggestionsConfigurationRoute,
  putSuggestionsConfigurationSellerSellerIdRoute,
  putSuggestionsMatchesActionActionNameRoute,
  putSuggestionsSellerIdSellerSkuIdRoute,
  putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suggestionsHandler = app
  .openapi(getSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsConfigurationAutoapprovalToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsConfigurationAutoapprovalToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsConfigurationSellerSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsConfigurationSellerSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsMatchesActionActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuggestionsSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsSellerIdSellerskuidVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsSellerIdSellerskuidVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRoute, (c) => {
    throw new Error('Not implemented')
  })
