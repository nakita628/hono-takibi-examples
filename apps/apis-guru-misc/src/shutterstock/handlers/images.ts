import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ImagesCollectionsIdItemsRoute,
  deleteV2ImagesCollectionsIdRoute,
  getV2ImagesCategoriesRoute,
  getV2ImagesCollectionsFeaturedIdItemsRoute,
  getV2ImagesCollectionsFeaturedIdRoute,
  getV2ImagesCollectionsFeaturedRoute,
  getV2ImagesCollectionsIdItemsRoute,
  getV2ImagesCollectionsIdRoute,
  getV2ImagesCollectionsRoute,
  getV2ImagesIdRoute,
  getV2ImagesIdSimilarRoute,
  getV2ImagesLicensesRoute,
  getV2ImagesRecommendationsRoute,
  getV2ImagesRoute,
  getV2ImagesSearchRoute,
  getV2ImagesSearchSuggestionsRoute,
  getV2ImagesUpdatedRoute,
  postV2BulkSearchImagesRoute,
  postV2ImagesCollectionsIdItemsRoute,
  postV2ImagesCollectionsIdRoute,
  postV2ImagesCollectionsRoute,
  postV2ImagesLicensesIdDownloadsRoute,
  postV2ImagesLicensesRoute,
  postV2ImagesSearchSuggestionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(postV2BulkSearchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsFeaturedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsFeaturedIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ImagesCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ImagesCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
