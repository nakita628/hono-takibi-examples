import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePortingLoaConfigurationsIdRoute,
  deletePortingOrdersIdAdditionalDocumentsAdditionalDocumentIdRoute,
  deletePortingOrdersIdRoute,
  deletePortingOrdersPortingOrderIdAssociatedPhoneNumbersIdRoute,
  deletePortingOrdersPortingOrderIdPhoneNumberBlocksIdRoute,
  deletePortingOrdersPortingOrderIdPhoneNumberExtensionsIdRoute,
  getPortingEventsIdRoute,
  getPortingEventsRoute,
  getPortingLoaConfigurationsIdPreviewRoute,
  getPortingLoaConfigurationsIdRoute,
  getPortingLoaConfigurationsRoute,
  getPortingOrdersExceptionTypesRoute,
  getPortingOrdersIdActivationJobsActivationJobIdRoute,
  getPortingOrdersIdActivationJobsRoute,
  getPortingOrdersIdAdditionalDocumentsRoute,
  getPortingOrdersIdAllowedFocWindowsRoute,
  getPortingOrdersIdCommentsRoute,
  getPortingOrdersIdLoaTemplateRoute,
  getPortingOrdersIdRequirementsRoute,
  getPortingOrdersIdRoute,
  getPortingOrdersIdSubRequestRoute,
  getPortingOrdersIdVerificationCodesRoute,
  getPortingOrdersPhoneNumberConfigurationsRoute,
  getPortingOrdersPortingOrderIdActionRequirementsRoute,
  getPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute,
  getPortingOrdersPortingOrderIdPhoneNumberBlocksRoute,
  getPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute,
  getPortingOrdersRoute,
  getPortingPhoneNumbersRoute,
  getPortingReportsIdRoute,
  getPortingReportsRoute,
  getPortingUkCarriersRoute,
  patchPortingLoaConfigurationsIdRoute,
  patchPortingOrdersIdActivationJobsActivationJobIdRoute,
  patchPortingOrdersIdRoute,
  postPortingEventsIdRepublishRoute,
  postPortingLoaConfigurationsPreviewRoute,
  postPortingLoaConfigurationsRoute,
  postPortingOrdersIdActionsActivateRoute,
  postPortingOrdersIdActionsCancelRoute,
  postPortingOrdersIdActionsConfirmRoute,
  postPortingOrdersIdActionsShareRoute,
  postPortingOrdersIdAdditionalDocumentsRoute,
  postPortingOrdersIdCommentsRoute,
  postPortingOrdersIdVerificationCodesSendRoute,
  postPortingOrdersIdVerificationCodesVerifyRoute,
  postPortingOrdersPhoneNumberConfigurationsRoute,
  postPortingOrdersPortingOrderIdActionRequirementsIdInitiateRoute,
  postPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute,
  postPortingOrdersPortingOrderIdPhoneNumberBlocksRoute,
  postPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute,
  postPortingOrdersRoute,
  postPortingReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portingOrdersHandler = app
  .openapi(getPortingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingEventsIdRepublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingLoaConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingLoaConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingLoaConfigurationsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortingLoaConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingLoaConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPortingLoaConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingLoaConfigurationsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingUkCarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersExceptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersPhoneNumberConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersPhoneNumberConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortingOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPortingOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdActionsActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdActionsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdActionsConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdActionsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdActivationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdActivationJobsActivationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPortingOrdersIdActivationJobsActivationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdAdditionalDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdAdditionalDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortingOrdersIdAdditionalDocumentsAdditionalDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdAllowedFocWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdLoaTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdSubRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdVerificationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdVerificationCodesSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdVerificationCodesVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersPortingOrderIdActionRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersPortingOrderIdActionRequirementsIdInitiateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortingOrdersPortingOrderIdAssociatedPhoneNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersPortingOrderIdPhoneNumberBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersPortingOrderIdPhoneNumberBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortingOrdersPortingOrderIdPhoneNumberBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortingOrdersPortingOrderIdPhoneNumberExtensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
