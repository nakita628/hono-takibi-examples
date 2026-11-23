import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPutUserPermissionsBoundaryRoute,
  postActionPutUserPermissionsBoundaryRoute,
} from '../routes'

export const getActionPutUserPermissionsBoundaryRouteHandler: RouteHandler<
  typeof getActionPutUserPermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutUserPermissionsBoundaryRouteHandler: RouteHandler<
  typeof postActionPutUserPermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
