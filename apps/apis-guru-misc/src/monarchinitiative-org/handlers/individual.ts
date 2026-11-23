import type { RouteHandler } from '@hono/zod-openapi'
import type { getIndividualIdRoute, getIndividualPedigreeIdRoute } from '../routes'

export const getIndividualPedigreeIdRouteHandler: RouteHandler<
  typeof getIndividualPedigreeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIndividualIdRouteHandler: RouteHandler<typeof getIndividualIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
