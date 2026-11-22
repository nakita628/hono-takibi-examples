import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2BookmarksBookmarkIdRoute,
  getApiV2BookmarksRoute,
  postApiV2BookmarksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookmarksHandler = app
  .openapi(getApiV2BookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
