import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getServicesAddonNameManifestRoute,
  getServicesAddonNameRoute,
  getServicesIndexRoute,
} from '../routes'

export const getServicesIndexRouteHandler: RouteHandler<typeof getServicesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServicesAddonNameRouteHandler: RouteHandler<
  typeof getServicesAddonNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicesAddonNameManifestRouteHandler: RouteHandler<
  typeof getServicesAddonNameManifestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
