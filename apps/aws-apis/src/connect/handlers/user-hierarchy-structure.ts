import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserHierarchyStructureInstanceIdRoute,
  postUserHierarchyStructureInstanceIdRoute,
} from '../routes'

export const getUserHierarchyStructureInstanceIdRouteHandler: RouteHandler<
  typeof getUserHierarchyStructureInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserHierarchyStructureInstanceIdRouteHandler: RouteHandler<
  typeof postUserHierarchyStructureInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
