import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemsItemIDRoute,
  getItemsItemIDHistoryRoute,
  getItemsItemIDRoute,
  getItemsRoute,
  postItemsItemIDRoute,
  postItemsRoute,
  putItemsItemIDHistoryRoute,
  putItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemsItemIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
