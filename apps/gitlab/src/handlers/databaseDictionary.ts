import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AdminDatabasesDatabaseNameDictionaryTablesTableNameRoute,
  getApiV4DatabasesDatabaseNameDictionaryTablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databaseDictionaryHandler = app
  .openapi(getApiV4DatabasesDatabaseNameDictionaryTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminDatabasesDatabaseNameDictionaryTablesTableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
