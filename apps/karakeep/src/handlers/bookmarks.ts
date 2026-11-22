import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookmarksBookmarkIdAssetsAssetIdRoute,
  deleteBookmarksBookmarkIdRoute,
  deleteBookmarksBookmarkIdTagsRoute,
  getBookmarksBookmarkIdContentRoute,
  getBookmarksBookmarkIdHighlightsRoute,
  getBookmarksBookmarkIdListsRoute,
  getBookmarksBookmarkIdRoute,
  getBookmarksCheckUrlRoute,
  getBookmarksRoute,
  getBookmarksSearchRoute,
  patchBookmarksBookmarkIdRoute,
  postBookmarksBookmarkIdAssetsRoute,
  postBookmarksBookmarkIdSummarizeRoute,
  postBookmarksBookmarkIdTagsRoute,
  postBookmarksRoute,
  putBookmarksBookmarkIdAssetsAssetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookmarksHandler = app
  .openapi(getBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksCheckUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksBookmarkIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookmarksBookmarkIdSummarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookmarksBookmarkIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBookmarksBookmarkIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksBookmarkIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksBookmarkIdHighlightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookmarksBookmarkIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBookmarksBookmarkIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBookmarksBookmarkIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
