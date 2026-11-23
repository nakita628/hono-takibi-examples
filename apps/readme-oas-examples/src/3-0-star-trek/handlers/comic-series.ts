import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getComicSeriesRoute,
  getComicSeriesSearchRoute,
  postComicSeriesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const comicSeriesHandler = app
  .openapi(getComicSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComicSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postComicSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
