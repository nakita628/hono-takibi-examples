import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTablesTableIdRoute,
  deleteTablesTableIdRowsRowIdRoute,
  getTablesTableIdRoute,
  getTablesTableIdRowsRowIdRoute,
  postTablesRoute,
  postTablesSearchRoute,
  postTablesTableIdRowsRoute,
  postTablesTableIdRowsSearchRoute,
  putTablesTableIdRoute,
  putTablesTableIdRowsRowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
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
  .openapi(postTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTablesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
