import { OpenAPIHono } from '@hono/zod-openapi'
import { getBooksRoute } from '../routes'

const app = new OpenAPIHono()

export const booksHandler = app.openapi(getBooksRoute, (c) => {
  throw new Error('Not implemented')
})
