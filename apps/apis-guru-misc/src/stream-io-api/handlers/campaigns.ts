import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCampaignsIdRoute,
  getCampaignsRoute,
  patchCampaignsIdResumeRoute,
  patchCampaignsIdScheduleRoute,
  patchCampaignsIdStopRoute,
  postCampaignsIdTestRoute,
  postCampaignsRoute,
  putCampaignsIdRoute,
} from '../routes'

export const getCampaignsRouteHandler: RouteHandler<typeof getCampaignsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCampaignsRouteHandler: RouteHandler<typeof postCampaignsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCampaignsIdRouteHandler: RouteHandler<typeof deleteCampaignsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCampaignsIdRouteHandler: RouteHandler<typeof putCampaignsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCampaignsIdResumeRouteHandler: RouteHandler<
  typeof patchCampaignsIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCampaignsIdScheduleRouteHandler: RouteHandler<
  typeof patchCampaignsIdScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCampaignsIdStopRouteHandler: RouteHandler<
  typeof patchCampaignsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCampaignsIdTestRouteHandler: RouteHandler<
  typeof postCampaignsIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
