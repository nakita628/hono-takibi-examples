import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNewsNewsItemsNewsItemIdRoute,
  getNewsNewsfeedsNewsfeedIdItemsRoute,
  getNewsNewsfeedsNewsfeedIdRoute,
  getNewsNewsfeedsRoute,
  getNewsNewsItemsNewsItemIdRoute,
  getNewsNewsItemsRoute,
  postNewsNewsItemsRoute,
  putNewsNewsItemsNewsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const newsHandler = app
  .openapi(getNewsNewsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNewsNewsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewsNewsItemsNewsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNewsNewsItemsNewsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNewsNewsItemsNewsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewsNewsfeedsNewsfeedIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewsNewsfeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewsNewsfeedsNewsfeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
