import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1TransientBooksIdPagesPageNumberRoute,
  postApiV1BooksImportRoute,
  postApiV1TransientBooksIdAnalyzeRoute,
  postApiV1TransientBooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importHandler = app
  .openapi(postApiV1BooksImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TransientBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TransientBooksIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TransientBooksIdPagesPageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
