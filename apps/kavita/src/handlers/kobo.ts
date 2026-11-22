import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKoboApiKeyV1LibraryBookIdRoute,
  getKoboApiKeyV1AnalyticsGettestsRoute,
  getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightIsGreyScaleImageJpgRoute,
  getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightQualityIsGreyScaleImageJpgRoute,
  getKoboApiKeyV1InitializationRoute,
  getKoboApiKeyV1LibraryBookIdFileEpubRoute,
  getKoboApiKeyV1LibraryBookIdMetadataRoute,
  getKoboApiKeyV1LibraryBookIdStateRoute,
  getKoboApiKeyV1LibrarySyncRoute,
  getKoboApiKeyV1ProductsBookIdNextreadRoute,
  getKoboApiKeyV1ProductsBookIdRecommendationsRoute,
  getKoboApiKeyV1ProductsBookIdReviewsRoute,
  getKoboApiKeyV1ProductsBookIdsPricesRoute,
  getKoboApiKeyV1ProductsBooksBookIdRoute,
  getKoboApiKeyV1ProductsBooksSeriesBookIdRoute,
  getKoboApiKeyV1UserReviewsRoute,
  getKoboApiKeyV1UserWishlistRoute,
  postKoboApiKeyV1AnalyticsGettestsRoute,
  postKoboApiKeyV1LibraryBookIdRoute,
  putKoboApiKeyV1LibraryBookIdStateRoute,
  putKoboApiKeyV1ProductsBookIdReviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const koboHandler = app
  .openapi(getKoboApiKeyV1InitializationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1LibrarySyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1LibraryBookIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1LibraryBookIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKoboApiKeyV1LibraryBookIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1LibraryBookIdFileEpubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightIsGreyScaleImageJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightQualityIsGreyScaleImageJpgRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteKoboApiKeyV1LibraryBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKoboApiKeyV1LibraryBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1ProductsBookIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKoboApiKeyV1ProductsBookIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1ProductsBookIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1ProductsBooksBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1ProductsBookIdNextreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1ProductsBooksSeriesBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1ProductsBookIdsPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1UserReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1UserWishlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKoboApiKeyV1AnalyticsGettestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKoboApiKeyV1AnalyticsGettestsRoute, (c) => {
    throw new Error('Not implemented')
  })
