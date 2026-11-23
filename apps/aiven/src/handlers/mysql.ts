import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMysqlDatabaseMetadataQueryRoute,
  postMysqlQueryMetadataValidateRoute,
  postMysqlQueryValidateRoute,
} from '../routes'

export const getMysqlDatabaseMetadataQueryRouteHandler: RouteHandler<
  typeof getMysqlDatabaseMetadataQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMysqlQueryMetadataValidateRouteHandler: RouteHandler<
  typeof postMysqlQueryMetadataValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMysqlQueryValidateRouteHandler: RouteHandler<
  typeof postMysqlQueryValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
