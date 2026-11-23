import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEmailCampaignsCampaignIdRoute,
  getEmailCampaignsCampaignIdAbTestCampaignResultRoute,
  getEmailCampaignsCampaignIdRoute,
  getEmailCampaignsCampaignIdSharedUrlRoute,
  getEmailCampaignsRoute,
  postEmailCampaignsCampaignIdExportRecipientsRoute,
  postEmailCampaignsCampaignIdSendNowRoute,
  postEmailCampaignsCampaignIdSendReportRoute,
  postEmailCampaignsCampaignIdSendTestRoute,
  postEmailCampaignsImagesRoute,
  postEmailCampaignsRoute,
  putEmailCampaignsCampaignIdRoute,
  putEmailCampaignsCampaignIdStatusRoute,
} from '../routes'

export const getEmailCampaignsRouteHandler: RouteHandler<typeof getEmailCampaignsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsRouteHandler: RouteHandler<typeof postEmailCampaignsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsImagesRouteHandler: RouteHandler<
  typeof postEmailCampaignsImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmailCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof deleteEmailCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof getEmailCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmailCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof putEmailCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailCampaignsCampaignIdAbTestCampaignResultRouteHandler: RouteHandler<
  typeof getEmailCampaignsCampaignIdAbTestCampaignResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsCampaignIdExportRecipientsRouteHandler: RouteHandler<
  typeof postEmailCampaignsCampaignIdExportRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsCampaignIdSendNowRouteHandler: RouteHandler<
  typeof postEmailCampaignsCampaignIdSendNowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsCampaignIdSendReportRouteHandler: RouteHandler<
  typeof postEmailCampaignsCampaignIdSendReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailCampaignsCampaignIdSendTestRouteHandler: RouteHandler<
  typeof postEmailCampaignsCampaignIdSendTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailCampaignsCampaignIdSharedUrlRouteHandler: RouteHandler<
  typeof getEmailCampaignsCampaignIdSharedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmailCampaignsCampaignIdStatusRouteHandler: RouteHandler<
  typeof putEmailCampaignsCampaignIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
