import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiApiKeyKeyIdRoute,
  deleteApiApplicationApplicationIdRoleRoleIdRoute,
  deleteApiApplicationApplicationIdRoute,
  deleteApiApplicationApplicationIdScopeScopeIdRoute,
  deleteApiCimdDomainDomainIdRoute,
  deleteApiCimdDomainDomainIdScopeScopeIdRoute,
  deleteApiCimdRegistrationRegistrationIdRoute,
  deleteApiConnectorConnectorIdRoute,
  deleteApiConsentConsentIdRoute,
  deleteApiEmailTemplateEmailTemplateIdRoute,
  deleteApiEntityEntityIdGrantRoute,
  deleteApiEntityEntityIdRoute,
  deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
  deleteApiEntityTypeEntityTypeIdRoute,
  deleteApiFormFieldFieldIdRoute,
  deleteApiFormFormIdRoute,
  deleteApiGroupGroupIdRoute,
  deleteApiGroupMemberRoute,
  deleteApiIdentityProviderIdentityProviderIdRoute,
  deleteApiIdentityProviderLinkRoute,
  deleteApiIpAclIpAccessControlListIdRoute,
  deleteApiJwtRefreshRoute,
  deleteApiJwtRefreshTokenIdRoute,
  deleteApiKeyKeyIdRoute,
  deleteApiLambdaLambdaIdRoute,
  deleteApiMessageTemplateMessageTemplateIdRoute,
  deleteApiMessengerMessengerIdRoute,
  deleteApiReactorRoute,
  deleteApiTenantManagerIdentityProviderTypeRoute,
  deleteApiTenantTenantIdRoute,
  deleteApiThemeThemeIdRoute,
  deleteApiUserActionActionIdRoute,
  deleteApiUserActionReasonUserActionReasonIdRoute,
  deleteApiUserActionUserActionIdRoute,
  deleteApiUserBulkRoute,
  deleteApiUserConsentUserConsentIdRoute,
  deleteApiUserFamilyFamilyIdUserIdRoute,
  deleteApiUserRegistrationUserIdApplicationIdRoute,
  deleteApiUserTwoFactorUserIdRoute,
  deleteApiUserUserIdRoute,
  deleteApiWebauthnIdRoute,
  deleteApiWebauthnRoute,
  deleteApiWebhookWebhookIdRoute,
  getApiApiKeyKeyIdRoute,
  getApiApplicationApplicationIdOauthConfigurationRoute,
  getApiApplicationApplicationIdRoute,
  getApiApplicationApplicationIdScopeScopeIdRoute,
  getApiApplicationRoute,
  getApiCimdDomainDomainIdRoute,
  getApiCimdDomainDomainIdScopeScopeIdRoute,
  getApiCimdDomainRoute,
  getApiCimdRegistrationRegistrationIdRoute,
  getApiConnectorConnectorIdRoute,
  getApiConnectorRoute,
  getApiConsentConsentIdRoute,
  getApiConsentRoute,
  getApiConsentSearchRoute,
  getApiEmailTemplateEmailTemplateIdRoute,
  getApiEmailTemplateRoute,
  getApiEntityEntityIdGrantRoute,
  getApiEntityEntityIdRoute,
  getApiEntityGrantSearchRoute,
  getApiEntitySearchRoute,
  getApiEntityTypeEntityTypeIdRoute,
  getApiEntityTypeRoute,
  getApiEntityTypeSearchRoute,
  getApiFormFieldFieldIdRoute,
  getApiFormFieldRoute,
  getApiFormFormIdRoute,
  getApiFormRoute,
  getApiGroupGroupIdRoute,
  getApiGroupRoute,
  getApiHealthRoute,
  getApiIdentityProviderIdentityProviderIdRoute,
  getApiIdentityProviderLinkPendingPendingLinkIdRoute,
  getApiIdentityProviderLinkRoute,
  getApiIdentityProviderLookupRoute,
  getApiIdentityProviderRoute,
  getApiIdentityProviderSearchRoute,
  getApiIdentityProviderTestRoute,
  getApiIntegrationRoute,
  getApiIpAclIpAccessControlListIdRoute,
  getApiIpAclSearchRoute,
  getApiJwtIssueRoute,
  getApiJwtPublicKeyRoute,
  getApiJwtRefreshRoute,
  getApiJwtRefreshTokenIdRoute,
  getApiJwtValidateRoute,
  getApiKeyKeyIdRoute,
  getApiKeyRoute,
  getApiKeySearchRoute,
  getApiLambdaLambdaIdRoute,
  getApiLambdaRoute,
  getApiMessageTemplateMessageTemplateIdRoute,
  getApiMessageTemplateRoute,
  getApiMessengerMessengerIdRoute,
  getApiMessengerRoute,
  getApiReactorMetricsRoute,
  getApiReactorRoute,
  getApiReportDailyActiveUserRoute,
  getApiReportLoginRoute,
  getApiReportMonthlyActiveUserRoute,
  getApiReportRegistrationRoute,
  getApiReportTotalsRoute,
  getApiStatusRoute,
  getApiSystemAuditLogAuditLogIdRoute,
  getApiSystemConfigurationRoute,
  getApiSystemEventLogEventLogIdRoute,
  getApiSystemReindexRoute,
  getApiSystemVersionRoute,
  getApiSystemWebhookAttemptLogWebhookAttemptLogIdRoute,
  getApiSystemWebhookEventLogWebhookEventLogIdRoute,
  getApiTenantManagerRoute,
  getApiTenantPasswordValidationRulesRoute,
  getApiTenantPasswordValidationRulesTenantIdRoute,
  getApiTenantRoute,
  getApiTenantTenantIdRoute,
  getApiThemeRoute,
  getApiThemeThemeIdRoute,
  getApiTwoFactorSecretRoute,
  getApiTwoFactorStatusTwoFactorTrustIdRoute,
  getApiUserAction2Route,
  getApiUserActionActionIdRoute,
  getApiUserActionReasonRoute,
  getApiUserActionReasonUserActionReasonIdRoute,
  getApiUserActionRoute,
  getApiUserActionUserActionIdRoute,
  getApiUserChangePasswordChangePasswordIdRoute,
  getApiUserChangePasswordRoute,
  getApiUserCommentUserIdRoute,
  getApiUserConsentRoute,
  getApiUserConsentUserConsentIdRoute,
  getApiUserFamilyFamilyIdRoute,
  getApiUserFamilyPendingRoute,
  getApiUserFamilyRoute,
  getApiUserRecentLoginRoute,
  getApiUserRegistrationUserIdApplicationIdRoute,
  getApiUserRoute,
  getApiUserSearchRoute,
  getApiUserTwoFactorRecoveryCodeUserIdRoute,
  getApiUserUserIdRoute,
  getApiWebauthnIdRoute,
  getApiWebauthnRoute,
  getApiWebhookRoute,
  getApiWebhookSearchRoute,
  getApiWebhookWebhookIdRoute,
  patchApiApiKeyKeyIdRoute,
  patchApiApplicationApplicationIdRoleRoleIdRoute,
  patchApiApplicationApplicationIdRoute,
  patchApiApplicationApplicationIdScopeScopeIdRoute,
  patchApiCimdDomainDomainIdRoute,
  patchApiCimdDomainDomainIdScopeScopeIdRoute,
  patchApiConnectorConnectorIdRoute,
  patchApiConsentConsentIdRoute,
  patchApiEmailTemplateEmailTemplateIdRoute,
  patchApiEntityEntityIdRoute,
  patchApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
  patchApiEntityTypeEntityTypeIdRoute,
  patchApiFormFieldFieldIdRoute,
  patchApiFormFormIdRoute,
  patchApiGroupGroupIdRoute,
  patchApiIdentityProviderIdentityProviderIdRoute,
  patchApiIntegrationRoute,
  patchApiIpAclAccessControlListIdRoute,
  patchApiLambdaLambdaIdRoute,
  patchApiMessageTemplateMessageTemplateIdRoute,
  patchApiMessengerMessengerIdRoute,
  patchApiSystemConfigurationRoute,
  patchApiTenantManagerIdentityProviderTypeRoute,
  patchApiTenantManagerRoute,
  patchApiTenantTenantIdRoute,
  patchApiThemeThemeIdRoute,
  patchApiUserActionReasonUserActionReasonIdRoute,
  patchApiUserActionUserActionIdRoute,
  patchApiUserConsentUserConsentIdRoute,
  patchApiUserRegistrationUserIdRoute,
  patchApiUserUserIdRoute,
  patchApiWebhookWebhookIdRoute,
  postApiApiKeyKeyIdRoute,
  postApiApiKeyRoute,
  postApiApplicationApplicationIdRoleRoleIdRoute,
  postApiApplicationApplicationIdRoleRoute,
  postApiApplicationApplicationIdRoute,
  postApiApplicationApplicationIdScopeRoute,
  postApiApplicationApplicationIdScopeScopeIdRoute,
  postApiApplicationRoute,
  postApiApplicationSearchRoute,
  postApiCimdDomainDomainIdRoute,
  postApiCimdDomainDomainIdScopeRoute,
  postApiCimdDomainDomainIdScopeScopeIdRoute,
  postApiCimdDomainRoute,
  postApiCimdDomainSearchRoute,
  postApiCimdRegistrationSearchRoute,
  postApiConnectorConnectorIdRoute,
  postApiConnectorRoute,
  postApiConsentConsentIdRoute,
  postApiConsentRoute,
  postApiConsentSearchRoute,
  postApiEmailSendEmailTemplateIdRoute,
  postApiEmailTemplateEmailTemplateIdRoute,
  postApiEmailTemplatePreviewRoute,
  postApiEmailTemplateRoute,
  postApiEmailTemplateSearchRoute,
  postApiEntityEntityIdGrantRoute,
  postApiEntityEntityIdRoute,
  postApiEntityGrantSearchRoute,
  postApiEntityRoute,
  postApiEntitySearchRoute,
  postApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
  postApiEntityTypeEntityTypeIdPermissionRoute,
  postApiEntityTypeEntityTypeIdRoute,
  postApiEntityTypeRoute,
  postApiEntityTypeSearchRoute,
  postApiFormFieldFieldIdRoute,
  postApiFormFieldRoute,
  postApiFormFormIdRoute,
  postApiFormRoute,
  postApiGroupGroupIdRoute,
  postApiGroupMemberRoute,
  postApiGroupMemberSearchRoute,
  postApiGroupRoute,
  postApiGroupSearchRoute,
  postApiIdentityProviderIdentityProviderIdRoute,
  postApiIdentityProviderLinkRoute,
  postApiIdentityProviderLoginRoute,
  postApiIdentityProviderRoute,
  postApiIdentityProviderSearchRoute,
  postApiIdentityProviderStartRoute,
  postApiIdentityProviderTestRoute,
  postApiIdentityVerifyCompleteRoute,
  postApiIdentityVerifyRoute,
  postApiIdentityVerifySendRoute,
  postApiIdentityVerifyStartRoute,
  postApiIpAclAccessControlListIdRoute,
  postApiIpAclRoute,
  postApiIpAclSearchRoute,
  postApiJwtReconcileRoute,
  postApiJwtRefreshRoute,
  postApiJwtVendRoute,
  postApiKeyGenerateKeyIdRoute,
  postApiKeyGenerateRoute,
  postApiKeyImportKeyIdRoute,
  postApiKeyImportRoute,
  postApiKeySearchRoute,
  postApiLambdaLambdaIdRoute,
  postApiLambdaRoute,
  postApiLambdaSearchRoute,
  postApiLoginRoute,
  postApiLogoutRoute,
  postApiMessageTemplateMessageTemplateIdRoute,
  postApiMessageTemplatePreviewRoute,
  postApiMessageTemplateRoute,
  postApiMessengerMessengerIdRoute,
  postApiMessengerRoute,
  postApiPasswordlessLoginRoute,
  postApiPasswordlessSendRoute,
  postApiPasswordlessStartRoute,
  postApiReactorRoute,
  postApiSystemAuditLogRoute,
  postApiSystemAuditLogSearchRoute,
  postApiSystemEventLogSearchRoute,
  postApiSystemLoginRecordSearchRoute,
  postApiSystemReindexRoute,
  postApiSystemWebhookEventLogSearchRoute,
  postApiTenantManagerIdentityProviderTypeRoute,
  postApiTenantRoute,
  postApiTenantSearchRoute,
  postApiTenantTenantIdRoute,
  postApiThemeRoute,
  postApiThemeSearchRoute,
  postApiThemeThemeIdRoute,
  postApiTwoFactorLoginRoute,
  postApiTwoFactorSendRoute,
  postApiTwoFactorSendTwoFactorIdRoute,
  postApiTwoFactorStartRoute,
  postApiTwoFactorStatusRoute,
  postApiUserAction2Route,
  postApiUserActionReasonRoute,
  postApiUserActionReasonUserActionReasonIdRoute,
  postApiUserActionRoute,
  postApiUserActionUserActionIdRoute,
  postApiUserChangePasswordChangePasswordIdRoute,
  postApiUserChangePasswordRoute,
  postApiUserCommentRoute,
  postApiUserCommentSearchRoute,
  postApiUserConsentRoute,
  postApiUserConsentUserConsentIdRoute,
  postApiUserFamilyFamilyIdRoute,
  postApiUserFamilyRequestRoute,
  postApiUserFamilyRoute,
  postApiUserForgotPasswordRoute,
  postApiUserImportRoute,
  postApiUserRefreshTokenImportRoute,
  postApiUserRegistrationRoute,
  postApiUserRegistrationUserIdRoute,
  postApiUserRoute,
  postApiUserSearchRoute,
  postApiUserTwoFactorRecoveryCodeUserIdRoute,
  postApiUserTwoFactorUserIdRoute,
  postApiUserUserIdRoute,
  postApiUserVerifyEmailRoute,
  postApiUserVerifyRegistrationRoute,
  postApiWebauthnAssertRoute,
  postApiWebauthnImportRoute,
  postApiWebauthnLoginRoute,
  postApiWebauthnRegisterCompleteRoute,
  postApiWebauthnRegisterStartRoute,
  postApiWebauthnStartRoute,
  postApiWebhookRoute,
  postApiWebhookSearchRoute,
  postApiWebhookWebhookIdRoute,
  putApiApiKeyKeyIdRoute,
  putApiApplicationApplicationIdRoleRoleIdRoute,
  putApiApplicationApplicationIdRoute,
  putApiApplicationApplicationIdScopeScopeIdRoute,
  putApiCimdDomainDomainIdRoute,
  putApiCimdDomainDomainIdScopeScopeIdRoute,
  putApiConnectorConnectorIdRoute,
  putApiConsentConsentIdRoute,
  putApiEmailTemplateEmailTemplateIdRoute,
  putApiEntityEntityIdRoute,
  putApiEntitySearchRoute,
  putApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
  putApiEntityTypeEntityTypeIdRoute,
  putApiFormFieldFieldIdRoute,
  putApiFormFormIdRoute,
  putApiGroupGroupIdRoute,
  putApiGroupMemberRoute,
  putApiIdentityProviderIdentityProviderIdRoute,
  putApiIntegrationRoute,
  putApiIpAclAccessControlListIdRoute,
  putApiKeyKeyIdRoute,
  putApiLambdaLambdaIdRoute,
  putApiLoginRoute,
  putApiLoginUserIdApplicationIdRoute,
  putApiMessageTemplateMessageTemplateIdRoute,
  putApiMessengerMessengerIdRoute,
  putApiReactorRoute,
  putApiSystemConfigurationRoute,
  putApiTenantManagerIdentityProviderTypeRoute,
  putApiTenantManagerRoute,
  putApiTenantTenantIdRoute,
  putApiThemeThemeIdRoute,
  putApiUserActionActionIdRoute,
  putApiUserActionReasonUserActionReasonIdRoute,
  putApiUserActionUserActionIdRoute,
  putApiUserConsentUserConsentIdRoute,
  putApiUserFamilyFamilyIdRoute,
  putApiUserRegistrationUserIdRoute,
  putApiUserSearchRoute,
  putApiUserTwoFactorUserIdRoute,
  putApiUserUserIdRoute,
  putApiUserVerifyEmailRoute,
  putApiUserVerifyRegistrationRoute,
  putApiWebhookWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiApplicationApplicationIdOauthConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationApplicationIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationApplicationIdRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApplicationApplicationIdRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiApplicationApplicationIdRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiApplicationApplicationIdRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationApplicationIdScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationApplicationIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApplicationApplicationIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiApplicationApplicationIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiApplicationApplicationIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiApplicationApplicationIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCimdDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCimdDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCimdDomainSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCimdDomainDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCimdDomainDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCimdDomainDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCimdDomainDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCimdDomainDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCimdDomainDomainIdScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCimdDomainDomainIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCimdDomainDomainIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCimdDomainDomainIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCimdDomainDomainIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCimdDomainDomainIdScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCimdRegistrationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCimdRegistrationRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCimdRegistrationRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConsentSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsentSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConsentConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiConsentConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiConsentConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsentConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiConsentConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmailSendEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmailTemplatePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmailTemplateSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmailTemplateEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiEmailTemplateEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiEmailTemplateEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmailTemplateEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiEmailTemplateEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityGrantSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntityGrantSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntitySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntitySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiEntitySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntityTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityTypeEntityTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiEntityTypeEntityTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiEntityTypeEntityTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntityTypeEntityTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiEntityTypeEntityTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityTypeEntityTypeIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityTypeEntityTypeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiEntityTypeEntityTypeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiEntityTypeEntityTypeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiEntityEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiEntityEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntityEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiEntityEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiEntityEntityIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntityEntityIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEntityEntityIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFormFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFormFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFormFieldFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFormFieldFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiFormFieldFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFormFieldFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiFormFieldFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFormFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFormFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiFormFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFormFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiFormFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGroupMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupMemberSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProviderLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIdentityProviderLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProviderLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProviderLinkPendingPendingLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProviderLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProviderLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProviderSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProviderSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProviderStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProviderTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProviderTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProviderIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIdentityProviderIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIdentityProviderIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProviderIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIdentityProviderIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityVerifyCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityVerifySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityVerifyStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpAclSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpAclSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpAclAccessControlListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpAclAccessControlListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpAclAccessControlListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpAclIpAccessControlListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpAclIpAccessControlListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJwtIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJwtPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJwtReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJwtRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJwtRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiJwtRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJwtRefreshTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiJwtRefreshTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJwtValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJwtVendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyGenerateKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyImportKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiKeyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLambdaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLambdaSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLambdaLambdaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLambdaLambdaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLambdaLambdaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaLambdaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLambdaLambdaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLoginUserIdApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMessageTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessageTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMessageTemplatePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMessageTemplateMessageTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMessageTemplateMessageTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMessageTemplateMessageTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessageTemplateMessageTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiMessageTemplateMessageTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMessengerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessengerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMessengerMessengerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMessengerMessengerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMessengerMessengerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessengerMessengerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiMessengerMessengerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPasswordlessLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPasswordlessSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPasswordlessStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiReactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReactorMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportDailyActiveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportMonthlyActiveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSystemConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiSystemConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemAuditLogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemAuditLogAuditLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemEventLogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemEventLogEventLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemLoginRecordSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemWebhookAttemptLogWebhookAttemptLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemWebhookEventLogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemWebhookEventLogWebhookEventLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTenantManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTenantManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTenantManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTenantManagerIdentityProviderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTenantManagerIdentityProviderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTenantManagerIdentityProviderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTenantManagerIdentityProviderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTenantPasswordValidationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTenantPasswordValidationRulesTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTenantSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiThemeThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiThemeThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemeThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiThemeThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTwoFactorLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTwoFactorSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTwoFactorSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTwoFactorSendTwoFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTwoFactorStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTwoFactorStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTwoFactorStatusTwoFactorTrustIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserActionReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserActionReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserActionReasonUserActionReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserActionReasonUserActionReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUserActionReasonUserActionReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserActionReasonUserActionReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserActionReasonUserActionReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserActionUserActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserActionUserActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUserActionUserActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserActionUserActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserActionUserActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserAction2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserAction2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserActionActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserActionActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserActionActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserChangePasswordChangePasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserChangePasswordChangePasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserCommentSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserCommentUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserConsentUserConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUserConsentUserConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserConsentUserConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserConsentUserConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserConsentUserConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserFamilyPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserFamilyRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserFamilyFamilyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserFamilyFamilyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserFamilyFamilyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserFamilyFamilyIdUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserRecentLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserRefreshTokenImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUserRegistrationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserRegistrationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserRegistrationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserRegistrationUserIdApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserRegistrationUserIdApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserTwoFactorRecoveryCodeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserTwoFactorRecoveryCodeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserTwoFactorUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserTwoFactorUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserTwoFactorUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserVerifyRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserVerifyRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWebauthnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebauthnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebauthnAssertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebauthnImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebauthnLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebauthnRegisterCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebauthnRegisterStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebauthnStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWebauthnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebauthnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhookSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhookSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
