import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStagesAccountLockdownStageUuidIndexRoute,
  deleteStagesAllStageUuidIndexRoute,
  deleteStagesAuthenticatorDuoStageUuidIndexRoute,
  deleteStagesAuthenticatorEmailStageUuidIndexRoute,
  deleteStagesAuthenticatorEndpointGdtcStageUuidIndexRoute,
  deleteStagesAuthenticatorSmsStageUuidIndexRoute,
  deleteStagesAuthenticatorStaticStageUuidIndexRoute,
  deleteStagesAuthenticatorTotpStageUuidIndexRoute,
  deleteStagesAuthenticatorValidateStageUuidIndexRoute,
  deleteStagesAuthenticatorWebauthnStageUuidIndexRoute,
  deleteStagesCaptchaStageUuidIndexRoute,
  deleteStagesConsentStageUuidIndexRoute,
  deleteStagesDenyStageUuidIndexRoute,
  deleteStagesDummyStageUuidIndexRoute,
  deleteStagesEmailStageUuidIndexRoute,
  deleteStagesEndpointsStageUuidIndexRoute,
  deleteStagesIdentificationStageUuidIndexRoute,
  deleteStagesInvitationInvitationsInviteUuidIndexRoute,
  deleteStagesInvitationStagesStageUuidIndexRoute,
  deleteStagesMtlsStageUuidIndexRoute,
  deleteStagesPasswordStageUuidIndexRoute,
  deleteStagesPromptPromptsPromptUuidIndexRoute,
  deleteStagesPromptStagesStageUuidIndexRoute,
  deleteStagesRedirectStageUuidIndexRoute,
  deleteStagesSourceStageUuidIndexRoute,
  deleteStagesUserDeleteStageUuidIndexRoute,
  deleteStagesUserLoginStageUuidIndexRoute,
  deleteStagesUserLogoutStageUuidIndexRoute,
  deleteStagesUserWriteStageUuidIndexRoute,
  getStagesAccountLockdownIndexRoute,
  getStagesAccountLockdownStageUuidIndexRoute,
  getStagesAccountLockdownStageUuidUsedByIndexRoute,
  getStagesAllIndexRoute,
  getStagesAllStageUuidIndexRoute,
  getStagesAllStageUuidUsedByIndexRoute,
  getStagesAllTypesIndexRoute,
  getStagesAllUserSettingsIndexRoute,
  getStagesAuthenticatorDuoIndexRoute,
  getStagesAuthenticatorDuoStageUuidIndexRoute,
  getStagesAuthenticatorDuoStageUuidUsedByIndexRoute,
  getStagesAuthenticatorEmailIndexRoute,
  getStagesAuthenticatorEmailStageUuidIndexRoute,
  getStagesAuthenticatorEmailStageUuidUsedByIndexRoute,
  getStagesAuthenticatorEndpointGdtcIndexRoute,
  getStagesAuthenticatorEndpointGdtcStageUuidIndexRoute,
  getStagesAuthenticatorEndpointGdtcStageUuidUsedByIndexRoute,
  getStagesAuthenticatorSmsIndexRoute,
  getStagesAuthenticatorSmsStageUuidIndexRoute,
  getStagesAuthenticatorSmsStageUuidUsedByIndexRoute,
  getStagesAuthenticatorStaticIndexRoute,
  getStagesAuthenticatorStaticStageUuidIndexRoute,
  getStagesAuthenticatorStaticStageUuidUsedByIndexRoute,
  getStagesAuthenticatorTotpIndexRoute,
  getStagesAuthenticatorTotpStageUuidIndexRoute,
  getStagesAuthenticatorTotpStageUuidUsedByIndexRoute,
  getStagesAuthenticatorValidateIndexRoute,
  getStagesAuthenticatorValidateStageUuidIndexRoute,
  getStagesAuthenticatorValidateStageUuidUsedByIndexRoute,
  getStagesAuthenticatorWebauthnDeviceTypesAaguidIndexRoute,
  getStagesAuthenticatorWebauthnDeviceTypesIndexRoute,
  getStagesAuthenticatorWebauthnIndexRoute,
  getStagesAuthenticatorWebauthnStageUuidIndexRoute,
  getStagesAuthenticatorWebauthnStageUuidUsedByIndexRoute,
  getStagesCaptchaIndexRoute,
  getStagesCaptchaStageUuidIndexRoute,
  getStagesCaptchaStageUuidUsedByIndexRoute,
  getStagesConsentIndexRoute,
  getStagesConsentStageUuidIndexRoute,
  getStagesConsentStageUuidUsedByIndexRoute,
  getStagesDenyIndexRoute,
  getStagesDenyStageUuidIndexRoute,
  getStagesDenyStageUuidUsedByIndexRoute,
  getStagesDummyIndexRoute,
  getStagesDummyStageUuidIndexRoute,
  getStagesDummyStageUuidUsedByIndexRoute,
  getStagesEmailIndexRoute,
  getStagesEmailStageUuidIndexRoute,
  getStagesEmailStageUuidUsedByIndexRoute,
  getStagesEmailTemplatesIndexRoute,
  getStagesEndpointsIndexRoute,
  getStagesEndpointsStageUuidIndexRoute,
  getStagesEndpointsStageUuidUsedByIndexRoute,
  getStagesIdentificationIndexRoute,
  getStagesIdentificationStageUuidIndexRoute,
  getStagesIdentificationStageUuidUsedByIndexRoute,
  getStagesInvitationInvitationsIndexRoute,
  getStagesInvitationInvitationsInviteUuidIndexRoute,
  getStagesInvitationInvitationsInviteUuidUsedByIndexRoute,
  getStagesInvitationStagesIndexRoute,
  getStagesInvitationStagesStageUuidIndexRoute,
  getStagesInvitationStagesStageUuidUsedByIndexRoute,
  getStagesMtlsIndexRoute,
  getStagesMtlsStageUuidIndexRoute,
  getStagesMtlsStageUuidUsedByIndexRoute,
  getStagesPasswordIndexRoute,
  getStagesPasswordStageUuidIndexRoute,
  getStagesPasswordStageUuidUsedByIndexRoute,
  getStagesPromptPromptsIndexRoute,
  getStagesPromptPromptsPromptUuidIndexRoute,
  getStagesPromptPromptsPromptUuidUsedByIndexRoute,
  getStagesPromptStagesIndexRoute,
  getStagesPromptStagesStageUuidIndexRoute,
  getStagesPromptStagesStageUuidUsedByIndexRoute,
  getStagesRedirectIndexRoute,
  getStagesRedirectStageUuidIndexRoute,
  getStagesRedirectStageUuidUsedByIndexRoute,
  getStagesSourceIndexRoute,
  getStagesSourceStageUuidIndexRoute,
  getStagesSourceStageUuidUsedByIndexRoute,
  getStagesUserDeleteIndexRoute,
  getStagesUserDeleteStageUuidIndexRoute,
  getStagesUserDeleteStageUuidUsedByIndexRoute,
  getStagesUserLoginIndexRoute,
  getStagesUserLoginStageUuidIndexRoute,
  getStagesUserLoginStageUuidUsedByIndexRoute,
  getStagesUserLogoutIndexRoute,
  getStagesUserLogoutStageUuidIndexRoute,
  getStagesUserLogoutStageUuidUsedByIndexRoute,
  getStagesUserWriteIndexRoute,
  getStagesUserWriteStageUuidIndexRoute,
  getStagesUserWriteStageUuidUsedByIndexRoute,
  patchStagesAccountLockdownStageUuidIndexRoute,
  patchStagesAuthenticatorDuoStageUuidIndexRoute,
  patchStagesAuthenticatorEmailStageUuidIndexRoute,
  patchStagesAuthenticatorEndpointGdtcStageUuidIndexRoute,
  patchStagesAuthenticatorSmsStageUuidIndexRoute,
  patchStagesAuthenticatorStaticStageUuidIndexRoute,
  patchStagesAuthenticatorTotpStageUuidIndexRoute,
  patchStagesAuthenticatorValidateStageUuidIndexRoute,
  patchStagesAuthenticatorWebauthnStageUuidIndexRoute,
  patchStagesCaptchaStageUuidIndexRoute,
  patchStagesConsentStageUuidIndexRoute,
  patchStagesDenyStageUuidIndexRoute,
  patchStagesDummyStageUuidIndexRoute,
  patchStagesEmailStageUuidIndexRoute,
  patchStagesEndpointsStageUuidIndexRoute,
  patchStagesIdentificationStageUuidIndexRoute,
  patchStagesInvitationInvitationsInviteUuidIndexRoute,
  patchStagesInvitationStagesStageUuidIndexRoute,
  patchStagesMtlsStageUuidIndexRoute,
  patchStagesPasswordStageUuidIndexRoute,
  patchStagesPromptPromptsPromptUuidIndexRoute,
  patchStagesPromptStagesStageUuidIndexRoute,
  patchStagesRedirectStageUuidIndexRoute,
  patchStagesSourceStageUuidIndexRoute,
  patchStagesUserDeleteStageUuidIndexRoute,
  patchStagesUserLoginStageUuidIndexRoute,
  patchStagesUserLogoutStageUuidIndexRoute,
  patchStagesUserWriteStageUuidIndexRoute,
  postStagesAccountLockdownIndexRoute,
  postStagesAuthenticatorDuoIndexRoute,
  postStagesAuthenticatorDuoStageUuidEnrollmentStatusIndexRoute,
  postStagesAuthenticatorDuoStageUuidImportDeviceManualIndexRoute,
  postStagesAuthenticatorDuoStageUuidImportDevicesAutomaticIndexRoute,
  postStagesAuthenticatorEmailIndexRoute,
  postStagesAuthenticatorEndpointGdtcIndexRoute,
  postStagesAuthenticatorSmsIndexRoute,
  postStagesAuthenticatorStaticIndexRoute,
  postStagesAuthenticatorTotpIndexRoute,
  postStagesAuthenticatorValidateIndexRoute,
  postStagesAuthenticatorWebauthnIndexRoute,
  postStagesCaptchaIndexRoute,
  postStagesConsentIndexRoute,
  postStagesDenyIndexRoute,
  postStagesDummyIndexRoute,
  postStagesEmailIndexRoute,
  postStagesEndpointsIndexRoute,
  postStagesIdentificationIndexRoute,
  postStagesInvitationInvitationsIndexRoute,
  postStagesInvitationInvitationsInviteUuidSendEmailIndexRoute,
  postStagesInvitationStagesIndexRoute,
  postStagesMtlsIndexRoute,
  postStagesPasswordIndexRoute,
  postStagesPromptPromptsIndexRoute,
  postStagesPromptPromptsPreviewIndexRoute,
  postStagesPromptStagesIndexRoute,
  postStagesRedirectIndexRoute,
  postStagesSourceIndexRoute,
  postStagesUserDeleteIndexRoute,
  postStagesUserLoginIndexRoute,
  postStagesUserLogoutIndexRoute,
  postStagesUserWriteIndexRoute,
  putStagesAccountLockdownStageUuidIndexRoute,
  putStagesAuthenticatorDuoStageUuidIndexRoute,
  putStagesAuthenticatorEmailStageUuidIndexRoute,
  putStagesAuthenticatorEndpointGdtcStageUuidIndexRoute,
  putStagesAuthenticatorSmsStageUuidIndexRoute,
  putStagesAuthenticatorStaticStageUuidIndexRoute,
  putStagesAuthenticatorTotpStageUuidIndexRoute,
  putStagesAuthenticatorValidateStageUuidIndexRoute,
  putStagesAuthenticatorWebauthnStageUuidIndexRoute,
  putStagesCaptchaStageUuidIndexRoute,
  putStagesConsentStageUuidIndexRoute,
  putStagesDenyStageUuidIndexRoute,
  putStagesDummyStageUuidIndexRoute,
  putStagesEmailStageUuidIndexRoute,
  putStagesEndpointsStageUuidIndexRoute,
  putStagesIdentificationStageUuidIndexRoute,
  putStagesInvitationInvitationsInviteUuidIndexRoute,
  putStagesInvitationStagesStageUuidIndexRoute,
  putStagesMtlsStageUuidIndexRoute,
  putStagesPasswordStageUuidIndexRoute,
  putStagesPromptPromptsPromptUuidIndexRoute,
  putStagesPromptStagesStageUuidIndexRoute,
  putStagesRedirectStageUuidIndexRoute,
  putStagesSourceStageUuidIndexRoute,
  putStagesUserDeleteStageUuidIndexRoute,
  putStagesUserLoginStageUuidIndexRoute,
  putStagesUserLogoutStageUuidIndexRoute,
  putStagesUserWriteStageUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stagesHandler = app
  .openapi(getStagesAccountLockdownIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAccountLockdownIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAccountLockdownStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAccountLockdownStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAccountLockdownStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAccountLockdownStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAccountLockdownStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAllStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAllStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAllStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAllTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAllUserSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorDuoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorDuoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorDuoStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorDuoStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorDuoStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorDuoStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorDuoStageUuidEnrollmentStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorDuoStageUuidImportDeviceManualIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorDuoStageUuidImportDevicesAutomaticIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorDuoStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorEmailStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorEndpointGdtcIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorEndpointGdtcIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorEndpointGdtcStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorEndpointGdtcStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorEndpointGdtcStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorEndpointGdtcStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorEndpointGdtcStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorSmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorSmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorSmsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorSmsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorSmsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorSmsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorSmsStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorStaticIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorStaticIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorStaticStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorStaticStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorStaticStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorStaticStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorStaticStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorTotpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorTotpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorTotpStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorTotpStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorTotpStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorTotpStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorTotpStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorValidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorValidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorValidateStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorValidateStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorValidateStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorValidateStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorValidateStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorWebauthnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesAuthenticatorWebauthnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorWebauthnStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesAuthenticatorWebauthnStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesAuthenticatorWebauthnStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesAuthenticatorWebauthnStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorWebauthnStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorWebauthnDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesAuthenticatorWebauthnDeviceTypesAaguidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesCaptchaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesCaptchaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesCaptchaStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesCaptchaStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesCaptchaStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesCaptchaStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesCaptchaStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesConsentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesConsentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesConsentStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesConsentStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesConsentStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesConsentStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesConsentStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesDenyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesDenyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesDenyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesDenyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesDenyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesDenyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesDenyStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesDummyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesDummyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesDummyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesDummyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesDummyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesDummyStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesDummyStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesEmailStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesEmailStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesEmailTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesEndpointsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesEndpointsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesEndpointsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesEndpointsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesEndpointsStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesIdentificationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesIdentificationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesIdentificationStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesIdentificationStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesIdentificationStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesIdentificationStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesIdentificationStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesInvitationInvitationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesInvitationInvitationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesInvitationInvitationsInviteUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesInvitationInvitationsInviteUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesInvitationInvitationsInviteUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesInvitationInvitationsInviteUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesInvitationInvitationsInviteUuidSendEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesInvitationInvitationsInviteUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesInvitationStagesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesInvitationStagesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesInvitationStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesInvitationStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesInvitationStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesInvitationStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesInvitationStagesStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesMtlsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesMtlsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesMtlsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesMtlsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesMtlsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesMtlsStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesMtlsStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesPasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPasswordStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesPasswordStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesPasswordStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesPasswordStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPasswordStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPromptPromptsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesPromptPromptsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPromptPromptsPromptUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesPromptPromptsPromptUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesPromptPromptsPromptUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesPromptPromptsPromptUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPromptPromptsPromptUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesPromptPromptsPreviewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPromptStagesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesPromptStagesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPromptStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesPromptStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesPromptStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesPromptStagesStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesPromptStagesStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesRedirectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesRedirectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesRedirectStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesRedirectStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesRedirectStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesRedirectStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesRedirectStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesSourceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesSourceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesSourceStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesSourceStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesSourceStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesSourceStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesSourceStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesUserDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserDeleteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesUserDeleteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesUserDeleteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesUserDeleteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserDeleteStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserLoginIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesUserLoginIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserLoginStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesUserLoginStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesUserLoginStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesUserLoginStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserLoginStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserLogoutIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesUserLogoutIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserLogoutStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesUserLogoutStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesUserLogoutStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesUserLogoutStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserLogoutStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserWriteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStagesUserWriteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserWriteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStagesUserWriteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStagesUserWriteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStagesUserWriteStageUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesUserWriteStageUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
