import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectServiceServiceNameConnectionPoolPoolNameRoute,
  getPgDatabaseMetadataQueryRoute,
  getProjectProjectServiceServiceNamePgAvailableExtensionsRoute,
  postAccountAccountIdPgQueryOptimizeRoute,
  postPgQueryMetadataValidateRoute,
  postPgQueryValidateRoute,
  postProjectProjectServiceServiceNameConnectionPoolRoute,
  postProjectProjectServiceServiceNamePgQueryStatsRoute,
  postProjectProjectServiceServiceNameQueryStatsRoute,
  putProjectProjectServiceServiceNameConnectionPoolPoolNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePostgreSQLHandler = app
  .openapi(postAccountAccountIdPgQueryOptimizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNamePgAvailableExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPgDatabaseMetadataQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPgQueryMetadataValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNamePgQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPgQueryValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectionPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameConnectionPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameConnectionPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
