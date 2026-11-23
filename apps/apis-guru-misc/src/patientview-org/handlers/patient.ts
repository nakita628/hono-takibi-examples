import type { RouteHandler } from '@hono/zod-openapi'
import type { getPatientUserIdBasicRoute } from '../routes'

export const getPatientUserIdBasicRouteHandler: RouteHandler<
  typeof getPatientUserIdBasicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
