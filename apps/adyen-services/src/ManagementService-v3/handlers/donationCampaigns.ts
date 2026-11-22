import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute,
  getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRoute,
  patchCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute,
  postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRoute,
  postCompaniesCompanyIdCampaignManagementRoute,
  postCompaniesCompanyIdNonprofitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const donationCampaignsHandler = app
  .openapi(postCompaniesCompanyIdCampaignManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdNonprofitsRoute, (c) => {
    throw new Error('Not implemented')
  })
