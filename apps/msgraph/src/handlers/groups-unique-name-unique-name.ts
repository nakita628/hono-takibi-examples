import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsUniqueNameUniqueNameRoute,
  getGroupsUniqueNameUniqueNameRoute,
  patchGroupsUniqueNameUniqueNameRoute,
} from '../routes'

export const getGroupsUniqueNameUniqueNameRouteHandler: RouteHandler<
  typeof getGroupsUniqueNameUniqueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGroupsUniqueNameUniqueNameRouteHandler: RouteHandler<
  typeof patchGroupsUniqueNameUniqueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsUniqueNameUniqueNameRouteHandler: RouteHandler<
  typeof deleteGroupsUniqueNameUniqueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
