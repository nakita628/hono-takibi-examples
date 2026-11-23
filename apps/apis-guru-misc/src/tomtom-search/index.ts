import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchVersionNumberAdditionalDataExtRoute,
  getSearchVersionNumberCategorySearchQueryExtRoute,
  getSearchVersionNumberCSCategoryExtRoute,
  getSearchVersionNumberGeocodeQueryExtRoute,
  getSearchVersionNumberGeometryFilterExtRoute,
  getSearchVersionNumberGeometrySearchQueryExtRoute,
  getSearchVersionNumberNearbySearchExtRoute,
  getSearchVersionNumberPoiSearchQueryExtRoute,
  getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRoute,
  getSearchVersionNumberReverseGeocodePositionExtRoute,
  getSearchVersionNumberRoutedFilterPositionHeadingExtRoute,
  getSearchVersionNumberRoutedSearchQueryPositionHeadingExtRoute,
  getSearchVersionNumberSearchQueryExtRoute,
  getSearchVersionNumberSQueryExtRoute,
  getSearchVersionNumberStructuredGeocodeExtRoute,
  postSearchVersionNumberGeometryFilterExtRoute,
  postSearchVersionNumberGeometrySearchQueryExtRoute,
  postSearchVersionNumberRoutedFilterPositionHeadingExtRoute,
  postSearchVersionNumberSearchAlongRouteQueryExtRoute,
} from './routes'
import {
  getSearchVersionNumberAdditionalDataExtRouteHandler,
  getSearchVersionNumberCategorySearchQueryExtRouteHandler,
  getSearchVersionNumberCSCategoryExtRouteHandler,
  getSearchVersionNumberGeocodeQueryExtRouteHandler,
  getSearchVersionNumberGeometryFilterExtRouteHandler,
  getSearchVersionNumberGeometrySearchQueryExtRouteHandler,
  getSearchVersionNumberNearbySearchExtRouteHandler,
  getSearchVersionNumberPoiSearchQueryExtRouteHandler,
  getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRouteHandler,
  getSearchVersionNumberReverseGeocodePositionExtRouteHandler,
  getSearchVersionNumberRoutedFilterPositionHeadingExtRouteHandler,
  getSearchVersionNumberRoutedSearchQueryPositionHeadingExtRouteHandler,
  getSearchVersionNumberSearchQueryExtRouteHandler,
  getSearchVersionNumberSQueryExtRouteHandler,
  getSearchVersionNumberStructuredGeocodeExtRouteHandler,
  postSearchVersionNumberGeometryFilterExtRouteHandler,
  postSearchVersionNumberGeometrySearchQueryExtRouteHandler,
  postSearchVersionNumberRoutedFilterPositionHeadingExtRouteHandler,
  postSearchVersionNumberSearchAlongRouteQueryExtRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getSearchVersionNumberAdditionalDataExtRoute,
    getSearchVersionNumberAdditionalDataExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberCSCategoryExtRoute,
    getSearchVersionNumberCSCategoryExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberCategorySearchQueryExtRoute,
    getSearchVersionNumberCategorySearchQueryExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberGeocodeQueryExtRoute,
    getSearchVersionNumberGeocodeQueryExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberGeometryFilterExtRoute,
    getSearchVersionNumberGeometryFilterExtRouteHandler,
  )
  .openapi(
    postSearchVersionNumberGeometryFilterExtRoute,
    postSearchVersionNumberGeometryFilterExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberGeometrySearchQueryExtRoute,
    getSearchVersionNumberGeometrySearchQueryExtRouteHandler,
  )
  .openapi(
    postSearchVersionNumberGeometrySearchQueryExtRoute,
    postSearchVersionNumberGeometrySearchQueryExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberNearbySearchExtRoute,
    getSearchVersionNumberNearbySearchExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberPoiSearchQueryExtRoute,
    getSearchVersionNumberPoiSearchQueryExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRoute,
    getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberReverseGeocodePositionExtRoute,
    getSearchVersionNumberReverseGeocodePositionExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberRoutedFilterPositionHeadingExtRoute,
    getSearchVersionNumberRoutedFilterPositionHeadingExtRouteHandler,
  )
  .openapi(
    postSearchVersionNumberRoutedFilterPositionHeadingExtRoute,
    postSearchVersionNumberRoutedFilterPositionHeadingExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberRoutedSearchQueryPositionHeadingExtRoute,
    getSearchVersionNumberRoutedSearchQueryPositionHeadingExtRouteHandler,
  )
  .openapi(getSearchVersionNumberSQueryExtRoute, getSearchVersionNumberSQueryExtRouteHandler)
  .openapi(
    getSearchVersionNumberSearchQueryExtRoute,
    getSearchVersionNumberSearchQueryExtRouteHandler,
  )
  .openapi(
    postSearchVersionNumberSearchAlongRouteQueryExtRoute,
    postSearchVersionNumberSearchAlongRouteQueryExtRouteHandler,
  )
  .openapi(
    getSearchVersionNumberStructuredGeocodeExtRoute,
    getSearchVersionNumberStructuredGeocodeExtRouteHandler,
  )

export default app
