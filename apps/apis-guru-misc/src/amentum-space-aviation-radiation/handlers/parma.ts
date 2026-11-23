import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getParmaAmbientDoseRoute,
  getParmaDifferentialIntensityRoute,
  getParmaEffectiveDoseRoute,
} from '../routes'

export const getParmaAmbientDoseRouteHandler: RouteHandler<
  typeof getParmaAmbientDoseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getParmaDifferentialIntensityRouteHandler: RouteHandler<
  typeof getParmaDifferentialIntensityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getParmaEffectiveDoseRouteHandler: RouteHandler<
  typeof getParmaEffectiveDoseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
