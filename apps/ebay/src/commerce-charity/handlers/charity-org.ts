import type { RouteHandler } from '@hono/zod-openapi'
import type { getCharityOrgCharityOrgIdRoute, getCharityOrgRoute } from '../routes'

export const getCharityOrgRouteHandler: RouteHandler<typeof getCharityOrgRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharityOrgCharityOrgIdRouteHandler: RouteHandler<
  typeof getCharityOrgCharityOrgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
