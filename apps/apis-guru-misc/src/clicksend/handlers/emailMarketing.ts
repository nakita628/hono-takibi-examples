import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailAddressesEmailAddressIdRoute,
  deleteEmailTemplatesTemplateIdRoute,
  getEmailAddressesEmailAddressIdRoute,
  getEmailAddressesRoute,
  getEmailCampaignsCampaignIdHistoryRoute,
  getEmailCampaignsEmailCampaignIdRoute,
  getEmailCampaignsRoute,
  getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRoute,
  getEmailMasterTemplatesCategoriesCategoryIdRoute,
  getEmailMasterTemplatesCategoriesRoute,
  getEmailMasterTemplatesRoute,
  getEmailMasterTemplatesTemplateIdRoute,
  getEmailTemplatesRoute,
  getEmailTemplatesTemplateIdRoute,
  postEmailAddressesRoute,
  postEmailCampaignsPriceRoute,
  postEmailCampaignsSendRoute,
  postEmailTemplatesImagesTemplateIdRoute,
  postEmailTemplatesRoute,
  putEmailAddressVerifyEmailAddressIdSendRoute,
  putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRoute,
  putEmailCampaignsEmailCampaignIdCancelRoute,
  putEmailCampaignsEmailCampaignIdRoute,
  putEmailTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailMarketingHandler = app
  .openapi(getEmailCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailCampaignsCampaignIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailCampaignsEmailCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailCampaignsEmailCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailCampaignsEmailCampaignIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailAddressVerifyEmailAddressIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailAddressesEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailAddressesEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailTemplatesImagesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
