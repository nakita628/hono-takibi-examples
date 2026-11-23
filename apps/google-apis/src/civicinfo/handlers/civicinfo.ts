import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCivicinfoV2DivisionsRoute,
  getCivicinfoV2ElectionsRoute,
  getCivicinfoV2RepresentativesOcdIdRoute,
  getCivicinfoV2RepresentativesRoute,
  getCivicinfoV2VoterinfoRoute,
} from '../routes'

export const getCivicinfoV2DivisionsRouteHandler: RouteHandler<
  typeof getCivicinfoV2DivisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCivicinfoV2ElectionsRouteHandler: RouteHandler<
  typeof getCivicinfoV2ElectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCivicinfoV2RepresentativesRouteHandler: RouteHandler<
  typeof getCivicinfoV2RepresentativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCivicinfoV2RepresentativesOcdIdRouteHandler: RouteHandler<
  typeof getCivicinfoV2RepresentativesOcdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCivicinfoV2VoterinfoRouteHandler: RouteHandler<
  typeof getCivicinfoV2VoterinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
