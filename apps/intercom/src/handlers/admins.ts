import type { RouteHandler } from '@hono/zod-openapi'
import type {
  putAdminsAdminIdAwayRoute,
  getAdminsActivityLogsRoute,
  postAdminsActivityLogsSearchRoute,
  getAdminsActivityLogEventTypesRoute,
  getAdminsRoute,
  getAdminsAdminIdRoute,
  deleteAdminsRemoveRoute,
} from '../routes'

export const putAdminsAdminIdAwayRouteHandler: RouteHandler<
  typeof putAdminsAdminIdAwayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminsActivityLogsRouteHandler: RouteHandler<
  typeof getAdminsActivityLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminsActivityLogsSearchRouteHandler: RouteHandler<
  typeof postAdminsActivityLogsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminsActivityLogEventTypesRouteHandler: RouteHandler<
  typeof getAdminsActivityLogEventTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminsRouteHandler: RouteHandler<typeof getAdminsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminsAdminIdRouteHandler: RouteHandler<typeof getAdminsAdminIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminsRemoveRouteHandler: RouteHandler<typeof deleteAdminsRemoveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
