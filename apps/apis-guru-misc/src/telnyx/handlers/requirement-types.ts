import type { RouteHandler } from '@hono/zod-openapi'
import type { getRequirementTypesIdRoute, getRequirementTypesRoute } from '../routes'

export const getRequirementTypesRouteHandler: RouteHandler<
  typeof getRequirementTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequirementTypesIdRouteHandler: RouteHandler<
  typeof getRequirementTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
