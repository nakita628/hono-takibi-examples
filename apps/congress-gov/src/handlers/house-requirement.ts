import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHouseRequirementRequirementNumberMatchingCommunicationsRoute,
  getHouseRequirementRequirementNumberRoute,
  getHouseRequirementRoute,
} from '../routes'

export const getHouseRequirementRouteHandler: RouteHandler<
  typeof getHouseRequirementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseRequirementRequirementNumberRouteHandler: RouteHandler<
  typeof getHouseRequirementRequirementNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseRequirementRequirementNumberMatchingCommunicationsRouteHandler: RouteHandler<
  typeof getHouseRequirementRequirementNumberMatchingCommunicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
