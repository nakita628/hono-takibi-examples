import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsBlogs202609AuthorsBatchArchiveRoute,
  postCmsBlogs202609AuthorsBatchCreateRoute,
  postCmsBlogs202609AuthorsBatchReadRoute,
  postCmsBlogs202609AuthorsBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCmsBlogs202609AuthorsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
