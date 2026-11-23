import type { RouteHandler } from '@hono/zod-openapi'
import type { getDataExtractsEventsRoute, getDataExtractsUserDataRoute } from '../routes'

export const getDataExtractsEventsRouteHandler: RouteHandler<
  typeof getDataExtractsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataExtractsUserDataRouteHandler: RouteHandler<
  typeof getDataExtractsUserDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
