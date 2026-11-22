import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get10dlcPartnerCampaignCampaignIdSharingRoute,
  get10dlcPartnerCampaignsCampaignIdRoute,
  get10dlcPartnerCampaignSharedByMeRoute,
  get10dlcPartnerCampaignsRoute,
  patch10dlcPartnerCampaignsCampaignIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedCampaignsHandler = app
  .openapi(get10dlcPartnerCampaignSharedByMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcPartnerCampaignCampaignIdSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcPartnerCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcPartnerCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patch10dlcPartnerCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
