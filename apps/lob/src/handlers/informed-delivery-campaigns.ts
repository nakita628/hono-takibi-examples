import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInformedDeliveryCampaignsRoute,
  getInformedDeliveryCampaignsUspsCampaignIdRoute,
  patchInformedDeliveryCampaignsUspsCampaignIdRoute,
  postInformedDeliveryCampaignsRoute,
} from '../routes'

export const getInformedDeliveryCampaignsRouteHandler: RouteHandler<
  typeof getInformedDeliveryCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInformedDeliveryCampaignsRouteHandler: RouteHandler<
  typeof postInformedDeliveryCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInformedDeliveryCampaignsUspsCampaignIdRouteHandler: RouteHandler<
  typeof getInformedDeliveryCampaignsUspsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInformedDeliveryCampaignsUspsCampaignIdRouteHandler: RouteHandler<
  typeof patchInformedDeliveryCampaignsUspsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
