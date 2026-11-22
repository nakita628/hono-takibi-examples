import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSearchBookmarksBookmarkIdRoute,
  getSearchBookmarksBookmarkIdRoute,
  getSearchBookmarksCountRoute,
  getSearchBookmarksRoute,
  patchSearchBookmarksBookmarkIdRoute,
  postSearchBookmarksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchBookmarkHandler = app
  .openapi(getSearchBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSearchBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchBookmarksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
