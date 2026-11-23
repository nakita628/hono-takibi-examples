import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIpsCancelWarmupRoute,
  postIpsCheckCustomDnsRoute,
  postIpsCreatePoolRoute,
  postIpsDeletePoolRoute,
  postIpsDeleteRoute,
  postIpsInfoRoute,
  postIpsListPoolsRoute,
  postIpsListRoute,
  postIpsPoolInfoRoute,
  postIpsProvisionRoute,
  postIpsSetCustomDnsRoute,
  postIpsSetPoolRoute,
  postIpsStartWarmupRoute,
} from '../routes'

export const postIpsListRouteHandler: RouteHandler<typeof postIpsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsInfoRouteHandler: RouteHandler<typeof postIpsInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsProvisionRouteHandler: RouteHandler<typeof postIpsProvisionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpsStartWarmupRouteHandler: RouteHandler<typeof postIpsStartWarmupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpsCancelWarmupRouteHandler: RouteHandler<
  typeof postIpsCancelWarmupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsSetPoolRouteHandler: RouteHandler<typeof postIpsSetPoolRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsDeleteRouteHandler: RouteHandler<typeof postIpsDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsListPoolsRouteHandler: RouteHandler<typeof postIpsListPoolsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpsPoolInfoRouteHandler: RouteHandler<typeof postIpsPoolInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsCreatePoolRouteHandler: RouteHandler<typeof postIpsCreatePoolRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpsDeletePoolRouteHandler: RouteHandler<typeof postIpsDeletePoolRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpsCheckCustomDnsRouteHandler: RouteHandler<
  typeof postIpsCheckCustomDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsSetCustomDnsRouteHandler: RouteHandler<
  typeof postIpsSetCustomDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
