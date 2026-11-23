import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getStagesAccountLockdownIndexRouteHandler: RouteHandler<
  typeof getStagesAccountLockdownIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAccountLockdownIndexRouteHandler: RouteHandler<
  typeof postStagesAccountLockdownIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAccountLockdownStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAccountLockdownStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAccountLockdownStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAccountLockdownStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAccountLockdownStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAccountLockdownStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAccountLockdownStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAccountLockdownStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAccountLockdownStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAccountLockdownStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAllIndexRouteHandler: RouteHandler<typeof getStagesAllIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStagesAllStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAllStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAllStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAllStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAllStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAllStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAllTypesIndexRouteHandler: RouteHandler<
  typeof getStagesAllTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAllUserSettingsIndexRouteHandler: RouteHandler<
  typeof getStagesAllUserSettingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorDuoIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorDuoIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorDuoIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorDuoIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorDuoStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorDuoStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorDuoStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorDuoStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorDuoStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorDuoStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorDuoStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorDuoStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorDuoStageUuidEnrollmentStatusIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorDuoStageUuidEnrollmentStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorDuoStageUuidImportDeviceManualIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorDuoStageUuidImportDeviceManualIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorDuoStageUuidImportDevicesAutomaticIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorDuoStageUuidImportDevicesAutomaticIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorDuoStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorDuoStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorEmailIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorEmailIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorEmailIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorEmailIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorEmailStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorEmailStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorEndpointGdtcIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorEndpointGdtcIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorEndpointGdtcIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorEndpointGdtcIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorEndpointGdtcStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorEndpointGdtcStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorEndpointGdtcStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorEndpointGdtcStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorEndpointGdtcStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorEndpointGdtcStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorEndpointGdtcStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorEndpointGdtcStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorEndpointGdtcStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorEndpointGdtcStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorSmsIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorSmsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorSmsIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorSmsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorSmsStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorSmsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorSmsStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorSmsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorSmsStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorSmsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorSmsStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorSmsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorSmsStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorSmsStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorStaticIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorStaticIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorStaticIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorStaticIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorStaticStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorStaticStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorStaticStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorStaticStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorStaticStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorStaticStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorStaticStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorStaticStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorStaticStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorStaticStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorTotpIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorTotpIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorTotpIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorTotpIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorTotpStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorTotpStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorTotpStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorTotpStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorTotpStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorTotpStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorTotpStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorTotpStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorTotpStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorTotpStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorValidateIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorValidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorValidateIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorValidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorValidateStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorValidateStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorValidateStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorValidateStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorValidateStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorValidateStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorValidateStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorValidateStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorValidateStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorValidateStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorWebauthnIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorWebauthnIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesAuthenticatorWebauthnIndexRouteHandler: RouteHandler<
  typeof postStagesAuthenticatorWebauthnIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorWebauthnStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorWebauthnStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesAuthenticatorWebauthnStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesAuthenticatorWebauthnStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesAuthenticatorWebauthnStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesAuthenticatorWebauthnStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesAuthenticatorWebauthnStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesAuthenticatorWebauthnStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorWebauthnStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorWebauthnStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorWebauthnDeviceTypesIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorWebauthnDeviceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesAuthenticatorWebauthnDeviceTypesAaguidIndexRouteHandler: RouteHandler<
  typeof getStagesAuthenticatorWebauthnDeviceTypesAaguidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesCaptchaIndexRouteHandler: RouteHandler<
  typeof getStagesCaptchaIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesCaptchaIndexRouteHandler: RouteHandler<
  typeof postStagesCaptchaIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesCaptchaStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesCaptchaStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesCaptchaStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesCaptchaStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesCaptchaStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesCaptchaStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesCaptchaStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesCaptchaStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesCaptchaStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesCaptchaStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesConsentIndexRouteHandler: RouteHandler<
  typeof getStagesConsentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesConsentIndexRouteHandler: RouteHandler<
  typeof postStagesConsentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesConsentStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesConsentStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesConsentStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesConsentStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesConsentStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesConsentStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesConsentStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesConsentStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesConsentStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesConsentStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesDenyIndexRouteHandler: RouteHandler<typeof getStagesDenyIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStagesDenyIndexRouteHandler: RouteHandler<
  typeof postStagesDenyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesDenyStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesDenyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesDenyStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesDenyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesDenyStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesDenyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesDenyStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesDenyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesDenyStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesDenyStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesDummyIndexRouteHandler: RouteHandler<
  typeof getStagesDummyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesDummyIndexRouteHandler: RouteHandler<
  typeof postStagesDummyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesDummyStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesDummyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesDummyStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesDummyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesDummyStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesDummyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesDummyStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesDummyStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesDummyStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesDummyStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesEmailIndexRouteHandler: RouteHandler<
  typeof getStagesEmailIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesEmailIndexRouteHandler: RouteHandler<
  typeof postStagesEmailIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesEmailStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesEmailStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesEmailStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesEmailStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesEmailTemplatesIndexRouteHandler: RouteHandler<
  typeof getStagesEmailTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesEndpointsIndexRouteHandler: RouteHandler<
  typeof getStagesEndpointsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesEndpointsIndexRouteHandler: RouteHandler<
  typeof postStagesEndpointsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesEndpointsStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesEndpointsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesEndpointsStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesEndpointsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesEndpointsStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesEndpointsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesEndpointsStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesEndpointsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesEndpointsStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesEndpointsStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesIdentificationIndexRouteHandler: RouteHandler<
  typeof getStagesIdentificationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesIdentificationIndexRouteHandler: RouteHandler<
  typeof postStagesIdentificationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesIdentificationStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesIdentificationStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesIdentificationStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesIdentificationStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesIdentificationStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesIdentificationStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesIdentificationStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesIdentificationStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesIdentificationStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesIdentificationStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesInvitationInvitationsIndexRouteHandler: RouteHandler<
  typeof getStagesInvitationInvitationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesInvitationInvitationsIndexRouteHandler: RouteHandler<
  typeof postStagesInvitationInvitationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesInvitationInvitationsInviteUuidIndexRouteHandler: RouteHandler<
  typeof getStagesInvitationInvitationsInviteUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesInvitationInvitationsInviteUuidIndexRouteHandler: RouteHandler<
  typeof putStagesInvitationInvitationsInviteUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesInvitationInvitationsInviteUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesInvitationInvitationsInviteUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesInvitationInvitationsInviteUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesInvitationInvitationsInviteUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesInvitationInvitationsInviteUuidSendEmailIndexRouteHandler: RouteHandler<
  typeof postStagesInvitationInvitationsInviteUuidSendEmailIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesInvitationInvitationsInviteUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesInvitationInvitationsInviteUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesInvitationStagesIndexRouteHandler: RouteHandler<
  typeof getStagesInvitationStagesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesInvitationStagesIndexRouteHandler: RouteHandler<
  typeof postStagesInvitationStagesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesInvitationStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesInvitationStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesInvitationStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesInvitationStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesInvitationStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesInvitationStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesInvitationStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesInvitationStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesInvitationStagesStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesInvitationStagesStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesMtlsIndexRouteHandler: RouteHandler<typeof getStagesMtlsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStagesMtlsIndexRouteHandler: RouteHandler<
  typeof postStagesMtlsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesMtlsStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesMtlsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesMtlsStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesMtlsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesMtlsStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesMtlsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesMtlsStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesMtlsStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesMtlsStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesMtlsStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPasswordIndexRouteHandler: RouteHandler<
  typeof getStagesPasswordIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesPasswordIndexRouteHandler: RouteHandler<
  typeof postStagesPasswordIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPasswordStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesPasswordStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesPasswordStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesPasswordStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesPasswordStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesPasswordStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesPasswordStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesPasswordStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPasswordStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesPasswordStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPromptPromptsIndexRouteHandler: RouteHandler<
  typeof getStagesPromptPromptsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesPromptPromptsIndexRouteHandler: RouteHandler<
  typeof postStagesPromptPromptsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPromptPromptsPromptUuidIndexRouteHandler: RouteHandler<
  typeof getStagesPromptPromptsPromptUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesPromptPromptsPromptUuidIndexRouteHandler: RouteHandler<
  typeof putStagesPromptPromptsPromptUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesPromptPromptsPromptUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesPromptPromptsPromptUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesPromptPromptsPromptUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesPromptPromptsPromptUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPromptPromptsPromptUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesPromptPromptsPromptUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesPromptPromptsPreviewIndexRouteHandler: RouteHandler<
  typeof postStagesPromptPromptsPreviewIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPromptStagesIndexRouteHandler: RouteHandler<
  typeof getStagesPromptStagesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesPromptStagesIndexRouteHandler: RouteHandler<
  typeof postStagesPromptStagesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPromptStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesPromptStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesPromptStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesPromptStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesPromptStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesPromptStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesPromptStagesStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesPromptStagesStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesPromptStagesStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesPromptStagesStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesRedirectIndexRouteHandler: RouteHandler<
  typeof getStagesRedirectIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesRedirectIndexRouteHandler: RouteHandler<
  typeof postStagesRedirectIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesRedirectStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesRedirectStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesRedirectStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesRedirectStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesRedirectStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesRedirectStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesRedirectStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesRedirectStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesRedirectStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesRedirectStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesSourceIndexRouteHandler: RouteHandler<
  typeof getStagesSourceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesSourceIndexRouteHandler: RouteHandler<
  typeof postStagesSourceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesSourceStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesSourceStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesSourceStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesSourceStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesSourceStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesSourceStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesSourceStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesSourceStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesSourceStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesSourceStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserDeleteIndexRouteHandler: RouteHandler<
  typeof getStagesUserDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesUserDeleteIndexRouteHandler: RouteHandler<
  typeof postStagesUserDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserDeleteStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesUserDeleteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesUserDeleteStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesUserDeleteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesUserDeleteStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesUserDeleteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesUserDeleteStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesUserDeleteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserDeleteStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesUserDeleteStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserLoginIndexRouteHandler: RouteHandler<
  typeof getStagesUserLoginIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesUserLoginIndexRouteHandler: RouteHandler<
  typeof postStagesUserLoginIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserLoginStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesUserLoginStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesUserLoginStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesUserLoginStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesUserLoginStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesUserLoginStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesUserLoginStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesUserLoginStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserLoginStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesUserLoginStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserLogoutIndexRouteHandler: RouteHandler<
  typeof getStagesUserLogoutIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesUserLogoutIndexRouteHandler: RouteHandler<
  typeof postStagesUserLogoutIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserLogoutStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesUserLogoutStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesUserLogoutStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesUserLogoutStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesUserLogoutStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesUserLogoutStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesUserLogoutStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesUserLogoutStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserLogoutStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesUserLogoutStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserWriteIndexRouteHandler: RouteHandler<
  typeof getStagesUserWriteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStagesUserWriteIndexRouteHandler: RouteHandler<
  typeof postStagesUserWriteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserWriteStageUuidIndexRouteHandler: RouteHandler<
  typeof getStagesUserWriteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStagesUserWriteStageUuidIndexRouteHandler: RouteHandler<
  typeof putStagesUserWriteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStagesUserWriteStageUuidIndexRouteHandler: RouteHandler<
  typeof patchStagesUserWriteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStagesUserWriteStageUuidIndexRouteHandler: RouteHandler<
  typeof deleteStagesUserWriteStageUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStagesUserWriteStageUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getStagesUserWriteStageUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
