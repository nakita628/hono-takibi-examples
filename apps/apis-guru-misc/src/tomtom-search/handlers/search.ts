import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchVersionNumberCategorySearchQueryExtRoute,
  getSearchVersionNumberCSCategoryExtRoute,
  getSearchVersionNumberGeometrySearchQueryExtRoute,
  getSearchVersionNumberNearbySearchExtRoute,
  getSearchVersionNumberPoiSearchQueryExtRoute,
  getSearchVersionNumberRoutedSearchQueryPositionHeadingExtRoute,
  getSearchVersionNumberSearchQueryExtRoute,
  getSearchVersionNumberSQueryExtRoute,
  postSearchVersionNumberGeometrySearchQueryExtRoute,
  postSearchVersionNumberSearchAlongRouteQueryExtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchVersionNumberCSCategoryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberCategorySearchQueryExtRoute, (c) => {
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
