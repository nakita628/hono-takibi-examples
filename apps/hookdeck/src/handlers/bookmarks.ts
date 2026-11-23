import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookmarksIdRoute,
  getBookmarksIdRawBodyRoute,
  getBookmarksIdRoute,
  getBookmarksRoute,
  postBookmarksIdTriggerRoute,
  postBookmarksRoute,
  putBookmarksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookmarksHandler = app
  .openapi(getBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBookmarksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBookmarksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookmarksIdRawBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookmarksIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
