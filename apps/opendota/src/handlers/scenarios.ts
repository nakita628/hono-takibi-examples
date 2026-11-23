import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getScenariosItemTimingsRoute,
  getScenariosLaneRolesRoute,
  getScenariosMiscRoute,
} from '../routes'

export const getScenariosItemTimingsRouteHandler: RouteHandler<
  typeof getScenariosItemTimingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScenariosLaneRolesRouteHandler: RouteHandler<
  typeof getScenariosLaneRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScenariosMiscRouteHandler: RouteHandler<typeof getScenariosMiscRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
