import type { RouteHandler } from '@hono/zod-openapi'
import type { getCari7AmbientDoseRoute, getCari7EffectiveDoseRoute } from '../routes'

export const getCari7AmbientDoseRouteHandler: RouteHandler<
  typeof getCari7AmbientDoseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCari7EffectiveDoseRouteHandler: RouteHandler<
  typeof getCari7EffectiveDoseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
