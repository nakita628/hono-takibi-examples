import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsBlogs202609TagsBatchArchiveRoute,
  postCmsBlogs202609TagsBatchCreateRoute,
  postCmsBlogs202609TagsBatchReadRoute,
  postCmsBlogs202609TagsBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCmsBlogs202609TagsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
