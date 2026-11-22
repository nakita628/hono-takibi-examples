import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionDatabasesMysqlConfigRoute,
  getApiVersionDatabasesPostgresqlConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedParametersHandler = app
  .openapi(getApiVersionDatabasesMysqlConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
