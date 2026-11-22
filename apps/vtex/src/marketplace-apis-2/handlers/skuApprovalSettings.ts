import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSuggestionsConfigurationAutoapprovalToggleRoute,
  getSuggestionsConfigurationRoute,
  getSuggestionsConfigurationSellerSellerIdRoute,
  putSuggestionsConfigurationAutoapprovalToggleRoute,
  putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRoute,
  putSuggestionsConfigurationRoute,
  putSuggestionsConfigurationSellerSellerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuApprovalSettingsHandler = app
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
