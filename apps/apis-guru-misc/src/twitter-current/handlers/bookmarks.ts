import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2UsersIdBookmarksTweetIdRoute,
  get2UsersIdBookmarksRoute,
  post2UsersIdBookmarksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookmarksHandler = app
  .openapi(get2UsersIdBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdBookmarksTweetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
