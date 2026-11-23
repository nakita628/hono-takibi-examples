import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCampaignsDataSeriesRoute,
  getCampaignsDetailsRoute,
  getCampaignsListRoute,
} from '../routes'

export const getCampaignsDataSeriesRouteHandler: RouteHandler<
  typeof getCampaignsDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCampaignsDetailsRouteHandler: RouteHandler<
  typeof getCampaignsDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCampaignsListRouteHandler: RouteHandler<typeof getCampaignsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
