import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postGraphDatasourcesGetRoute,
  postGraphDatasourcesListRoute,
  postGraphDatasourcesUpdateRoute,
  postGraphMemberMonitoringstateRoute,
  postGraphMembersGetRoute,
  postGraphMembersListRoute,
  postGraphMembersRemovalRoute,
  postGraphMembersRoute,
  postGraphRemovalRoute,
  postGraphRoute,
} from '../routes'

export const postGraphDatasourcesGetRouteHandler: RouteHandler<
  typeof postGraphDatasourcesGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphRouteHandler: RouteHandler<typeof postGraphRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphMembersRouteHandler: RouteHandler<typeof postGraphMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGraphRemovalRouteHandler: RouteHandler<typeof postGraphRemovalRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGraphMembersRemovalRouteHandler: RouteHandler<
  typeof postGraphMembersRemovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphMembersGetRouteHandler: RouteHandler<
  typeof postGraphMembersGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphDatasourcesListRouteHandler: RouteHandler<
  typeof postGraphDatasourcesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphMembersListRouteHandler: RouteHandler<
  typeof postGraphMembersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphMemberMonitoringstateRouteHandler: RouteHandler<
  typeof postGraphMemberMonitoringstateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphDatasourcesUpdateRouteHandler: RouteHandler<
  typeof postGraphDatasourcesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
