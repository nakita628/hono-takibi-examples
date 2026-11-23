import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostsPostIdBookmarkRoute,
  deletePostsPostIdRoute,
  getPostsAllChangesRoute,
  getPostsAllRoute,
  getPostsMultipleRoute,
  getPostsPostIdDisplayRoute,
  getPostsPostIdRoute,
  getPostsRoute,
  getPostsSearchRoute,
  postPostsPostIdReplyRoute,
  postPostsPostIdReportRoute,
  postPostsPostIdShareRoute,
  postPostsRoute,
  putPostsPostIdBookmarkRoute,
  putPostsPostIdPromiseRoute,
  putPostsPostIdRoute,
  putPostsPostIdSatisfyRoute,
  putPostsPostIdUnpromiseRoute,
  putPostsPostIdWithdrawRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
  .openapi(getPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsAllChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostsPostIdBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsPostIdBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsPostIdDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsPostIdPromiseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostsPostIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostsPostIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsPostIdSatisfyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostsPostIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsPostIdUnpromiseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsPostIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
