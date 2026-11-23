import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2beta1NameOperationsRoute, getV2beta1NameRoute } from '../routes'

export const getV2beta1NameRouteHandler: RouteHandler<typeof getV2beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2beta1NameOperationsRouteHandler: RouteHandler<
  typeof getV2beta1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
