import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTablesFullNameRoute,
  getTablesFullNameRoute,
  getTablesRoute,
  patchTablesFullNameRoute,
  postTablesRoute,
} from '../routes'

export const postTablesRouteHandler: RouteHandler<typeof postTablesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTablesRouteHandler: RouteHandler<typeof getTablesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTablesFullNameRouteHandler: RouteHandler<typeof getTablesFullNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchTablesFullNameRouteHandler: RouteHandler<
  typeof patchTablesFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTablesFullNameRouteHandler: RouteHandler<
  typeof deleteTablesFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
