import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWhatsappCampaignsCampaignIdRoute,
  getWhatsappCampaignsCampaignIdRoute,
  getWhatsappCampaignsConfigRoute,
  getWhatsappCampaignsRoute,
  getWhatsappCampaignsTemplateListRoute,
  postWhatsappCampaignsRoute,
  postWhatsappCampaignsTemplateApprovalTemplateIdRoute,
  postWhatsappCampaignsTemplateRoute,
  putWhatsappCampaignsCampaignIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsAppCampaignsHandler = app
  .openapi(getWhatsappCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhatsappCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappCampaignsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhatsappCampaignsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappCampaignsTemplateListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhatsappCampaignsTemplateApprovalTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhatsappCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWhatsappCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
