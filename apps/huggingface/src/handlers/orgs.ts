import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOrganizationsNameAuditLogExportRoute,
  getApiOrganizationsNameAvatarRoute,
  getApiOrganizationsNameBillingCreditsRoute,
  getApiOrganizationsNameBillingUsageByInferenceSessionRoute,
  getApiOrganizationsNameBillingUsageByResourceGroupRoute,
  getApiOrganizationsNameBillingUsageInferenceRoute,
  getApiOrganizationsNameMembersRoute,
  getApiOrganizationsNameSettingsNetworkSecurityRoute,
  getApiOrganizationsNameSettingsRepositoriesRoute,
  getApiOrganizationsNameSettingsTokensRoute,
  getApiOrganizationsNameSocialsRoute,
  patchApiOrganizationsNameSettingsNetworkSecurityRoute,
  postApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkRoute,
  putApiOrganizationsNameSettingsSsoCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(getApiOrganizationsNameSettingsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameSettingsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOrganizationsNameSettingsSsoCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameAuditLogExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameSettingsNetworkSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameSettingsNetworkSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingUsageByResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingUsageByInferenceSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingUsageInferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameSocialsRoute, (c) => {
    throw new Error('Not implemented')
  })
