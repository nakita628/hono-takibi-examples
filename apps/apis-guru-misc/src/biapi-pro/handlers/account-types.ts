import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountTypesIdAccountTypeRoute, getAccountTypesRoute } from '../routes'

export const getAccountTypesRouteHandler: RouteHandler<typeof getAccountTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountTypesIdAccountTypeRouteHandler: RouteHandler<
  typeof getAccountTypesIdAccountTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
