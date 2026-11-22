import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRoute,
  getCmsBlogs202609PostsObjectIdRevisionsRoute,
  postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRoute,
  postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revisionsHandler = app
  .openapi(getCmsBlogs202609PostsObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
