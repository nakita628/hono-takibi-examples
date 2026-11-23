import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFeaturesCodePrivilegesPrivilegeCodeRoute,
  deleteFeaturesCodeRoute,
  getFeaturesCodeRoute,
  getFeaturesRoute,
  postFeaturesRoute,
  putFeaturesCodeRoute,
} from '../routes'

export const postFeaturesRouteHandler: RouteHandler<typeof postFeaturesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeaturesRouteHandler: RouteHandler<typeof getFeaturesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeaturesCodeRouteHandler: RouteHandler<typeof putFeaturesCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFeaturesCodeRouteHandler: RouteHandler<typeof deleteFeaturesCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFeaturesCodeRouteHandler: RouteHandler<typeof getFeaturesCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFeaturesCodePrivilegesPrivilegeCodeRouteHandler: RouteHandler<
  typeof deleteFeaturesCodePrivilegesPrivilegeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
