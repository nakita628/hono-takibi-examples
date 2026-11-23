import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRecruitingGroupsRoute,
  getRecruitingPlayersRoute,
  getRecruitingTeamsRoute,
} from '../routes'

export const getRecruitingGroupsRouteHandler: RouteHandler<
  typeof getRecruitingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecruitingPlayersRouteHandler: RouteHandler<
  typeof getRecruitingPlayersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecruitingTeamsRouteHandler: RouteHandler<typeof getRecruitingTeamsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
