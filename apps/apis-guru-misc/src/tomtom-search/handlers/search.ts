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
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchVersionNumberAdditionalDataExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberCSCategoryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberCategorySearchQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberGeocodeQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberGeometryFilterExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchVersionNumberGeometryFilterExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberGeometrySearchQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchVersionNumberGeometrySearchQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberNearbySearchExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberPoiSearchQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberReverseGeocodePositionExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberRoutedFilterPositionHeadingExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchVersionNumberRoutedFilterPositionHeadingExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberRoutedSearchQueryPositionHeadingExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberSQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberSearchQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchVersionNumberSearchAlongRouteQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberStructuredGeocodeExtRoute, (c) => {
    throw new Error('Not implemented')
  })
