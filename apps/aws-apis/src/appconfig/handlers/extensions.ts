import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteExtensionsExtensionIdentifierRoute,
  getExtensionsExtensionIdentifierRoute,
  getExtensionsRoute,
  patchExtensionsExtensionIdentifierRoute,
  postExtensionsRoute,
} from '../routes'

export const postExtensionsRouteHandler: RouteHandler<typeof postExtensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtensionsRouteHandler: RouteHandler<typeof getExtensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteExtensionsExtensionIdentifierRouteHandler: RouteHandler<
  typeof deleteExtensionsExtensionIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtensionsExtensionIdentifierRouteHandler: RouteHandler<
  typeof getExtensionsExtensionIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExtensionsExtensionIdentifierRouteHandler: RouteHandler<
  typeof patchExtensionsExtensionIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
