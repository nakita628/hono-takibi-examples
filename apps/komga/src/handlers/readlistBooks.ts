import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ReadlistsIdBooksBookIdNextRoute,
  getApiV1ReadlistsIdBooksBookIdPreviousRoute,
  getApiV1ReadlistsIdBooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const readlistBooksHandler = app
  .openapi(getApiV1ReadlistsIdBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdBooksBookIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdBooksBookIdPreviousRoute, (c) => {
    throw new Error('Not implemented')
  })
