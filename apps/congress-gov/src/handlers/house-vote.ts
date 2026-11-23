import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHouseVoteCongressRoute,
  getHouseVoteCongressSessionRoute,
  getHouseVoteCongressSessionVoteNumberMembersRoute,
  getHouseVoteCongressSessionVoteNumberRoute,
  getHouseVoteRoute,
} from '../routes'

export const getHouseVoteRouteHandler: RouteHandler<typeof getHouseVoteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseVoteCongressRouteHandler: RouteHandler<
  typeof getHouseVoteCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseVoteCongressSessionRouteHandler: RouteHandler<
  typeof getHouseVoteCongressSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseVoteCongressSessionVoteNumberRouteHandler: RouteHandler<
  typeof getHouseVoteCongressSessionVoteNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseVoteCongressSessionVoteNumberMembersRouteHandler: RouteHandler<
  typeof getHouseVoteCongressSessionVoteNumberMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
