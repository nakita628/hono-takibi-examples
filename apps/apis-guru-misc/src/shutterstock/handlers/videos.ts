import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2VideosCollectionsIdItemsRoute,
  deleteV2VideosCollectionsIdRoute,
  getV2VideosCategoriesRoute,
  getV2VideosCollectionsFeaturedIdItemsRoute,
  getV2VideosCollectionsFeaturedIdRoute,
  getV2VideosCollectionsFeaturedRoute,
  getV2VideosCollectionsIdItemsRoute,
  getV2VideosCollectionsIdRoute,
  getV2VideosCollectionsRoute,
  getV2VideosIdRoute,
  getV2VideosIdSimilarRoute,
  getV2VideosLicensesRoute,
  getV2VideosRoute,
  getV2VideosSearchRoute,
  getV2VideosSearchSuggestionsRoute,
  getV2VideosUpdatedRoute,
  postV2VideosCollectionsIdItemsRoute,
  postV2VideosCollectionsIdRoute,
  postV2VideosCollectionsRoute,
  postV2VideosLicensesIdDownloadsRoute,
  postV2VideosLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(getV2VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsFeaturedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsFeaturedIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VideosCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VideosCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
