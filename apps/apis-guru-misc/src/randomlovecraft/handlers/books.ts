import { OpenAPIHono } from '@hono/zod-openapi'
import { getBooksIdSentencesRoute, getBooksRoute } from '../routes'

const app = new OpenAPIHono()

export const booksHandler = app
  .openapi(getBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksIdSentencesRoute, (c) => {
    throw new Error('Not implemented')
  })
