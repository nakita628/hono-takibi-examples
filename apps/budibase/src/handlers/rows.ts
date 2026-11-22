import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTablesTableIdRowsRowIdRoute,
  getTablesTableIdRowsRowIdRoute,
  postTablesTableIdRowsRoute,
  postTablesTableIdRowsSearchRoute,
  postViewsViewIdRowsSearchRoute,
  putTablesTableIdRowsRowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rowsHandler = app
  .openapi(postTablesTableIdRowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTablesTableIdRowsRowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTablesTableIdRowsRowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesTableIdRowsRowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTablesTableIdRowsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postViewsViewIdRowsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
