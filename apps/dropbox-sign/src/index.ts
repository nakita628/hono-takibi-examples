import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAppClientIdRoute,
  deleteApiKeyApiKeyIdRoute,
  deleteFaxFaxIdRoute,
  deleteFaxLineRoute,
  deleteTeamDestroyRoute,
  getAccountRoute,
  getAccountSettingsRoute,
  getApiAppClientIdRoute,
  getApiAppListRoute,
  getApiKeyApiKeyIdRoute,
  getApiKeyRoute,
  getBulkSendJobBulkSendJobIdRoute,
  getBulkSendJobListRoute,
  getEmbeddedSignUrlSignatureIdRoute,
  getFaxFaxIdRoute,
  getFaxFilesFaxIdRoute,
  getFaxLineAreaCodesRoute,
  getFaxLineListRoute,
  getFaxLineRoute,
  getFaxListRoute,
  getSignatureRequestFilesAsDataUriSignatureRequestIdRoute,
  getSignatureRequestFilesAsFileUrlSignatureRequestIdRoute,
  getSignatureRequestFilesSignatureRequestIdRoute,
  getSignatureRequestListRoute,
  getSignatureRequestSignatureRequestIdRoute,
  getTeamInfoRoute,
  getTeamInvitesRoute,
  getTeamMembersTeamIdRoute,
  getTeamRoute,
  getTeamSettingsRoute,
  getTeamSubTeamsTeamIdRoute,
  getTemplateFilesAsDataUriTemplateIdRoute,
  getTemplateFilesAsFileUrlTemplateIdRoute,
  getTemplateFilesTemplateIdRoute,
  getTemplateListRoute,
  getTemplateTemplateIdRoute,
  postAccountCreateRoute,
  postAccountSettingsRoute,
  postAccountVerifyRoute,
  postApiAppRoute,
  postApiKeyRoute,
  postDocumentDetectFieldsRoute,
  postEmbeddedEditUrlTemplateIdRoute,
  postFaxLineCreateRoute,
  postFaxSendRoute,
  postOauthTokenRefreshRoute,
  postOauthTokenRoute,
  postReportCreateRoute,
  postSignatureRequestBulkCreateEmbeddedWithTemplateRoute,
  postSignatureRequestBulkSendWithTemplateRoute,
  postSignatureRequestCancelSignatureRequestIdRoute,
  postSignatureRequestCreateEmbeddedRoute,
  postSignatureRequestCreateEmbeddedWithTemplateRoute,
  postSignatureRequestReleaseHoldSignatureRequestIdRoute,
  postSignatureRequestRemindSignatureRequestIdRoute,
  postSignatureRequestRemoveSignatureRequestIdRoute,
  postSignatureRequestSendRoute,
  postSignatureRequestSendWithTemplateRoute,
  postSignatureRequestUpdateSignatureRequestIdRoute,
  postTeamCreateRoute,
  postTeamRemoveMemberRoute,
  postTeamSettingsRoute,
  postTemplateAddUserTemplateIdRoute,
  postTemplateCreateEmbeddedDraftRoute,
  postTemplateCreateRoute,
  postTemplateDeleteTemplateIdRoute,
  postTemplateRemoveUserTemplateIdRoute,
  postTemplateUpdateFilesTemplateIdRoute,
  postUnclaimedDraftCreateEmbeddedRoute,
  postUnclaimedDraftCreateEmbeddedWithTemplateRoute,
  postUnclaimedDraftCreateRoute,
  postUnclaimedDraftEditAndResendSignatureRequestIdRoute,
  putAccountRoute,
  putApiAppClientIdRoute,
  putApiKeyApiKeyIdRoute,
  putFaxLineAddUserRoute,
  putFaxLineRemoveUserRoute,
  putSignatureRequestEditEmbeddedSignatureRequestIdRoute,
  putSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdRoute,
  putSignatureRequestEditSignatureRequestIdRoute,
  putSignatureRequestEditWithTemplateSignatureRequestIdRoute,
  putTeamAddMemberRoute,
  putTeamRoute,
} from './routes'
import {
  deleteApiAppClientIdRouteHandler,
  deleteApiKeyApiKeyIdRouteHandler,
  deleteFaxFaxIdRouteHandler,
  deleteFaxLineRouteHandler,
  deleteTeamDestroyRouteHandler,
  getAccountRouteHandler,
  getAccountSettingsRouteHandler,
  getApiAppClientIdRouteHandler,
  getApiAppListRouteHandler,
  getApiKeyApiKeyIdRouteHandler,
  getApiKeyRouteHandler,
  getBulkSendJobBulkSendJobIdRouteHandler,
  getBulkSendJobListRouteHandler,
  getEmbeddedSignUrlSignatureIdRouteHandler,
  getFaxFaxIdRouteHandler,
  getFaxFilesFaxIdRouteHandler,
  getFaxLineAreaCodesRouteHandler,
  getFaxLineListRouteHandler,
  getFaxLineRouteHandler,
  getFaxListRouteHandler,
  getSignatureRequestFilesAsDataUriSignatureRequestIdRouteHandler,
  getSignatureRequestFilesAsFileUrlSignatureRequestIdRouteHandler,
  getSignatureRequestFilesSignatureRequestIdRouteHandler,
  getSignatureRequestListRouteHandler,
  getSignatureRequestSignatureRequestIdRouteHandler,
  getTeamInfoRouteHandler,
  getTeamInvitesRouteHandler,
  getTeamMembersTeamIdRouteHandler,
  getTeamRouteHandler,
  getTeamSettingsRouteHandler,
  getTeamSubTeamsTeamIdRouteHandler,
  getTemplateFilesAsDataUriTemplateIdRouteHandler,
  getTemplateFilesAsFileUrlTemplateIdRouteHandler,
  getTemplateFilesTemplateIdRouteHandler,
  getTemplateListRouteHandler,
  getTemplateTemplateIdRouteHandler,
  postAccountCreateRouteHandler,
  postAccountSettingsRouteHandler,
  postAccountVerifyRouteHandler,
  postApiAppRouteHandler,
  postApiKeyRouteHandler,
  postDocumentDetectFieldsRouteHandler,
  postEmbeddedEditUrlTemplateIdRouteHandler,
  postFaxLineCreateRouteHandler,
  postFaxSendRouteHandler,
  postOauthTokenRefreshRouteHandler,
  postOauthTokenRouteHandler,
  postReportCreateRouteHandler,
  postSignatureRequestBulkCreateEmbeddedWithTemplateRouteHandler,
  postSignatureRequestBulkSendWithTemplateRouteHandler,
  postSignatureRequestCancelSignatureRequestIdRouteHandler,
  postSignatureRequestCreateEmbeddedRouteHandler,
  postSignatureRequestCreateEmbeddedWithTemplateRouteHandler,
  postSignatureRequestReleaseHoldSignatureRequestIdRouteHandler,
  postSignatureRequestRemindSignatureRequestIdRouteHandler,
  postSignatureRequestRemoveSignatureRequestIdRouteHandler,
  postSignatureRequestSendRouteHandler,
  postSignatureRequestSendWithTemplateRouteHandler,
  postSignatureRequestUpdateSignatureRequestIdRouteHandler,
  postTeamCreateRouteHandler,
  postTeamRemoveMemberRouteHandler,
  postTeamSettingsRouteHandler,
  postTemplateAddUserTemplateIdRouteHandler,
  postTemplateCreateEmbeddedDraftRouteHandler,
  postTemplateCreateRouteHandler,
  postTemplateDeleteTemplateIdRouteHandler,
  postTemplateRemoveUserTemplateIdRouteHandler,
  postTemplateUpdateFilesTemplateIdRouteHandler,
  postUnclaimedDraftCreateEmbeddedRouteHandler,
  postUnclaimedDraftCreateEmbeddedWithTemplateRouteHandler,
  postUnclaimedDraftCreateRouteHandler,
  postUnclaimedDraftEditAndResendSignatureRequestIdRouteHandler,
  putAccountRouteHandler,
  putApiAppClientIdRouteHandler,
  putApiKeyApiKeyIdRouteHandler,
  putFaxLineAddUserRouteHandler,
  putFaxLineRemoveUserRouteHandler,
  putSignatureRequestEditEmbeddedSignatureRequestIdRouteHandler,
  putSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdRouteHandler,
  putSignatureRequestEditSignatureRequestIdRouteHandler,
  putSignatureRequestEditWithTemplateSignatureRequestIdRouteHandler,
  putTeamAddMemberRouteHandler,
  putTeamRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiKeyRoute, getApiKeyRouteHandler)
  .openapi(postApiKeyRoute, postApiKeyRouteHandler)
  .openapi(getApiKeyApiKeyIdRoute, getApiKeyApiKeyIdRouteHandler)
  .openapi(putApiKeyApiKeyIdRoute, putApiKeyApiKeyIdRouteHandler)
  .openapi(deleteApiKeyApiKeyIdRoute, deleteApiKeyApiKeyIdRouteHandler)
  .openapi(postAccountCreateRoute, postAccountCreateRouteHandler)
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(putAccountRoute, putAccountRouteHandler)
  .openapi(getAccountSettingsRoute, getAccountSettingsRouteHandler)
  .openapi(postAccountSettingsRoute, postAccountSettingsRouteHandler)
  .openapi(postAccountVerifyRoute, postAccountVerifyRouteHandler)
  .openapi(postApiAppRoute, postApiAppRouteHandler)
  .openapi(getApiAppClientIdRoute, getApiAppClientIdRouteHandler)
  .openapi(putApiAppClientIdRoute, putApiAppClientIdRouteHandler)
  .openapi(deleteApiAppClientIdRoute, deleteApiAppClientIdRouteHandler)
  .openapi(getApiAppListRoute, getApiAppListRouteHandler)
  .openapi(getBulkSendJobBulkSendJobIdRoute, getBulkSendJobBulkSendJobIdRouteHandler)
  .openapi(getBulkSendJobListRoute, getBulkSendJobListRouteHandler)
  .openapi(postDocumentDetectFieldsRoute, postDocumentDetectFieldsRouteHandler)
  .openapi(postEmbeddedEditUrlTemplateIdRoute, postEmbeddedEditUrlTemplateIdRouteHandler)
  .openapi(getEmbeddedSignUrlSignatureIdRoute, getEmbeddedSignUrlSignatureIdRouteHandler)
  .openapi(getFaxFaxIdRoute, getFaxFaxIdRouteHandler)
  .openapi(deleteFaxFaxIdRoute, deleteFaxFaxIdRouteHandler)
  .openapi(getFaxFilesFaxIdRoute, getFaxFilesFaxIdRouteHandler)
  .openapi(putFaxLineAddUserRoute, putFaxLineAddUserRouteHandler)
  .openapi(getFaxLineAreaCodesRoute, getFaxLineAreaCodesRouteHandler)
  .openapi(postFaxLineCreateRoute, postFaxLineCreateRouteHandler)
  .openapi(getFaxLineRoute, getFaxLineRouteHandler)
  .openapi(deleteFaxLineRoute, deleteFaxLineRouteHandler)
  .openapi(getFaxLineListRoute, getFaxLineListRouteHandler)
  .openapi(putFaxLineRemoveUserRoute, putFaxLineRemoveUserRouteHandler)
  .openapi(getFaxListRoute, getFaxListRouteHandler)
  .openapi(postFaxSendRoute, postFaxSendRouteHandler)
  .openapi(postOauthTokenRoute, postOauthTokenRouteHandler)
  .openapi(postOauthTokenRefreshRoute, postOauthTokenRefreshRouteHandler)
  .openapi(postReportCreateRoute, postReportCreateRouteHandler)
  .openapi(
    postSignatureRequestBulkCreateEmbeddedWithTemplateRoute,
    postSignatureRequestBulkCreateEmbeddedWithTemplateRouteHandler,
  )
  .openapi(
    postSignatureRequestBulkSendWithTemplateRoute,
    postSignatureRequestBulkSendWithTemplateRouteHandler,
  )
  .openapi(
    postSignatureRequestCancelSignatureRequestIdRoute,
    postSignatureRequestCancelSignatureRequestIdRouteHandler,
  )
  .openapi(postSignatureRequestCreateEmbeddedRoute, postSignatureRequestCreateEmbeddedRouteHandler)
  .openapi(
    postSignatureRequestCreateEmbeddedWithTemplateRoute,
    postSignatureRequestCreateEmbeddedWithTemplateRouteHandler,
  )
  .openapi(
    putSignatureRequestEditSignatureRequestIdRoute,
    putSignatureRequestEditSignatureRequestIdRouteHandler,
  )
  .openapi(
    putSignatureRequestEditEmbeddedSignatureRequestIdRoute,
    putSignatureRequestEditEmbeddedSignatureRequestIdRouteHandler,
  )
  .openapi(
    putSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdRoute,
    putSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdRouteHandler,
  )
  .openapi(
    putSignatureRequestEditWithTemplateSignatureRequestIdRoute,
    putSignatureRequestEditWithTemplateSignatureRequestIdRouteHandler,
  )
  .openapi(
    getSignatureRequestFilesSignatureRequestIdRoute,
    getSignatureRequestFilesSignatureRequestIdRouteHandler,
  )
  .openapi(
    getSignatureRequestFilesAsDataUriSignatureRequestIdRoute,
    getSignatureRequestFilesAsDataUriSignatureRequestIdRouteHandler,
  )
  .openapi(
    getSignatureRequestFilesAsFileUrlSignatureRequestIdRoute,
    getSignatureRequestFilesAsFileUrlSignatureRequestIdRouteHandler,
  )
  .openapi(
    getSignatureRequestSignatureRequestIdRoute,
    getSignatureRequestSignatureRequestIdRouteHandler,
  )
  .openapi(getSignatureRequestListRoute, getSignatureRequestListRouteHandler)
  .openapi(
    postSignatureRequestReleaseHoldSignatureRequestIdRoute,
    postSignatureRequestReleaseHoldSignatureRequestIdRouteHandler,
  )
  .openapi(
    postSignatureRequestRemindSignatureRequestIdRoute,
    postSignatureRequestRemindSignatureRequestIdRouteHandler,
  )
  .openapi(
    postSignatureRequestRemoveSignatureRequestIdRoute,
    postSignatureRequestRemoveSignatureRequestIdRouteHandler,
  )
  .openapi(postSignatureRequestSendRoute, postSignatureRequestSendRouteHandler)
  .openapi(
    postSignatureRequestSendWithTemplateRoute,
    postSignatureRequestSendWithTemplateRouteHandler,
  )
  .openapi(
    postSignatureRequestUpdateSignatureRequestIdRoute,
    postSignatureRequestUpdateSignatureRequestIdRouteHandler,
  )
  .openapi(putTeamAddMemberRoute, putTeamAddMemberRouteHandler)
  .openapi(postTeamCreateRoute, postTeamCreateRouteHandler)
  .openapi(deleteTeamDestroyRoute, deleteTeamDestroyRouteHandler)
  .openapi(getTeamRoute, getTeamRouteHandler)
  .openapi(putTeamRoute, putTeamRouteHandler)
  .openapi(getTeamInfoRoute, getTeamInfoRouteHandler)
  .openapi(getTeamInvitesRoute, getTeamInvitesRouteHandler)
  .openapi(getTeamMembersTeamIdRoute, getTeamMembersTeamIdRouteHandler)
  .openapi(postTeamRemoveMemberRoute, postTeamRemoveMemberRouteHandler)
  .openapi(getTeamSettingsRoute, getTeamSettingsRouteHandler)
  .openapi(postTeamSettingsRoute, postTeamSettingsRouteHandler)
  .openapi(getTeamSubTeamsTeamIdRoute, getTeamSubTeamsTeamIdRouteHandler)
  .openapi(postTemplateAddUserTemplateIdRoute, postTemplateAddUserTemplateIdRouteHandler)
  .openapi(postTemplateCreateRoute, postTemplateCreateRouteHandler)
  .openapi(postTemplateCreateEmbeddedDraftRoute, postTemplateCreateEmbeddedDraftRouteHandler)
  .openapi(postTemplateDeleteTemplateIdRoute, postTemplateDeleteTemplateIdRouteHandler)
  .openapi(getTemplateFilesTemplateIdRoute, getTemplateFilesTemplateIdRouteHandler)
  .openapi(
    getTemplateFilesAsDataUriTemplateIdRoute,
    getTemplateFilesAsDataUriTemplateIdRouteHandler,
  )
  .openapi(
    getTemplateFilesAsFileUrlTemplateIdRoute,
    getTemplateFilesAsFileUrlTemplateIdRouteHandler,
  )
  .openapi(getTemplateTemplateIdRoute, getTemplateTemplateIdRouteHandler)
  .openapi(getTemplateListRoute, getTemplateListRouteHandler)
  .openapi(postTemplateRemoveUserTemplateIdRoute, postTemplateRemoveUserTemplateIdRouteHandler)
  .openapi(postTemplateUpdateFilesTemplateIdRoute, postTemplateUpdateFilesTemplateIdRouteHandler)
  .openapi(postUnclaimedDraftCreateRoute, postUnclaimedDraftCreateRouteHandler)
  .openapi(postUnclaimedDraftCreateEmbeddedRoute, postUnclaimedDraftCreateEmbeddedRouteHandler)
  .openapi(
    postUnclaimedDraftCreateEmbeddedWithTemplateRoute,
    postUnclaimedDraftCreateEmbeddedWithTemplateRouteHandler,
  )
  .openapi(
    postUnclaimedDraftEditAndResendSignatureRequestIdRoute,
    postUnclaimedDraftEditAndResendSignatureRequestIdRouteHandler,
  )

export default app
