import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSqlAsyncDeleteIdRoute,
  getSqlAsyncIdRoute,
  getSqlAsyncStatusIdRoute,
  getSqlRoute,
  getSqlTranslateRoute,
  postSqlCloseRoute,
  postSqlRoute,
  postSqlTranslateRoute,
} from '../routes'

export const postSqlCloseRouteHandler: RouteHandler<typeof postSqlCloseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSqlAsyncDeleteIdRouteHandler: RouteHandler<
  typeof deleteSqlAsyncDeleteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSqlAsyncIdRouteHandler: RouteHandler<typeof getSqlAsyncIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSqlAsyncStatusIdRouteHandler: RouteHandler<
  typeof getSqlAsyncStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSqlRouteHandler: RouteHandler<typeof getSqlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSqlRouteHandler: RouteHandler<typeof postSqlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSqlTranslateRouteHandler: RouteHandler<typeof getSqlTranslateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSqlTranslateRouteHandler: RouteHandler<typeof postSqlTranslateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
