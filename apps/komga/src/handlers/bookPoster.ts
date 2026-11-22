import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BooksBookIdThumbnailsThumbnailIdRoute,
  getApiV1BooksBookIdThumbnailRoute,
  getApiV1BooksBookIdThumbnailsRoute,
  getApiV1BooksBookIdThumbnailsThumbnailIdRoute,
  postApiV1BooksBookIdThumbnailsRoute,
  putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRoute,
  putApiV1BooksThumbnailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookPosterHandler = app
  .openapi(putApiV1BooksThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksBookIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BooksBookIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
