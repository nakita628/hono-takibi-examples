import type { RouteHandler } from '@hono/zod-openapi'
import type { getRouteAmbientDoseRoute, getRouteEffectiveDoseRoute } from '../routes'

export const getRouteAmbientDoseRouteHandler: RouteHandler<
  typeof getRouteAmbientDoseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRouteEffectiveDoseRouteHandler: RouteHandler<
  typeof getRouteEffectiveDoseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
