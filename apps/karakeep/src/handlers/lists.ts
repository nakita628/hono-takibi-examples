import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListsListIdBookmarksBookmarkIdRoute,
  deleteListsListIdRoute,
  getListsListIdBookmarksRoute,
  getListsListIdRoute,
  getListsRoute,
  patchListsListIdRoute,
  postListsRoute,
  putListsListIdBookmarksBookmarkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListIdBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListIdBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
