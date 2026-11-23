import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTablesFullNameRoute,
  getTablesFullNameRoute,
  getTablesRoute,
  patchTablesFullNameRoute,
  postTablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
  .openapi(postTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTablesFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTablesFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
