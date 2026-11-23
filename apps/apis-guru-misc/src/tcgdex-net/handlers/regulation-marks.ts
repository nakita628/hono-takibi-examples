import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegulationMarksRegulationMarkRoute, getRegulationMarksRoute } from '../routes'

export const getRegulationMarksRouteHandler: RouteHandler<typeof getRegulationMarksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRegulationMarksRegulationMarkRouteHandler: RouteHandler<
  typeof getRegulationMarksRegulationMarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
