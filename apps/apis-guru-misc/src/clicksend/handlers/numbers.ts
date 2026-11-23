import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNumbersRoute,
  getNumbersSearchCountrySearch1SearchType2Route,
  postNumbersBuyDedicatedNumberRoute,
} from '../routes'

export const getNumbersRouteHandler: RouteHandler<typeof getNumbersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumbersBuyDedicatedNumberRouteHandler: RouteHandler<
  typeof postNumbersBuyDedicatedNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNumbersSearchCountrySearch1SearchType2RouteHandler: RouteHandler<
  typeof getNumbersSearchCountrySearch1SearchType2Route
> = async (c) => {
  throw new Error('Not implemented')
}
