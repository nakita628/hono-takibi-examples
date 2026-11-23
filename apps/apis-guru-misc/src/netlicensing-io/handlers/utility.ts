import type { RouteHandler } from '@hono/zod-openapi'
import type { getUtilityLicenseTypesRoute, getUtilityLicensingModelsRoute } from '../routes'

export const getUtilityLicenseTypesRouteHandler: RouteHandler<
  typeof getUtilityLicenseTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUtilityLicensingModelsRouteHandler: RouteHandler<
  typeof getUtilityLicensingModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
