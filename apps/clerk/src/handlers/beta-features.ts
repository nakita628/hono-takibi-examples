import type { RouteHandler } from '@hono/zod-openapi'
import type { patchBetaFeaturesInstanceSettingsRoute, putBetaFeaturesDomainRoute } from '../routes'

export const patchBetaFeaturesInstanceSettingsRouteHandler: RouteHandler<
  typeof patchBetaFeaturesInstanceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBetaFeaturesDomainRouteHandler: RouteHandler<
  typeof putBetaFeaturesDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
