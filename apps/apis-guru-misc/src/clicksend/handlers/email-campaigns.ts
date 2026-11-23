import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEmailCampaignsCampaignIdHistoryRoute,
  getEmailCampaignsEmailCampaignIdRoute,
  getEmailCampaignsRoute,
  postEmailCampaignsPriceRoute,
  postEmailCampaignsSendRoute,
  putEmailCampaignsEmailCampaignIdCancelRoute,
  putEmailCampaignsEmailCampaignIdRoute,
} from '../routes'

export const getEmailCampaignsRouteHandler: RouteHandler<typeof getEmailCampaignsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsPriceRouteHandler: RouteHandler<
  typeof postEmailCampaignsPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsSendRouteHandler: RouteHandler<
  typeof postEmailCampaignsSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailCampaignsCampaignIdHistoryRouteHandler: RouteHandler<
  typeof getEmailCampaignsCampaignIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailCampaignsEmailCampaignIdRouteHandler: RouteHandler<
  typeof getEmailCampaignsEmailCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmailCampaignsEmailCampaignIdRouteHandler: RouteHandler<
  typeof putEmailCampaignsEmailCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmailCampaignsEmailCampaignIdCancelRouteHandler: RouteHandler<
  typeof putEmailCampaignsEmailCampaignIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
