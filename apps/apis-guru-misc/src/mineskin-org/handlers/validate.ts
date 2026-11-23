import type { RouteHandler } from '@hono/zod-openapi'
import type { getValidateNameNameRoute, getValidateUuidUuidRoute } from '../routes'

export const getValidateNameNameRouteHandler: RouteHandler<
  typeof getValidateNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getValidateUuidUuidRouteHandler: RouteHandler<
  typeof getValidateUuidUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
