import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBooksV1CloudloadingAddBookRoute,
  postBooksV1CloudloadingDeleteBookRoute,
  postBooksV1CloudloadingUpdateBookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudloadingHandler = app
  .openapi(postBooksV1CloudloadingAddBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1CloudloadingDeleteBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1CloudloadingUpdateBookRoute, (c) => {
    throw new Error('Not implemented')
  })
