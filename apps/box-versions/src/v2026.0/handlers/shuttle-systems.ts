import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteShuttleSystemsShuttleSystemIdRoute,
  getShuttleSystemsRoute,
  getShuttleSystemsShuttleSystemIdRoute,
  postShuttleSystemsRoute,
  postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute,
  putShuttleSystemsShuttleSystemIdRoute,
} from '../routes'

export const getShuttleSystemsRouteHandler: RouteHandler<typeof getShuttleSystemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postShuttleSystemsRouteHandler: RouteHandler<typeof postShuttleSystemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShuttleSystemsShuttleSystemIdRouteHandler: RouteHandler<
  typeof getShuttleSystemsShuttleSystemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putShuttleSystemsShuttleSystemIdRouteHandler: RouteHandler<
  typeof putShuttleSystemsShuttleSystemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteShuttleSystemsShuttleSystemIdRouteHandler: RouteHandler<
  typeof deleteShuttleSystemsShuttleSystemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRouteHandler: RouteHandler<
  typeof postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
