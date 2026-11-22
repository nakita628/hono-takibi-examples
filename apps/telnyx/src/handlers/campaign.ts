import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete10dlcCampaignCampaignIdRoute,
  get10dlcCampaignBuilderBrandBrandIdUsecaseUsecaseRoute,
  get10dlcCampaignCampaignIdMnoMetadataRoute,
  get10dlcCampaignCampaignIdOperationStatusRoute,
  get10dlcCampaignCampaignIdOsrAttributes2Route,
  get10dlcCampaignCampaignIdOsrAttributesRoute,
  get10dlcCampaignCampaignIdRoute,
  get10dlcCampaignCampaignIdSharingRoute,
  get10dlcCampaignRoute,
  get10dlcCampaignUsecaseCost2Route,
  get10dlcCampaignUsecaseCostRoute,
  post10dlcCampaignAcceptSharingCampaignIdRoute,
  post10dlcCampaignBuilderRoute,
  post10dlcCampaignCampaignIdAppealRoute,
  put10dlcCampaignCampaignIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignHandler = app
  .openapi(get10dlcCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcCampaignAcceptSharingCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignUsecaseCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignUsecaseCost2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete10dlcCampaignCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put10dlcCampaignCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcCampaignCampaignIdAppealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignCampaignIdMnoMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignCampaignIdOperationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignCampaignIdOsrAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignCampaignIdOsrAttributes2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignCampaignIdSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcCampaignBuilderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcCampaignBuilderBrandBrandIdUsecaseUsecaseRoute, (c) => {
    throw new Error('Not implemented')
  })
