import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageSqldbsIdRoute,
  getStorageSqldbsIdRoute,
  getStorageSqldbsRoute,
  postStorageSqldbsIdActionsQueryRoute,
  postStorageSqldbsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sqlDatabasesHandler = app
  .openapi(getStorageSqldbsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageSqldbsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageSqldbsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageSqldbsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageSqldbsIdActionsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
