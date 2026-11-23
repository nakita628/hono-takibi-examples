import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExtensionsRoute,
  patchExtensionsBundleNameRoute,
  patchExtensionsNameRoute,
} from '../routes'

export const getExtensionsRouteHandler: RouteHandler<typeof getExtensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExtensionsNameRouteHandler: RouteHandler<
  typeof patchExtensionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExtensionsBundleNameRouteHandler: RouteHandler<
  typeof patchExtensionsBundleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
