import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsExportsIdIndexRoute,
  getReportsExportsIdIndexRoute,
  getReportsExportsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsExportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsExportsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsExportsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
