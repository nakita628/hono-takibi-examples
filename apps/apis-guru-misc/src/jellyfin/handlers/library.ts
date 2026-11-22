import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemsItemIdRoute,
  deleteItemsRoute,
  getAlbumsItemIdSimilarRoute,
  getArtistsItemIdSimilarRoute,
  getItemsCountsRoute,
  getItemsItemIdAncestorsRoute,
  getItemsItemIdCriticReviewsRoute,
  getItemsItemIdDownloadRoute,
  getItemsItemIdFileRoute,
  getItemsItemIdSimilarRoute,
  getItemsItemIdThemeMediaRoute,
  getItemsItemIdThemeSongsRoute,
  getItemsItemIdThemeVideosRoute,
  getLibrariesAvailableOptionsRoute,
  getLibraryMediaFoldersRoute,
  getLibraryPhysicalPathsRoute,
  getLibraryRefreshRoute,
  getMoviesItemIdSimilarRoute,
  getShowsItemIdSimilarRoute,
  getTrailersItemIdSimilarRoute,
  postLibraryMediaUpdatedRoute,
  postLibraryMoviesAddedRoute,
  postLibraryMoviesUpdatedRoute,
  postLibrarySeriesAddedRoute,
  postLibrarySeriesUpdatedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const libraryHandler = app
  .openapi(getAlbumsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdAncestorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdCriticReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdThemeMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdThemeSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdThemeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibrariesAvailableOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryMediaUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryMediaFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryMoviesAddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryMoviesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryPhysicalPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibrarySeriesAddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibrarySeriesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrailersItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
