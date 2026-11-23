import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSiteApiKeysRoute,
  getSiteDnsRecordsRoute,
  getSiteIpAddressesRoute,
  getSiteRoute,
  getSiteUsageRoute,
  patchSiteRoute,
  postSiteApiKeysRoute,
  postSiteTestWebhookRoute,
} from '../routes'

export const getSiteRouteHandler: RouteHandler<typeof getSiteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSiteRouteHandler: RouteHandler<typeof patchSiteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSiteApiKeysRouteHandler: RouteHandler<typeof getSiteApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSiteApiKeysRouteHandler: RouteHandler<typeof postSiteApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSiteDnsRecordsRouteHandler: RouteHandler<typeof getSiteDnsRecordsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSiteIpAddressesRouteHandler: RouteHandler<typeof getSiteIpAddressesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSiteTestWebhookRouteHandler: RouteHandler<
  typeof postSiteTestWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSiteUsageRouteHandler: RouteHandler<typeof getSiteUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}
