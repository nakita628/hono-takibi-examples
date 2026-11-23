import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1beta1DomainsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentTrafficStatsRoute,
} from '../routes'

export const getV1beta1DomainsRouteHandler: RouteHandler<typeof getV1beta1DomainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentTrafficStatsRouteHandler: RouteHandler<
  typeof getV1beta1ParentTrafficStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
