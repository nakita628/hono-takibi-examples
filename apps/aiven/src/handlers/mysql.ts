import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMysqlDatabaseMetadataQueryRoute,
  postMysqlQueryMetadataValidateRoute,
  postMysqlQueryValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mysqlHandler = app
  .openapi(getMysqlDatabaseMetadataQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMysqlQueryMetadataValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMysqlQueryValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
