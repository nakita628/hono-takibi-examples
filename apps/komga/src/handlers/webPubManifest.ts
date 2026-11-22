import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BooksBookIdManifestDivinaRoute,
  getApiV1BooksBookIdManifestEpubRoute,
  getApiV1BooksBookIdManifestPdfRoute,
  getApiV1BooksBookIdManifestRoute,
  getApiV1BooksBookIdPositionsRoute,
  getApiV1BooksBookIdProgressionRoute,
  getApiV1BooksBookIdResourceResourceRoute,
  putApiV1BooksBookIdProgressionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webPubManifestHandler = app
  .openapi(getApiV1BooksBookIdManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdManifestDivinaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdManifestEpubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdManifestPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdProgressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BooksBookIdProgressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdResourceResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
