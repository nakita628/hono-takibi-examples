import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSendersAddDomainRoute,
  postSendersCheckDomainRoute,
  postSendersDeleteDomainRoute,
  postSendersDomainsRoute,
  postSendersInfoRoute,
  postSendersListRoute,
  postSendersTimeSeriesRoute,
  postSendersVerifyDomainRoute,
} from '../routes'

export const postSendersListRouteHandler: RouteHandler<typeof postSendersListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersDomainsRouteHandler: RouteHandler<typeof postSendersDomainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSendersAddDomainRouteHandler: RouteHandler<
  typeof postSendersAddDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersCheckDomainRouteHandler: RouteHandler<
  typeof postSendersCheckDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersVerifyDomainRouteHandler: RouteHandler<
  typeof postSendersVerifyDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersInfoRouteHandler: RouteHandler<typeof postSendersInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersTimeSeriesRouteHandler: RouteHandler<
  typeof postSendersTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersDeleteDomainRouteHandler: RouteHandler<
  typeof postSendersDeleteDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
