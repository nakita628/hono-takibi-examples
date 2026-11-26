import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAuthChallengesIdVerifyRoute,
  postAuthFactorsEnrollRoute,
  getAuthFactorsIdRoute,
  deleteAuthFactorsIdRoute,
  postAuthFactorsIdChallengeRoute,
} from '../routes'

export const postAuthChallengesIdVerifyRouteHandler: RouteHandler<
  typeof postAuthChallengesIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthFactorsEnrollRouteHandler: RouteHandler<
  typeof postAuthFactorsEnrollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthFactorsIdRouteHandler: RouteHandler<typeof getAuthFactorsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAuthFactorsIdRouteHandler: RouteHandler<
  typeof deleteAuthFactorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthFactorsIdChallengeRouteHandler: RouteHandler<
  typeof postAuthFactorsIdChallengeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
