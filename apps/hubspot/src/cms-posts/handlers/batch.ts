import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsBlogs202609PostsBatchArchiveRoute,
  postCmsBlogs202609PostsBatchCreateRoute,
  postCmsBlogs202609PostsBatchReadRoute,
  postCmsBlogs202609PostsBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCmsBlogs202609PostsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
