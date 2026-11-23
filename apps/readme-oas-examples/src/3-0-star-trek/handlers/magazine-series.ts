import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMagazineSeriesRoute,
  getMagazineSeriesSearchRoute,
  postMagazineSeriesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magazineSeriesHandler = app
  .openapi(getMagazineSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMagazineSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMagazineSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
