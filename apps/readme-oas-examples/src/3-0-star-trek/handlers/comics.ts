import { OpenAPIHono } from '@hono/zod-openapi'
import { getComicsRoute, getComicsSearchRoute, postComicsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const comicsHandler = app
  .openapi(getComicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComicsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postComicsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
