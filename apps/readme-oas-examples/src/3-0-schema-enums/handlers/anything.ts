import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingStringsRoute,
  postAnythingStringsRoute,
  putAnythingStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(postAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
