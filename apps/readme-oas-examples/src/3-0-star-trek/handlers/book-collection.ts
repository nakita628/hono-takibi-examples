import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBookCollectionRoute,
  getBookCollectionSearchRoute,
  postBookCollectionSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookCollectionHandler = app
  .openapi(getBookCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookCollectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookCollectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
