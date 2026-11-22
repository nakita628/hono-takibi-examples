import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSearchChaptersBySeriesRoute,
  getApiSearchSearchRoute,
  getApiSearchSeriesForChapterRoute,
  getApiSearchSeriesForMangafileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getApiSearchSeriesForMangafileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchSeriesForChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchChaptersBySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
