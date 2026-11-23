import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlacementGroupsIdRoute,
  getPlacementGroupsIdRoute,
  getPlacementGroupsRoute,
  postPlacementGroupsRoute,
  putPlacementGroupsIdRoute,
} from '../routes'

export const getPlacementGroupsRouteHandler: RouteHandler<typeof getPlacementGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPlacementGroupsRouteHandler: RouteHandler<
  typeof postPlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacementGroupsIdRouteHandler: RouteHandler<
  typeof getPlacementGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPlacementGroupsIdRouteHandler: RouteHandler<
  typeof putPlacementGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacementGroupsIdRouteHandler: RouteHandler<
  typeof deletePlacementGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
