import { OpenAPIHono } from '@hono/zod-openapi'
import { getComicStripRoute, getComicStripSearchRoute, postComicStripSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const comicStripHandler = app
  .openapi(getComicStripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComicStripSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postComicStripSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
