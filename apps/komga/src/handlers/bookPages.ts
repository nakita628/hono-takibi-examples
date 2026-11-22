import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BooksBookIdPagesPageNumberRawRoute,
  getApiV1BooksBookIdPagesPageNumberRoute,
  getApiV1BooksBookIdPagesPageNumberThumbnailRoute,
  getApiV1BooksBookIdPagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookPagesHandler = app
  .openapi(getApiV1BooksBookIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPagesPageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPagesPageNumberRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPagesPageNumberThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
