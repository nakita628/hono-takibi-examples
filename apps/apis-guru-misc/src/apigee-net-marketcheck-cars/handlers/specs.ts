import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpecsCarAutoCompleteRoute, getSpecsCarTermsRoute } from '../routes'

export const getSpecsCarAutoCompleteRouteHandler: RouteHandler<
  typeof getSpecsCarAutoCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpecsCarTermsRouteHandler: RouteHandler<typeof getSpecsCarTermsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
