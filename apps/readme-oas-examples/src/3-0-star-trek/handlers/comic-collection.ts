import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getComicCollectionRoute,
  getComicCollectionSearchRoute,
  postComicCollectionSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const comicCollectionHandler = app
  .openapi(getComicCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComicCollectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postComicCollectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
