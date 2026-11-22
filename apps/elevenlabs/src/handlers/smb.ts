import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ReceptionAssetsAssetIdRoute,
  deleteV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute,
  deleteV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute,
  deleteV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute,
  deleteV1ReceptionHolidaysHolidayIdRoute,
  deleteV1ReceptionKnowledgeSourcesSourceIdRoute,
  deleteV1ReceptionLocationsLocationIdRoute,
  deleteV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute,
  deleteV1ReceptionProductsProductIdRoute,
  deleteV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute,
  deleteV1ReceptionServicesServiceIdRoute,
  deleteV1ReceptionStaffStaffIdRoute,
  deleteV1ReceptionTeamInvitesRoute,
  deleteV1ReceptionTeamMembersUserIdRoute,
  getV1ReceptionAgentInfoRoute,
  getV1ReceptionAssetsAssetIdRoute,
  getV1ReceptionAssetsRoute,
  getV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute,
  getV1ReceptionCustomerFacingAgentsRoute,
  getV1ReceptionHolidaysHolidayIdRoute,
  getV1ReceptionHolidaysRoute,
  getV1ReceptionKnowledgeSourcesRoute,
  getV1ReceptionKnowledgeSourcesSourceIdRoute,
  getV1ReceptionLocationsLocationIdRoute,
  getV1ReceptionLocationsRoute,
  getV1ReceptionPhoneNumbersAssignmentsRoute,
  getV1ReceptionProductsProductIdRoute,
  getV1ReceptionProductsRoute,
  getV1ReceptionResellerBillingInvoicesInvoiceIdRoute,
  getV1ReceptionResellerBillingInvoicesRoute,
  getV1ReceptionResellerBillingUpcomingRoute,
  getV1ReceptionResellerTierLadderRoute,
  getV1ReceptionResellerWorkspacesRoute,
  getV1ReceptionServicesRoute,
  getV1ReceptionServicesServiceIdRoute,
  getV1ReceptionStaffRoute,
  getV1ReceptionStaffStaffIdRoute,
  getV1ReceptionTeamInvitesRoute,
  getV1ReceptionTeamMembersRoute,
  patchV1ReceptionCustomerFacingAgentsAgentIdRoute,
  patchV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute,
  patchV1ReceptionProductsProductIdStockRoute,
  patchV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute,
  patchV1ReceptionTeamMembersUserIdRoute,
  postV1ReceptionAssetsRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdActivateRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdRulesRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRoute,
  postV1ReceptionHolidaysRoute,
  postV1ReceptionKnowledgeSourcesRoute,
  postV1ReceptionKnowledgeSourcesUrlsRoute,
  postV1ReceptionLocationsRoute,
  postV1ReceptionPhoneNumbersAssignmentsRoute,
  postV1ReceptionProductsProductIdStockAdjustRoute,
  postV1ReceptionProductsRoute,
  postV1ReceptionResellerWorkspacesRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdCompleteOnboardingRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionCancelDowngradeRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRestoreRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute,
  postV1ReceptionServicesRoute,
  postV1ReceptionServicesServiceIdConfirmUpdateRoute,
  postV1ReceptionStaffRoute,
  postV1ReceptionTeamInvitesRoute,
  putV1ReceptionAgentInfoRoute,
  putV1ReceptionAssetsAssetIdRoute,
  putV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute,
  putV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute,
  putV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute,
  putV1ReceptionHolidaysHolidayIdRoute,
  putV1ReceptionLocationsLocationIdRoute,
  putV1ReceptionProductsProductIdRoute,
  putV1ReceptionServicesServiceIdRoute,
  putV1ReceptionStaffStaffIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smbHandler = app
  .openapi(getV1ReceptionServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionServicesServiceIdConfirmUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionProductsProductIdStockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionProductsProductIdStockAdjustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionStaffStaffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionStaffStaffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionStaffStaffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionCustomerFacingAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionCustomerFacingAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionPhoneNumbersAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionPhoneNumbersAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionAgentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionAgentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionKnowledgeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionKnowledgeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionKnowledgeSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionKnowledgeSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionKnowledgeSourcesUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdCompleteOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionCancelDowngradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerTierLadderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerBillingUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionTeamInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionTeamInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionTeamInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionTeamMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionTeamMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
