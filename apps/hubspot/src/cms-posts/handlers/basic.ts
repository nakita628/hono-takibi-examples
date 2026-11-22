import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsBlogs202609PostsObjectIdRoute,
  getCmsBlogs202609AuthorsCursorQueryRoute,
  getCmsBlogs202609AuthorsCursorRoute,
  getCmsBlogs202609PostsCursorQueryRoute,
  getCmsBlogs202609PostsCursorRoute,
  getCmsBlogs202609PostsObjectIdDraftRoute,
  getCmsBlogs202609PostsObjectIdRoute,
  getCmsBlogs202609PostsRoute,
  getCmsBlogs202609TagsCursorQueryRoute,
  getCmsBlogs202609TagsCursorRoute,
  patchCmsBlogs202609PostsObjectIdDraftRoute,
  patchCmsBlogs202609PostsObjectIdRoute,
  postCmsBlogs202609PostsCloneRoute,
  postCmsBlogs202609PostsObjectIdDraftPushLiveRoute,
  postCmsBlogs202609PostsObjectIdDraftResetRoute,
  postCmsBlogs202609PostsRoute,
  postCmsBlogs202609PostsScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCmsBlogs202609AuthorsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609AuthorsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsBlogs202609PostsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609PostsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609PostsObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdDraftPushLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdDraftResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
