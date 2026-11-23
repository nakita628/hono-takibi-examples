import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postUrlsAddTrackingDomainRoute,
  postUrlsCheckTrackingDomainRoute,
  postUrlsDeleteTrackingDomainRoute,
  postUrlsTrackingDomainsRoute,
} from '../routes'

export const postUrlsTrackingDomainsRouteHandler: RouteHandler<
  typeof postUrlsTrackingDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUrlsAddTrackingDomainRouteHandler: RouteHandler<
  typeof postUrlsAddTrackingDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUrlsCheckTrackingDomainRouteHandler: RouteHandler<
  typeof postUrlsCheckTrackingDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUrlsDeleteTrackingDomainRouteHandler: RouteHandler<
  typeof postUrlsDeleteTrackingDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
