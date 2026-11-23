import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV3UserTokensTokenIdRoute,
  getV3DeploymentsIdOrUrlEventsRoute,
  getV3EventsRoute,
  getV3TeamsTeamIdMembersRoute,
  patchV3DomainsDomainRoute,
  postV3SandboxesNameForkRoute,
  postV3SandboxesRoute,
  postV3SandboxesSessionsSessionIdSnapshotRoute,
  postV3UserTokensRoute,
} from '../routes'

export const getV3DeploymentsIdOrUrlEventsRouteHandler: RouteHandler<
  typeof getV3DeploymentsIdOrUrlEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV3DomainsDomainRouteHandler: RouteHandler<
  typeof patchV3DomainsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3EventsRouteHandler: RouteHandler<typeof getV3EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3SandboxesRouteHandler: RouteHandler<typeof postV3SandboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3SandboxesSessionsSessionIdSnapshotRouteHandler: RouteHandler<
  typeof postV3SandboxesSessionsSessionIdSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3SandboxesNameForkRouteHandler: RouteHandler<
  typeof postV3SandboxesNameForkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3TeamsTeamIdMembersRouteHandler: RouteHandler<
  typeof getV3TeamsTeamIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3UserTokensRouteHandler: RouteHandler<typeof postV3UserTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV3UserTokensTokenIdRouteHandler: RouteHandler<
  typeof deleteV3UserTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
