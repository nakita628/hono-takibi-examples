import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postInboundAddDomainRoute,
  postInboundAddRouteRoute,
  postInboundCheckDomainRoute,
  postInboundDeleteDomainRoute,
  postInboundDeleteRouteRoute,
  postInboundDomainsRoute,
  postInboundRoutesRoute,
  postInboundSendRawRoute,
  postInboundUpdateRouteRoute,
} from '../routes'

export const postInboundDomainsRouteHandler: RouteHandler<typeof postInboundDomainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postInboundAddDomainRouteHandler: RouteHandler<
  typeof postInboundAddDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboundCheckDomainRouteHandler: RouteHandler<
  typeof postInboundCheckDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboundDeleteDomainRouteHandler: RouteHandler<
  typeof postInboundDeleteDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboundRoutesRouteHandler: RouteHandler<typeof postInboundRoutesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postInboundAddRouteRouteHandler: RouteHandler<
  typeof postInboundAddRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboundUpdateRouteRouteHandler: RouteHandler<
  typeof postInboundUpdateRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboundDeleteRouteRouteHandler: RouteHandler<
  typeof postInboundDeleteRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboundSendRawRouteHandler: RouteHandler<typeof postInboundSendRawRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
