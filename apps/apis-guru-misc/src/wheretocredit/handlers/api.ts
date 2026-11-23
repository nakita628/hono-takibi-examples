import type { RouteHandler } from '@hono/zod-openapi'
import type { getApi10ProgramsRoute, postApi10CalculateRoute } from '../routes'

export const postApi10CalculateRouteHandler: RouteHandler<typeof postApi10CalculateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApi10ProgramsRouteHandler: RouteHandler<typeof getApi10ProgramsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
