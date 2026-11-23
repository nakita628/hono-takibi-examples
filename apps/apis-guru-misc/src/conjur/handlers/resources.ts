import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourcesAccountKindIdentifierRoute,
  getResourcesAccountKindRoute,
  getResourcesAccountRoute,
  getResourcesRoute,
} from '../routes'

export const getResourcesRouteHandler: RouteHandler<typeof getResourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourcesAccountRouteHandler: RouteHandler<
  typeof getResourcesAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourcesAccountKindRouteHandler: RouteHandler<
  typeof getResourcesAccountKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourcesAccountKindIdentifierRouteHandler: RouteHandler<
  typeof getResourcesAccountKindIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
