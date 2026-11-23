import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGoalRelationshipsGoalRelationshipGidRoute,
  getGoalRelationshipsRoute,
  putGoalRelationshipsGoalRelationshipGidRoute,
} from '../routes'

export const getGoalRelationshipsGoalRelationshipGidRouteHandler: RouteHandler<
  typeof getGoalRelationshipsGoalRelationshipGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGoalRelationshipsGoalRelationshipGidRouteHandler: RouteHandler<
  typeof putGoalRelationshipsGoalRelationshipGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGoalRelationshipsRouteHandler: RouteHandler<
  typeof getGoalRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
