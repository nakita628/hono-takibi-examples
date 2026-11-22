import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListsIdCommentsSortRoute,
  getListsIdItemsTypeRoute,
  getListsIdLikesRoute,
  getListsIdRoute,
  getListsPopularRoute,
  getListsTrendingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsPopularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdCommentsSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdItemsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
