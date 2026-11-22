import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCatalogsReportsRoute,
  getCatalogsReportsStatsRoute,
  postCatalogsReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogReportsHandler = app
  .openapi(getCatalogsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsReportsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
