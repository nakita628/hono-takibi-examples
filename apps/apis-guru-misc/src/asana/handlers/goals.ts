import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGoalsGoalGidRoute,
  getGoalsGoalGidParentGoalsRoute,
  getGoalsGoalGidRoute,
  getGoalsRoute,
  postGoalsGoalGidAddFollowersRoute,
  postGoalsGoalGidAddSupportingRelationshipRoute,
  postGoalsGoalGidRemoveFollowersRoute,
  postGoalsGoalGidRemoveSupportingRelationshipRoute,
  postGoalsGoalGidSetMetricCurrentValueRoute,
  postGoalsGoalGidSetMetricRoute,
  postGoalsRoute,
  putGoalsGoalGidRoute,
} from '../routes'

export const getGoalsRouteHandler: RouteHandler<typeof getGoalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGoalsRouteHandler: RouteHandler<typeof postGoalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGoalsGoalGidRouteHandler: RouteHandler<typeof deleteGoalsGoalGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGoalsGoalGidRouteHandler: RouteHandler<typeof getGoalsGoalGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putGoalsGoalGidRouteHandler: RouteHandler<typeof putGoalsGoalGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGoalsGoalGidAddFollowersRouteHandler: RouteHandler<
  typeof postGoalsGoalGidAddFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGoalsGoalGidAddSupportingRelationshipRouteHandler: RouteHandler<
  typeof postGoalsGoalGidAddSupportingRelationshipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGoalsGoalGidParentGoalsRouteHandler: RouteHandler<
  typeof getGoalsGoalGidParentGoalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGoalsGoalGidRemoveFollowersRouteHandler: RouteHandler<
  typeof postGoalsGoalGidRemoveFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGoalsGoalGidRemoveSupportingRelationshipRouteHandler: RouteHandler<
  typeof postGoalsGoalGidRemoveSupportingRelationshipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGoalsGoalGidSetMetricRouteHandler: RouteHandler<
  typeof postGoalsGoalGidSetMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGoalsGoalGidSetMetricCurrentValueRouteHandler: RouteHandler<
  typeof postGoalsGoalGidSetMetricCurrentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}
