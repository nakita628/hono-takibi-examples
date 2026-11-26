import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClusterGroupsRequestsRoute,
  deleteClusterGroupsRequestsIdRoute,
  postClusterGroupsRequestsIdAcceptRoute,
  postClusterGroupsIdLeaveRoute,
  postClusterGroupsIdRegeneratePeopleRoute,
  getClusterGroupsIdRequestsRoute,
  putClusterGroupsIdRequestsRoute,
  getClusterGroupsIdUsersRoute,
} from '../routes'

export const getClusterGroupsRequestsRouteHandler: RouteHandler<
  typeof getClusterGroupsRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteClusterGroupsRequestsIdRouteHandler: RouteHandler<
  typeof deleteClusterGroupsRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterGroupsRequestsIdAcceptRouteHandler: RouteHandler<
  typeof postClusterGroupsRequestsIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterGroupsIdLeaveRouteHandler: RouteHandler<
  typeof postClusterGroupsIdLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterGroupsIdRegeneratePeopleRouteHandler: RouteHandler<
  typeof postClusterGroupsIdRegeneratePeopleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterGroupsIdRequestsRouteHandler: RouteHandler<
  typeof getClusterGroupsIdRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putClusterGroupsIdRequestsRouteHandler: RouteHandler<
  typeof putClusterGroupsIdRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterGroupsIdUsersRouteHandler: RouteHandler<
  typeof getClusterGroupsIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
