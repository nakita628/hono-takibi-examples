import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMysqlDatabaseMetadataQueryRoute,
  postAccountAccountIdMysqlQueryOptimizeRoute,
  postMysqlQueryMetadataValidateRoute,
  postMysqlQueryValidateRoute,
  postProjectProjectServiceServiceNameMysqlQueryStatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceMySQLHandler = app
  .openapi(postAccountAccountIdMysqlQueryOptimizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMysqlDatabaseMetadataQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMysqlQueryMetadataValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameMysqlQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMysqlQueryValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
