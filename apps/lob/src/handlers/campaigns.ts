import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCampaignsCmpIdRoute,
  getCampaignsCmpIdRoute,
  getCampaignsRoute,
  patchCampaignsCmpIdRoute,
  postCampaignsCmpIdSendRoute,
  postCampaignsRoute,
} from '../routes'

export const getCampaignsRouteHandler: RouteHandler<typeof getCampaignsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCampaignsRouteHandler: RouteHandler<typeof postCampaignsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCampaignsCmpIdRouteHandler: RouteHandler<typeof getCampaignsCmpIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchCampaignsCmpIdRouteHandler: RouteHandler<
  typeof patchCampaignsCmpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCampaignsCmpIdRouteHandler: RouteHandler<
  typeof deleteCampaignsCmpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCampaignsCmpIdSendRouteHandler: RouteHandler<
  typeof postCampaignsCmpIdSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
