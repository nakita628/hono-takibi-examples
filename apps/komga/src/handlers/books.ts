import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BooksBookIdFileRoute,
  deleteApiV1BooksBookIdReadProgressRoute,
  getApiV1BooksBookIdFileRoute,
  getApiV1BooksBookIdFileStarRoute,
  getApiV1BooksBookIdNextRoute,
  getApiV1BooksBookIdPreviousRoute,
  getApiV1BooksBookIdReadlistsRoute,
  getApiV1BooksBookIdRoute,
  getApiV1BooksDuplicatesRoute,
  getApiV1BooksLatestRoute,
  getApiV1BooksOndeckRoute,
  getApiV1BooksRoute,
  patchApiV1BooksBookIdMetadataRoute,
  patchApiV1BooksBookIdReadProgressRoute,
  patchApiV1BooksMetadataRoute,
  postApiV1BooksBookIdAnalyzeRoute,
  postApiV1BooksBookIdMetadataRefreshRoute,
  postApiV1BooksListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const booksHandler = app
  .openapi(getApiV1BooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksDuplicatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1BooksMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksOndeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksBookIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BooksBookIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdFileStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1BooksBookIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksBookIdMetadataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPreviousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BooksBookIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1BooksBookIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdReadlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
