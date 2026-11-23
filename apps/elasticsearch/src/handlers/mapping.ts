import type { RouteHandler } from '@hono/zod-openapi'
import type { getMappingFieldFieldsRoute, getMappingRoute } from '../routes'

export const getMappingFieldFieldsRouteHandler: RouteHandler<
  typeof getMappingFieldFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMappingRouteHandler: RouteHandler<typeof getMappingRoute> = async (c) => {
  throw new Error('Not implemented')
}
