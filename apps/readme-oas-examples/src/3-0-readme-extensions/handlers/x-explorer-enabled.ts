import type { RouteHandler } from '@hono/zod-openapi'
import type { patchXExplorerEnabledRoute, postXExplorerEnabledRoute } from '../routes'

export const postXExplorerEnabledRouteHandler: RouteHandler<
  typeof postXExplorerEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchXExplorerEnabledRouteHandler: RouteHandler<
  typeof patchXExplorerEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
