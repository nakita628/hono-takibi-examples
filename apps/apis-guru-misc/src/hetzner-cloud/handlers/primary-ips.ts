import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePrimaryIpsIdRoute,
  getPrimaryIpsIdRoute,
  getPrimaryIpsRoute,
  postPrimaryIpsIdActionsAssignRoute,
  postPrimaryIpsIdActionsChangeDnsPtrRoute,
  postPrimaryIpsIdActionsChangeProtectionRoute,
  postPrimaryIpsIdActionsUnassignRoute,
  postPrimaryIpsRoute,
  putPrimaryIpsIdRoute,
} from '../routes'

export const getPrimaryIpsRouteHandler: RouteHandler<typeof getPrimaryIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrimaryIpsRouteHandler: RouteHandler<typeof postPrimaryIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrimaryIpsIdRouteHandler: RouteHandler<typeof deletePrimaryIpsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPrimaryIpsIdRouteHandler: RouteHandler<typeof getPrimaryIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPrimaryIpsIdRouteHandler: RouteHandler<typeof putPrimaryIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrimaryIpsIdActionsAssignRouteHandler: RouteHandler<
  typeof postPrimaryIpsIdActionsAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrimaryIpsIdActionsChangeDnsPtrRouteHandler: RouteHandler<
  typeof postPrimaryIpsIdActionsChangeDnsPtrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrimaryIpsIdActionsChangeProtectionRouteHandler: RouteHandler<
  typeof postPrimaryIpsIdActionsChangeProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrimaryIpsIdActionsUnassignRouteHandler: RouteHandler<
  typeof postPrimaryIpsIdActionsUnassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}
