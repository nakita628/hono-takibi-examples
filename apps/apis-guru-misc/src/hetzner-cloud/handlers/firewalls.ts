import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFirewallsIdRoute,
  getFirewallsIdActionsActionIdRoute,
  getFirewallsIdActionsRoute,
  getFirewallsIdRoute,
  getFirewallsRoute,
  postFirewallsIdActionsApplyToResourcesRoute,
  postFirewallsIdActionsRemoveFromResourcesRoute,
  postFirewallsIdActionsSetRulesRoute,
  postFirewallsRoute,
  putFirewallsIdRoute,
} from '../routes'

export const getFirewallsRouteHandler: RouteHandler<typeof getFirewallsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFirewallsRouteHandler: RouteHandler<typeof postFirewallsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFirewallsIdRouteHandler: RouteHandler<typeof deleteFirewallsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFirewallsIdRouteHandler: RouteHandler<typeof getFirewallsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFirewallsIdRouteHandler: RouteHandler<typeof putFirewallsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFirewallsIdActionsRouteHandler: RouteHandler<
  typeof getFirewallsIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFirewallsIdActionsApplyToResourcesRouteHandler: RouteHandler<
  typeof postFirewallsIdActionsApplyToResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFirewallsIdActionsRemoveFromResourcesRouteHandler: RouteHandler<
  typeof postFirewallsIdActionsRemoveFromResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFirewallsIdActionsSetRulesRouteHandler: RouteHandler<
  typeof postFirewallsIdActionsSetRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFirewallsIdActionsActionIdRouteHandler: RouteHandler<
  typeof getFirewallsIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
