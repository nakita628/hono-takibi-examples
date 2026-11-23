import { OpenAPIHono } from '@hono/zod-openapi'
import { getListAuthorsOfPadRoute, postListAuthorsOfPadRoute } from '../routes'

const app = new OpenAPIHono()

export const listAuthorsOfPadHandler = app
  .openapi(getListAuthorsOfPadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListAuthorsOfPadRoute, (c) => {
    throw new Error('Not implemented')
  })
