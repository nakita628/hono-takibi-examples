import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListingsListingIdImagesImageIdRoute,
  deleteListingsSlugRoute,
  getListingsAllRoute,
  getListingsFacetsSellerLocationRoute,
  getListingsIdNegotiationRoute,
  getListingsListingIdBumpRoute,
  getListingsListingIdImagesRoute,
  getListingsListingIdSalesRoute,
  getListingsRoute,
  getListingsSlugEditRoute,
  getListingsSlugReviewsRoute,
  getListingsSlugRoute,
  getListingsSlugSimilarListingsRoute,
  postListingsIdOfferRoute,
  postListingsListingIdBumpBudgetTypeRoute,
  postListingsListingIdConversationsRoute,
  postListingsRoute,
  postListingsSlugFlagRoute,
  postListingsSlugReviewsRoute,
  putListingsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listingsHandler = app
  .openapi(getListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsFacetsSellerLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsIdNegotiationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListingsIdOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsListingIdBumpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListingsListingIdBumpBudgetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListingsListingIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsListingIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListingsListingIdImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsListingIdSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListingsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListingsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsSlugEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListingsSlugFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsSlugReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListingsSlugReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsSlugSimilarListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
