import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCcrAutoFollowNameRoute,
  getCcrAutoFollowNameRoute,
  getCcrAutoFollowRoute,
  getCcrStatsRoute,
  postCcrAutoFollowNamePauseRoute,
  postCcrAutoFollowNameResumeRoute,
  putCcrAutoFollowNameRoute,
} from '../routes'

export const getCcrAutoFollowNameRouteHandler: RouteHandler<
  typeof getCcrAutoFollowNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCcrAutoFollowNameRouteHandler: RouteHandler<
  typeof putCcrAutoFollowNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCcrAutoFollowNameRouteHandler: RouteHandler<
  typeof deleteCcrAutoFollowNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCcrAutoFollowRouteHandler: RouteHandler<typeof getCcrAutoFollowRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCcrAutoFollowNamePauseRouteHandler: RouteHandler<
  typeof postCcrAutoFollowNamePauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCcrAutoFollowNameResumeRouteHandler: RouteHandler<
  typeof postCcrAutoFollowNameResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCcrStatsRouteHandler: RouteHandler<typeof getCcrStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
