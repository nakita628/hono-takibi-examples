import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPostsIdsCommentsRoute,
  getPostsIdsRevisionsRoute,
  getPostsIdsRoute,
  getPostsIdsSuggestedEditsRoute,
  getPostsRoute,
  postPostsIdCommentsAddRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
  .openapi(getPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsIdsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsIdsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsIdsSuggestedEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostsIdCommentsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
