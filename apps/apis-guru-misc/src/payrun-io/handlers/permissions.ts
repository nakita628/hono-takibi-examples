import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPermissionsRoute,
  getPermissionsTagsRoute,
  getPermissionsTagTagIdRoute,
  postPermissionsRoute,
} from '../routes'

export const getPermissionsRouteHandler: RouteHandler<typeof getPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPermissionsRouteHandler: RouteHandler<typeof postPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPermissionsTagTagIdRouteHandler: RouteHandler<
  typeof getPermissionsTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPermissionsTagsRouteHandler: RouteHandler<typeof getPermissionsTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
