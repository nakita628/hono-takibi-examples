import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRolesAccountKindIdentifierRoute,
  getRolesAccountKindIdentifierRoute,
  postRolesAccountKindIdentifierRoute,
} from '../routes'

export const deleteRolesAccountKindIdentifierRouteHandler: RouteHandler<
  typeof deleteRolesAccountKindIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRolesAccountKindIdentifierRouteHandler: RouteHandler<
  typeof getRolesAccountKindIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesAccountKindIdentifierRouteHandler: RouteHandler<
  typeof postRolesAccountKindIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
