import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatabasesIdRoute,
  getDatabasesIdRoute,
  getDatabasesRoute,
  patchDatabasesIdRoute,
  postDatabasesIdSyncRoute,
  postDatabasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databasesHandler = app
  .openapi(getDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
