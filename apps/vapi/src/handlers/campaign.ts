import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCampaignIdRoute,
  getCampaignIdRoute,
  getCampaignRoute,
  patchCampaignIdRoute,
  postCampaignRoute,
} from '../routes'

export const postCampaignRouteHandler: RouteHandler<typeof postCampaignRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCampaignRouteHandler: RouteHandler<typeof getCampaignRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCampaignIdRouteHandler: RouteHandler<typeof getCampaignIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCampaignIdRouteHandler: RouteHandler<typeof patchCampaignIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCampaignIdRouteHandler: RouteHandler<typeof deleteCampaignIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
