import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetServiceLinkedRoleDeletionStatusRoute,
  postActionGetServiceLinkedRoleDeletionStatusRoute,
} from '../routes'

export const getActionGetServiceLinkedRoleDeletionStatusRouteHandler: RouteHandler<
  typeof getActionGetServiceLinkedRoleDeletionStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetServiceLinkedRoleDeletionStatusRouteHandler: RouteHandler<
  typeof postActionGetServiceLinkedRoleDeletionStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
