import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPgDatabaseMetadataQueryRoute,
  postPgQueryMetadataValidateRoute,
  postPgQueryValidateRoute,
} from '../routes'

export const getPgDatabaseMetadataQueryRouteHandler: RouteHandler<
  typeof getPgDatabaseMetadataQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPgQueryMetadataValidateRouteHandler: RouteHandler<
  typeof postPgQueryMetadataValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPgQueryValidateRouteHandler: RouteHandler<
  typeof postPgQueryValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
