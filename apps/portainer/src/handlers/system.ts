import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSystemInfoRoute,
  getSystemNodesRoute,
  getSystemStatusRoute,
  getSystemVersionRoute,
  postSystemUpgradeRoute,
} from '../routes'

export const getSystemInfoRouteHandler: RouteHandler<typeof getSystemInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemNodesRouteHandler: RouteHandler<typeof getSystemNodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemStatusRouteHandler: RouteHandler<typeof getSystemStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemUpgradeRouteHandler: RouteHandler<typeof postSystemUpgradeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSystemVersionRouteHandler: RouteHandler<typeof getSystemVersionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
