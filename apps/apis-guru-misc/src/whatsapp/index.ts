import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesWebhooksCaRoute,
  deleteGroupsGroupIdAdminsRoute,
  deleteGroupsGroupIdIconRoute,
  deleteGroupsGroupIdInviteRoute,
  deleteGroupsGroupIdParticipantsRoute,
  deleteMediaMediaIdRoute,
  deleteSettingsAccountTwoStepRoute,
  deleteSettingsApplicationMediaProvidersProviderNameRoute,
  deleteSettingsApplicationRoute,
  deleteSettingsProfilePhotoRoute,
  deleteUsersUserUsernameRoute,
  getCertificatesExternalCaRoute,
  getCertificatesWebhooksCaRoute,
  getGroupsGroupIdIconRoute,
  getGroupsGroupIdInviteRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  getHealthRoute,
  getMediaMediaIdRoute,
  getMetricsRoute,
  getSettingsApplicationMediaProvidersRoute,
  getSettingsApplicationRoute,
  getSettingsBusinessProfileRoute,
  getSettingsProfileAboutRoute,
  getSettingsProfilePhotoRoute,
  getStatsAppRoute,
  getStatsDbRoute,
  getSupportRoute,
  getUsersUserUsernameRoute,
  patchGroupsGroupIdAdminsRoute,
  patchSettingsApplicationRoute,
  patchSettingsProfileAboutRoute,
  postAccountRoute,
  postAccountShardsRoute,
  postAccountVerifyRoute,
  postCertificatesExternalRoute,
  postCertificatesWebhooksCaRoute,
  postContactsRoute,
  postGroupsGroupIdIconRoute,
  postGroupsGroupIdLeaveRoute,
  postGroupsRoute,
  postMediaRoute,
  postMessagesRoute,
  postSettingsAccountTwoStepRoute,
  postSettingsApplicationMediaProvidersRoute,
  postSettingsBackupRoute,
  postSettingsBusinessProfileRoute,
  postSettingsProfilePhotoRoute,
  postSettingsRestoreRoute,
  postUsersLoginRoute,
  postUsersLogoutRoute,
  postUsersRoute,
  putGroupsGroupIdRoute,
  putMessagesMessageIDRoute,
  putUsersUserUsernameRoute,
} from './routes'
import {
  deleteCertificatesWebhooksCaRouteHandler,
  deleteGroupsGroupIdAdminsRouteHandler,
  deleteGroupsGroupIdIconRouteHandler,
  deleteGroupsGroupIdInviteRouteHandler,
  deleteGroupsGroupIdParticipantsRouteHandler,
  deleteMediaMediaIdRouteHandler,
  deleteSettingsAccountTwoStepRouteHandler,
  deleteSettingsApplicationMediaProvidersProviderNameRouteHandler,
  deleteSettingsApplicationRouteHandler,
  deleteSettingsProfilePhotoRouteHandler,
  deleteUsersUserUsernameRouteHandler,
  getCertificatesExternalCaRouteHandler,
  getCertificatesWebhooksCaRouteHandler,
  getGroupsGroupIdIconRouteHandler,
  getGroupsGroupIdInviteRouteHandler,
  getGroupsGroupIdRouteHandler,
  getGroupsRouteHandler,
  getHealthRouteHandler,
  getMediaMediaIdRouteHandler,
  getMetricsRouteHandler,
  getSettingsApplicationMediaProvidersRouteHandler,
  getSettingsApplicationRouteHandler,
  getSettingsBusinessProfileRouteHandler,
  getSettingsProfileAboutRouteHandler,
  getSettingsProfilePhotoRouteHandler,
  getStatsAppRouteHandler,
  getStatsDbRouteHandler,
  getSupportRouteHandler,
  getUsersUserUsernameRouteHandler,
  patchGroupsGroupIdAdminsRouteHandler,
  patchSettingsApplicationRouteHandler,
  patchSettingsProfileAboutRouteHandler,
  postAccountRouteHandler,
  postAccountShardsRouteHandler,
  postAccountVerifyRouteHandler,
  postCertificatesExternalRouteHandler,
  postCertificatesWebhooksCaRouteHandler,
  postContactsRouteHandler,
  postGroupsGroupIdIconRouteHandler,
  postGroupsGroupIdLeaveRouteHandler,
  postGroupsRouteHandler,
  postMediaRouteHandler,
  postMessagesRouteHandler,
  postSettingsAccountTwoStepRouteHandler,
  postSettingsApplicationMediaProvidersRouteHandler,
  postSettingsBackupRouteHandler,
  postSettingsBusinessProfileRouteHandler,
  postSettingsProfilePhotoRouteHandler,
  postSettingsRestoreRouteHandler,
  postUsersLoginRouteHandler,
  postUsersLogoutRouteHandler,
  postUsersRouteHandler,
  putGroupsGroupIdRouteHandler,
  putMessagesMessageIDRouteHandler,
  putUsersUserUsernameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountRoute, postAccountRouteHandler)
  .openapi(postAccountShardsRoute, postAccountShardsRouteHandler)
  .openapi(postAccountVerifyRoute, postAccountVerifyRouteHandler)
  .openapi(postCertificatesExternalRoute, postCertificatesExternalRouteHandler)
  .openapi(getCertificatesExternalCaRoute, getCertificatesExternalCaRouteHandler)
  .openapi(deleteCertificatesWebhooksCaRoute, deleteCertificatesWebhooksCaRouteHandler)
  .openapi(getCertificatesWebhooksCaRoute, getCertificatesWebhooksCaRouteHandler)
  .openapi(postCertificatesWebhooksCaRoute, postCertificatesWebhooksCaRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(putGroupsGroupIdRoute, putGroupsGroupIdRouteHandler)
  .openapi(deleteGroupsGroupIdAdminsRoute, deleteGroupsGroupIdAdminsRouteHandler)
  .openapi(patchGroupsGroupIdAdminsRoute, patchGroupsGroupIdAdminsRouteHandler)
  .openapi(deleteGroupsGroupIdIconRoute, deleteGroupsGroupIdIconRouteHandler)
  .openapi(getGroupsGroupIdIconRoute, getGroupsGroupIdIconRouteHandler)
  .openapi(postGroupsGroupIdIconRoute, postGroupsGroupIdIconRouteHandler)
  .openapi(deleteGroupsGroupIdInviteRoute, deleteGroupsGroupIdInviteRouteHandler)
  .openapi(getGroupsGroupIdInviteRoute, getGroupsGroupIdInviteRouteHandler)
  .openapi(postGroupsGroupIdLeaveRoute, postGroupsGroupIdLeaveRouteHandler)
  .openapi(deleteGroupsGroupIdParticipantsRoute, deleteGroupsGroupIdParticipantsRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(postMediaRoute, postMediaRouteHandler)
  .openapi(deleteMediaMediaIdRoute, deleteMediaMediaIdRouteHandler)
  .openapi(getMediaMediaIdRoute, getMediaMediaIdRouteHandler)
  .openapi(postMessagesRoute, postMessagesRouteHandler)
  .openapi(putMessagesMessageIDRoute, putMessagesMessageIDRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(deleteSettingsAccountTwoStepRoute, deleteSettingsAccountTwoStepRouteHandler)
  .openapi(postSettingsAccountTwoStepRoute, postSettingsAccountTwoStepRouteHandler)
  .openapi(deleteSettingsApplicationRoute, deleteSettingsApplicationRouteHandler)
  .openapi(getSettingsApplicationRoute, getSettingsApplicationRouteHandler)
  .openapi(patchSettingsApplicationRoute, patchSettingsApplicationRouteHandler)
  .openapi(
    getSettingsApplicationMediaProvidersRoute,
    getSettingsApplicationMediaProvidersRouteHandler,
  )
  .openapi(
    postSettingsApplicationMediaProvidersRoute,
    postSettingsApplicationMediaProvidersRouteHandler,
  )
  .openapi(
    deleteSettingsApplicationMediaProvidersProviderNameRoute,
    deleteSettingsApplicationMediaProvidersProviderNameRouteHandler,
  )
  .openapi(postSettingsBackupRoute, postSettingsBackupRouteHandler)
  .openapi(getSettingsBusinessProfileRoute, getSettingsBusinessProfileRouteHandler)
  .openapi(postSettingsBusinessProfileRoute, postSettingsBusinessProfileRouteHandler)
  .openapi(getSettingsProfileAboutRoute, getSettingsProfileAboutRouteHandler)
  .openapi(patchSettingsProfileAboutRoute, patchSettingsProfileAboutRouteHandler)
  .openapi(deleteSettingsProfilePhotoRoute, deleteSettingsProfilePhotoRouteHandler)
  .openapi(getSettingsProfilePhotoRoute, getSettingsProfilePhotoRouteHandler)
  .openapi(postSettingsProfilePhotoRoute, postSettingsProfilePhotoRouteHandler)
  .openapi(postSettingsRestoreRoute, postSettingsRestoreRouteHandler)
  .openapi(getStatsAppRoute, getStatsAppRouteHandler)
  .openapi(getStatsDbRoute, getStatsDbRouteHandler)
  .openapi(getSupportRoute, getSupportRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(postUsersLoginRoute, postUsersLoginRouteHandler)
  .openapi(postUsersLogoutRoute, postUsersLogoutRouteHandler)
  .openapi(deleteUsersUserUsernameRoute, deleteUsersUserUsernameRouteHandler)
  .openapi(getUsersUserUsernameRoute, getUsersUserUsernameRouteHandler)
  .openapi(putUsersUserUsernameRoute, putUsersUserUsernameRouteHandler)

export default app
