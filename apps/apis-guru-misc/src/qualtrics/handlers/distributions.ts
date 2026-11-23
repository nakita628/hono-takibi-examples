import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDistributionsDistributionIdLinksRoute,
  getDistributionsRoute,
  postDistributionsRoute,
} from '../routes'

export const getDistributionsRouteHandler: RouteHandler<typeof getDistributionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDistributionsRouteHandler: RouteHandler<typeof postDistributionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDistributionsDistributionIdLinksRouteHandler: RouteHandler<
  typeof getDistributionsDistributionIdLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
