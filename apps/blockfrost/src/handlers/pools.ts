import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPoolsExtendedRoute,
  getPoolsPoolIdBlocksRoute,
  getPoolsPoolIdDelegatorsRoute,
  getPoolsPoolIdHistoryRoute,
  getPoolsPoolIdMetadataRoute,
  getPoolsPoolIdRelaysRoute,
  getPoolsPoolIdRoute,
  getPoolsPoolIdUpdatesRoute,
  getPoolsPoolIdVotesRoute,
  getPoolsRetiredRoute,
  getPoolsRetiringRoute,
  getPoolsRoute,
} from '../routes'

export const getPoolsRouteHandler: RouteHandler<typeof getPoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsExtendedRouteHandler: RouteHandler<typeof getPoolsExtendedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPoolsRetiredRouteHandler: RouteHandler<typeof getPoolsRetiredRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsRetiringRouteHandler: RouteHandler<typeof getPoolsRetiringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdRouteHandler: RouteHandler<typeof getPoolsPoolIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdHistoryRouteHandler: RouteHandler<
  typeof getPoolsPoolIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdMetadataRouteHandler: RouteHandler<
  typeof getPoolsPoolIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdRelaysRouteHandler: RouteHandler<
  typeof getPoolsPoolIdRelaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdDelegatorsRouteHandler: RouteHandler<
  typeof getPoolsPoolIdDelegatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdBlocksRouteHandler: RouteHandler<
  typeof getPoolsPoolIdBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdUpdatesRouteHandler: RouteHandler<
  typeof getPoolsPoolIdUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoolsPoolIdVotesRouteHandler: RouteHandler<
  typeof getPoolsPoolIdVotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
