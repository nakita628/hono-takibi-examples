import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAbbreviationBookJsonRoute,
  getAbbreviationBooksJsonRoute,
  getAbbreviationBooksTxtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const booksHandler = app
  .openapi(getAbbreviationBooksJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBooksTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
