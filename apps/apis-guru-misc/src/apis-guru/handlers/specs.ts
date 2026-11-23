import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpecsProviderApiJsonRoute, getSpecsProviderServiceApiJsonRoute } from '../routes'

export const getSpecsProviderApiJsonRouteHandler: RouteHandler<
  typeof getSpecsProviderApiJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpecsProviderServiceApiJsonRouteHandler: RouteHandler<
  typeof getSpecsProviderServiceApiJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
