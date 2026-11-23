import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteRegistrationcodeRoute, getRegistrationcodeRoute } from '../routes'

export const deleteRegistrationcodeRouteHandler: RouteHandler<
  typeof deleteRegistrationcodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRegistrationcodeRouteHandler: RouteHandler<
  typeof getRegistrationcodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
