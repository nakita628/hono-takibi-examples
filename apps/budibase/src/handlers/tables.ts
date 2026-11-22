import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTablesTableIdRoute,
  getTablesTableIdRoute,
  postTablesRoute,
  postTablesSearchRoute,
  putTablesTableIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
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
