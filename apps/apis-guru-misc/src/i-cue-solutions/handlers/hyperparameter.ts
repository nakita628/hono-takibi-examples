import type { RouteHandler } from '@hono/zod-openapi'
import type { getHyperparameterRoute, postHyperparameterRoute } from '../routes'

export const getHyperparameterRouteHandler: RouteHandler<typeof getHyperparameterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postHyperparameterRouteHandler: RouteHandler<typeof postHyperparameterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
