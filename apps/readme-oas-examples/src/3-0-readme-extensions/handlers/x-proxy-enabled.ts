import type { RouteHandler } from '@hono/zod-openapi'
import type { patchXProxyEnabledRoute, postXProxyEnabledRoute } from '../routes'

export const postXProxyEnabledRouteHandler: RouteHandler<typeof postXProxyEnabledRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchXProxyEnabledRouteHandler: RouteHandler<typeof patchXProxyEnabledRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
