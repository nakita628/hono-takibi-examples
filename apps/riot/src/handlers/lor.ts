import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLorDeckV1DecksMeRoute,
  getLorInventoryV1CardsMeRoute,
  getLorMatchV1MatchesByPuuidPuuidIdsRoute,
  getLorMatchV1MatchesMatchIdRoute,
  getLorRankedV1LeaderboardsRoute,
  getLorStatusV1PlatformDataRoute,
  postLorDeckV1DecksMeRoute,
} from '../routes'

export const getLorDeckV1DecksMeRouteHandler: RouteHandler<
  typeof getLorDeckV1DecksMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLorDeckV1DecksMeRouteHandler: RouteHandler<
  typeof postLorDeckV1DecksMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLorInventoryV1CardsMeRouteHandler: RouteHandler<
  typeof getLorInventoryV1CardsMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLorMatchV1MatchesByPuuidPuuidIdsRouteHandler: RouteHandler<
  typeof getLorMatchV1MatchesByPuuidPuuidIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLorMatchV1MatchesMatchIdRouteHandler: RouteHandler<
  typeof getLorMatchV1MatchesMatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLorRankedV1LeaderboardsRouteHandler: RouteHandler<
  typeof getLorRankedV1LeaderboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLorStatusV1PlatformDataRouteHandler: RouteHandler<
  typeof getLorStatusV1PlatformDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
