import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchCitiesRoute,
  getSearchExploreRoute,
  getSearchPersonRoute,
  getSearchPlacesRoute,
  getSearchSuggestionsRoute,
  postSearchLargeAssetsRoute,
  postSearchMetadataRoute,
  postSearchRandomRoute,
  postSearchSmartRoute,
  postSearchStatisticsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchCitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchExploreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchLargeAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchSmartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
