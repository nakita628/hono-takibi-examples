import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatabasesIdRoute,
  getDatabasesIdRoute,
  getDatabasesRoute,
  patchDatabasesIdRoute,
  postDatabasesIdSyncRoute,
  postDatabasesRoute,
} from '../routes'

export const getDatabasesRouteHandler: RouteHandler<typeof getDatabasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatabasesRouteHandler: RouteHandler<typeof postDatabasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabasesIdRouteHandler: RouteHandler<typeof getDatabasesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDatabasesIdRouteHandler: RouteHandler<typeof patchDatabasesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDatabasesIdRouteHandler: RouteHandler<typeof deleteDatabasesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDatabasesIdSyncRouteHandler: RouteHandler<
  typeof postDatabasesIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
