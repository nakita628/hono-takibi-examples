import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookletsBookletIdRoute,
  getBookletsBookletIdRoute,
  getBookletsRoute,
  postBookletsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookletsHandler = app
  .openapi(getBookletsBookletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBookletsBookletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookletsRoute, (c) => {
    throw new Error('Not implemented')
  })
