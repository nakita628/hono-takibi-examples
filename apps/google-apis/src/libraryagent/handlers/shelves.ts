import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentBooksRoute,
  getV1ShelvesRoute,
  postV1NameBorrowRoute,
  postV1NameReturnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shelvesHandler = app
  .openapi(getV1ShelvesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameBorrowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
