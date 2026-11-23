import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupGroupIdentifierRoute,
  getGroupGroupIdentifierRoute,
  patchGroupGroupIdentifierAssociateRoute,
  patchGroupGroupIdentifierDisassociateRoute,
  postGroupGroupIdentifierResourcesRoute,
  postGroupRoute,
} from '../routes'

export const patchGroupGroupIdentifierAssociateRouteHandler: RouteHandler<
  typeof patchGroupGroupIdentifierAssociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupRouteHandler: RouteHandler<typeof postGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupGroupIdentifierRouteHandler: RouteHandler<
  typeof deleteGroupGroupIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupGroupIdentifierRouteHandler: RouteHandler<
  typeof getGroupGroupIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGroupGroupIdentifierDisassociateRouteHandler: RouteHandler<
  typeof patchGroupGroupIdentifierDisassociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupGroupIdentifierResourcesRouteHandler: RouteHandler<
  typeof postGroupGroupIdentifierResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
