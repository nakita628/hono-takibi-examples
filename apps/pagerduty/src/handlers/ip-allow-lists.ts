import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIpAllowListsRoute,
  getIpAllowListsRoute,
  getIpAllowListsIdRoute,
  putIpAllowListsIdRoute,
  deleteIpAllowListsIdRoute,
  getIpAllowListsIdAuditRecordsRoute,
} from '../routes'

export const postIpAllowListsRouteHandler: RouteHandler<typeof postIpAllowListsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIpAllowListsRouteHandler: RouteHandler<typeof getIpAllowListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpAllowListsIdRouteHandler: RouteHandler<typeof getIpAllowListsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIpAllowListsIdRouteHandler: RouteHandler<typeof putIpAllowListsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpAllowListsIdRouteHandler: RouteHandler<
  typeof deleteIpAllowListsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpAllowListsIdAuditRecordsRouteHandler: RouteHandler<
  typeof getIpAllowListsIdAuditRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
