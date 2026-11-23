import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postApiApiKeyRouteHandler: RouteHandler<typeof postApiApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiApiKeyKeyIdRouteHandler: RouteHandler<typeof postApiApiKeyKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiApiKeyKeyIdRouteHandler: RouteHandler<
  typeof deleteApiApiKeyKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiApiKeyKeyIdRouteHandler: RouteHandler<
  typeof patchApiApiKeyKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiApiKeyKeyIdRouteHandler: RouteHandler<typeof getApiApiKeyKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiApiKeyKeyIdRouteHandler: RouteHandler<typeof putApiApiKeyKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiApplicationRouteHandler: RouteHandler<typeof postApiApplicationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiApplicationRouteHandler: RouteHandler<typeof getApiApplicationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiApplicationSearchRouteHandler: RouteHandler<
  typeof postApiApplicationSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiApplicationApplicationIdRouteHandler: RouteHandler<
  typeof postApiApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiApplicationApplicationIdRouteHandler: RouteHandler<
  typeof deleteApiApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiApplicationApplicationIdRouteHandler: RouteHandler<
  typeof patchApiApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiApplicationApplicationIdRouteHandler: RouteHandler<
  typeof putApiApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiApplicationApplicationIdRouteHandler: RouteHandler<
  typeof getApiApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiApplicationApplicationIdOauthConfigurationRouteHandler: RouteHandler<
  typeof getApiApplicationApplicationIdOauthConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiApplicationApplicationIdRoleRouteHandler: RouteHandler<
  typeof postApiApplicationApplicationIdRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiApplicationApplicationIdRoleRoleIdRouteHandler: RouteHandler<
  typeof postApiApplicationApplicationIdRoleRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiApplicationApplicationIdRoleRoleIdRouteHandler: RouteHandler<
  typeof deleteApiApplicationApplicationIdRoleRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiApplicationApplicationIdRoleRoleIdRouteHandler: RouteHandler<
  typeof patchApiApplicationApplicationIdRoleRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiApplicationApplicationIdRoleRoleIdRouteHandler: RouteHandler<
  typeof putApiApplicationApplicationIdRoleRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiApplicationApplicationIdScopeRouteHandler: RouteHandler<
  typeof postApiApplicationApplicationIdScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiApplicationApplicationIdScopeScopeIdRouteHandler: RouteHandler<
  typeof postApiApplicationApplicationIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiApplicationApplicationIdScopeScopeIdRouteHandler: RouteHandler<
  typeof deleteApiApplicationApplicationIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiApplicationApplicationIdScopeScopeIdRouteHandler: RouteHandler<
  typeof patchApiApplicationApplicationIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiApplicationApplicationIdScopeScopeIdRouteHandler: RouteHandler<
  typeof getApiApplicationApplicationIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiApplicationApplicationIdScopeScopeIdRouteHandler: RouteHandler<
  typeof putApiApplicationApplicationIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCimdDomainRouteHandler: RouteHandler<typeof postApiCimdDomainRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiCimdDomainRouteHandler: RouteHandler<typeof getApiCimdDomainRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiCimdDomainSearchRouteHandler: RouteHandler<
  typeof postApiCimdDomainSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCimdDomainDomainIdRouteHandler: RouteHandler<
  typeof postApiCimdDomainDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCimdDomainDomainIdRouteHandler: RouteHandler<
  typeof deleteApiCimdDomainDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCimdDomainDomainIdRouteHandler: RouteHandler<
  typeof patchApiCimdDomainDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCimdDomainDomainIdRouteHandler: RouteHandler<
  typeof getApiCimdDomainDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCimdDomainDomainIdRouteHandler: RouteHandler<
  typeof putApiCimdDomainDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCimdDomainDomainIdScopeRouteHandler: RouteHandler<
  typeof postApiCimdDomainDomainIdScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCimdDomainDomainIdScopeScopeIdRouteHandler: RouteHandler<
  typeof postApiCimdDomainDomainIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCimdDomainDomainIdScopeScopeIdRouteHandler: RouteHandler<
  typeof deleteApiCimdDomainDomainIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCimdDomainDomainIdScopeScopeIdRouteHandler: RouteHandler<
  typeof patchApiCimdDomainDomainIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCimdDomainDomainIdScopeScopeIdRouteHandler: RouteHandler<
  typeof getApiCimdDomainDomainIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCimdDomainDomainIdScopeScopeIdRouteHandler: RouteHandler<
  typeof putApiCimdDomainDomainIdScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCimdRegistrationSearchRouteHandler: RouteHandler<
  typeof postApiCimdRegistrationSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCimdRegistrationRegistrationIdRouteHandler: RouteHandler<
  typeof deleteApiCimdRegistrationRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCimdRegistrationRegistrationIdRouteHandler: RouteHandler<
  typeof getApiCimdRegistrationRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConnectorRouteHandler: RouteHandler<typeof postApiConnectorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiConnectorRouteHandler: RouteHandler<typeof getApiConnectorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConnectorConnectorIdRouteHandler: RouteHandler<
  typeof postApiConnectorConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiConnectorConnectorIdRouteHandler: RouteHandler<
  typeof deleteApiConnectorConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiConnectorConnectorIdRouteHandler: RouteHandler<
  typeof patchApiConnectorConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConnectorConnectorIdRouteHandler: RouteHandler<
  typeof getApiConnectorConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiConnectorConnectorIdRouteHandler: RouteHandler<
  typeof putApiConnectorConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConsentRouteHandler: RouteHandler<typeof postApiConsentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConsentRouteHandler: RouteHandler<typeof getApiConsentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConsentSearchRouteHandler: RouteHandler<
  typeof postApiConsentSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConsentSearchRouteHandler: RouteHandler<
  typeof getApiConsentSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConsentConsentIdRouteHandler: RouteHandler<
  typeof postApiConsentConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiConsentConsentIdRouteHandler: RouteHandler<
  typeof deleteApiConsentConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiConsentConsentIdRouteHandler: RouteHandler<
  typeof patchApiConsentConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConsentConsentIdRouteHandler: RouteHandler<
  typeof getApiConsentConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiConsentConsentIdRouteHandler: RouteHandler<
  typeof putApiConsentConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEmailSendEmailTemplateIdRouteHandler: RouteHandler<
  typeof postApiEmailSendEmailTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEmailTemplateRouteHandler: RouteHandler<
  typeof postApiEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEmailTemplateRouteHandler: RouteHandler<
  typeof getApiEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEmailTemplatePreviewRouteHandler: RouteHandler<
  typeof postApiEmailTemplatePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEmailTemplateSearchRouteHandler: RouteHandler<
  typeof postApiEmailTemplateSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEmailTemplateEmailTemplateIdRouteHandler: RouteHandler<
  typeof postApiEmailTemplateEmailTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiEmailTemplateEmailTemplateIdRouteHandler: RouteHandler<
  typeof deleteApiEmailTemplateEmailTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiEmailTemplateEmailTemplateIdRouteHandler: RouteHandler<
  typeof patchApiEmailTemplateEmailTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEmailTemplateEmailTemplateIdRouteHandler: RouteHandler<
  typeof getApiEmailTemplateEmailTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiEmailTemplateEmailTemplateIdRouteHandler: RouteHandler<
  typeof putApiEmailTemplateEmailTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntityRouteHandler: RouteHandler<typeof postApiEntityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntityGrantSearchRouteHandler: RouteHandler<
  typeof postApiEntityGrantSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEntityGrantSearchRouteHandler: RouteHandler<
  typeof getApiEntityGrantSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntitySearchRouteHandler: RouteHandler<
  typeof postApiEntitySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEntitySearchRouteHandler: RouteHandler<typeof getApiEntitySearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiEntitySearchRouteHandler: RouteHandler<typeof putApiEntitySearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiEntityTypeRouteHandler: RouteHandler<typeof postApiEntityTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiEntityTypeRouteHandler: RouteHandler<typeof getApiEntityTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiEntityTypeSearchRouteHandler: RouteHandler<
  typeof postApiEntityTypeSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEntityTypeSearchRouteHandler: RouteHandler<
  typeof getApiEntityTypeSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntityTypeEntityTypeIdRouteHandler: RouteHandler<
  typeof postApiEntityTypeEntityTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiEntityTypeEntityTypeIdRouteHandler: RouteHandler<
  typeof deleteApiEntityTypeEntityTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiEntityTypeEntityTypeIdRouteHandler: RouteHandler<
  typeof patchApiEntityTypeEntityTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEntityTypeEntityTypeIdRouteHandler: RouteHandler<
  typeof getApiEntityTypeEntityTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiEntityTypeEntityTypeIdRouteHandler: RouteHandler<
  typeof putApiEntityTypeEntityTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntityTypeEntityTypeIdPermissionRouteHandler: RouteHandler<
  typeof postApiEntityTypeEntityTypeIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof postApiEntityTypeEntityTypeIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof patchApiEntityTypeEntityTypeIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof putApiEntityTypeEntityTypeIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntityEntityIdRouteHandler: RouteHandler<
  typeof postApiEntityEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiEntityEntityIdRouteHandler: RouteHandler<
  typeof deleteApiEntityEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiEntityEntityIdRouteHandler: RouteHandler<
  typeof patchApiEntityEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEntityEntityIdRouteHandler: RouteHandler<
  typeof getApiEntityEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiEntityEntityIdRouteHandler: RouteHandler<
  typeof putApiEntityEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiEntityEntityIdGrantRouteHandler: RouteHandler<
  typeof deleteApiEntityEntityIdGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEntityEntityIdGrantRouteHandler: RouteHandler<
  typeof getApiEntityEntityIdGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEntityEntityIdGrantRouteHandler: RouteHandler<
  typeof postApiEntityEntityIdGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFormRouteHandler: RouteHandler<typeof postApiFormRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFormRouteHandler: RouteHandler<typeof getApiFormRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFormFieldRouteHandler: RouteHandler<typeof postApiFormFieldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiFormFieldRouteHandler: RouteHandler<typeof getApiFormFieldRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFormFieldFieldIdRouteHandler: RouteHandler<
  typeof postApiFormFieldFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiFormFieldFieldIdRouteHandler: RouteHandler<
  typeof deleteApiFormFieldFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiFormFieldFieldIdRouteHandler: RouteHandler<
  typeof patchApiFormFieldFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFormFieldFieldIdRouteHandler: RouteHandler<
  typeof getApiFormFieldFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiFormFieldFieldIdRouteHandler: RouteHandler<
  typeof putApiFormFieldFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFormFormIdRouteHandler: RouteHandler<typeof postApiFormFormIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiFormFormIdRouteHandler: RouteHandler<
  typeof deleteApiFormFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiFormFormIdRouteHandler: RouteHandler<typeof patchApiFormFormIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiFormFormIdRouteHandler: RouteHandler<typeof getApiFormFormIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiFormFormIdRouteHandler: RouteHandler<typeof putApiFormFormIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiGroupRouteHandler: RouteHandler<typeof postApiGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGroupRouteHandler: RouteHandler<typeof getApiGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiGroupMemberRouteHandler: RouteHandler<typeof postApiGroupMemberRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiGroupMemberRouteHandler: RouteHandler<
  typeof deleteApiGroupMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiGroupMemberRouteHandler: RouteHandler<typeof putApiGroupMemberRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiGroupMemberSearchRouteHandler: RouteHandler<
  typeof postApiGroupMemberSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiGroupSearchRouteHandler: RouteHandler<typeof postApiGroupSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiGroupGroupIdRouteHandler: RouteHandler<
  typeof postApiGroupGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiGroupGroupIdRouteHandler: RouteHandler<
  typeof deleteApiGroupGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiGroupGroupIdRouteHandler: RouteHandler<
  typeof patchApiGroupGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGroupGroupIdRouteHandler: RouteHandler<typeof getApiGroupGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiGroupGroupIdRouteHandler: RouteHandler<typeof putApiGroupGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiHealthRouteHandler: RouteHandler<typeof getApiHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityProviderRouteHandler: RouteHandler<
  typeof postApiIdentityProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentityProviderRouteHandler: RouteHandler<
  typeof getApiIdentityProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityProviderLinkRouteHandler: RouteHandler<
  typeof postApiIdentityProviderLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiIdentityProviderLinkRouteHandler: RouteHandler<
  typeof deleteApiIdentityProviderLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentityProviderLinkRouteHandler: RouteHandler<
  typeof getApiIdentityProviderLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentityProviderLinkPendingPendingLinkIdRouteHandler: RouteHandler<
  typeof getApiIdentityProviderLinkPendingPendingLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityProviderLoginRouteHandler: RouteHandler<
  typeof postApiIdentityProviderLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentityProviderLookupRouteHandler: RouteHandler<
  typeof getApiIdentityProviderLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityProviderSearchRouteHandler: RouteHandler<
  typeof postApiIdentityProviderSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentityProviderSearchRouteHandler: RouteHandler<
  typeof getApiIdentityProviderSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityProviderStartRouteHandler: RouteHandler<
  typeof postApiIdentityProviderStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentityProviderTestRouteHandler: RouteHandler<
  typeof getApiIdentityProviderTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityProviderTestRouteHandler: RouteHandler<
  typeof postApiIdentityProviderTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityProviderIdentityProviderIdRouteHandler: RouteHandler<
  typeof postApiIdentityProviderIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiIdentityProviderIdentityProviderIdRouteHandler: RouteHandler<
  typeof deleteApiIdentityProviderIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiIdentityProviderIdentityProviderIdRouteHandler: RouteHandler<
  typeof patchApiIdentityProviderIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIdentityProviderIdentityProviderIdRouteHandler: RouteHandler<
  typeof getApiIdentityProviderIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiIdentityProviderIdentityProviderIdRouteHandler: RouteHandler<
  typeof putApiIdentityProviderIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityVerifyRouteHandler: RouteHandler<
  typeof postApiIdentityVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityVerifyCompleteRouteHandler: RouteHandler<
  typeof postApiIdentityVerifyCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityVerifySendRouteHandler: RouteHandler<
  typeof postApiIdentityVerifySendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIdentityVerifyStartRouteHandler: RouteHandler<
  typeof postApiIdentityVerifyStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiIntegrationRouteHandler: RouteHandler<
  typeof patchApiIntegrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiIntegrationRouteHandler: RouteHandler<typeof putApiIntegrationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiIntegrationRouteHandler: RouteHandler<typeof getApiIntegrationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiIpAclRouteHandler: RouteHandler<typeof postApiIpAclRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIpAclSearchRouteHandler: RouteHandler<typeof postApiIpAclSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiIpAclSearchRouteHandler: RouteHandler<typeof getApiIpAclSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiIpAclAccessControlListIdRouteHandler: RouteHandler<
  typeof postApiIpAclAccessControlListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiIpAclAccessControlListIdRouteHandler: RouteHandler<
  typeof patchApiIpAclAccessControlListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiIpAclAccessControlListIdRouteHandler: RouteHandler<
  typeof putApiIpAclAccessControlListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiIpAclIpAccessControlListIdRouteHandler: RouteHandler<
  typeof deleteApiIpAclIpAccessControlListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIpAclIpAccessControlListIdRouteHandler: RouteHandler<
  typeof getApiIpAclIpAccessControlListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJwtIssueRouteHandler: RouteHandler<typeof getApiJwtIssueRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJwtPublicKeyRouteHandler: RouteHandler<typeof getApiJwtPublicKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiJwtReconcileRouteHandler: RouteHandler<
  typeof postApiJwtReconcileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJwtRefreshRouteHandler: RouteHandler<typeof postApiJwtRefreshRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiJwtRefreshRouteHandler: RouteHandler<typeof getApiJwtRefreshRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiJwtRefreshRouteHandler: RouteHandler<
  typeof deleteApiJwtRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJwtRefreshTokenIdRouteHandler: RouteHandler<
  typeof getApiJwtRefreshTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiJwtRefreshTokenIdRouteHandler: RouteHandler<
  typeof deleteApiJwtRefreshTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJwtValidateRouteHandler: RouteHandler<typeof getApiJwtValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiJwtVendRouteHandler: RouteHandler<typeof postApiJwtVendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeyRouteHandler: RouteHandler<typeof getApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeyGenerateRouteHandler: RouteHandler<typeof postApiKeyGenerateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiKeyGenerateKeyIdRouteHandler: RouteHandler<
  typeof postApiKeyGenerateKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeyImportRouteHandler: RouteHandler<typeof postApiKeyImportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiKeyImportKeyIdRouteHandler: RouteHandler<
  typeof postApiKeyImportKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeySearchRouteHandler: RouteHandler<typeof postApiKeySearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiKeySearchRouteHandler: RouteHandler<typeof getApiKeySearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeyKeyIdRouteHandler: RouteHandler<typeof deleteApiKeyKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiKeyKeyIdRouteHandler: RouteHandler<typeof getApiKeyKeyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiKeyKeyIdRouteHandler: RouteHandler<typeof putApiKeyKeyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLambdaRouteHandler: RouteHandler<typeof postApiLambdaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLambdaRouteHandler: RouteHandler<typeof getApiLambdaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLambdaSearchRouteHandler: RouteHandler<
  typeof postApiLambdaSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLambdaLambdaIdRouteHandler: RouteHandler<
  typeof postApiLambdaLambdaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLambdaLambdaIdRouteHandler: RouteHandler<
  typeof deleteApiLambdaLambdaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLambdaLambdaIdRouteHandler: RouteHandler<
  typeof patchApiLambdaLambdaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLambdaLambdaIdRouteHandler: RouteHandler<
  typeof getApiLambdaLambdaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLambdaLambdaIdRouteHandler: RouteHandler<
  typeof putApiLambdaLambdaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLoginRouteHandler: RouteHandler<typeof postApiLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLoginRouteHandler: RouteHandler<typeof putApiLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLoginUserIdApplicationIdRouteHandler: RouteHandler<
  typeof putApiLoginUserIdApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLogoutRouteHandler: RouteHandler<typeof postApiLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMessageTemplateRouteHandler: RouteHandler<
  typeof postApiMessageTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMessageTemplateRouteHandler: RouteHandler<
  typeof getApiMessageTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMessageTemplatePreviewRouteHandler: RouteHandler<
  typeof postApiMessageTemplatePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMessageTemplateMessageTemplateIdRouteHandler: RouteHandler<
  typeof postApiMessageTemplateMessageTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiMessageTemplateMessageTemplateIdRouteHandler: RouteHandler<
  typeof deleteApiMessageTemplateMessageTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiMessageTemplateMessageTemplateIdRouteHandler: RouteHandler<
  typeof patchApiMessageTemplateMessageTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMessageTemplateMessageTemplateIdRouteHandler: RouteHandler<
  typeof getApiMessageTemplateMessageTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiMessageTemplateMessageTemplateIdRouteHandler: RouteHandler<
  typeof putApiMessageTemplateMessageTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMessengerRouteHandler: RouteHandler<typeof postApiMessengerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiMessengerRouteHandler: RouteHandler<typeof getApiMessengerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMessengerMessengerIdRouteHandler: RouteHandler<
  typeof postApiMessengerMessengerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiMessengerMessengerIdRouteHandler: RouteHandler<
  typeof deleteApiMessengerMessengerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiMessengerMessengerIdRouteHandler: RouteHandler<
  typeof patchApiMessengerMessengerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMessengerMessengerIdRouteHandler: RouteHandler<
  typeof getApiMessengerMessengerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiMessengerMessengerIdRouteHandler: RouteHandler<
  typeof putApiMessengerMessengerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPasswordlessLoginRouteHandler: RouteHandler<
  typeof postApiPasswordlessLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPasswordlessSendRouteHandler: RouteHandler<
  typeof postApiPasswordlessSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPasswordlessStartRouteHandler: RouteHandler<
  typeof postApiPasswordlessStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReactorRouteHandler: RouteHandler<typeof postApiReactorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiReactorRouteHandler: RouteHandler<typeof deleteApiReactorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiReactorRouteHandler: RouteHandler<typeof putApiReactorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReactorRouteHandler: RouteHandler<typeof getApiReactorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReactorMetricsRouteHandler: RouteHandler<
  typeof getApiReactorMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReportDailyActiveUserRouteHandler: RouteHandler<
  typeof getApiReportDailyActiveUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReportLoginRouteHandler: RouteHandler<typeof getApiReportLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiReportMonthlyActiveUserRouteHandler: RouteHandler<
  typeof getApiReportMonthlyActiveUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReportRegistrationRouteHandler: RouteHandler<
  typeof getApiReportRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReportTotalsRouteHandler: RouteHandler<typeof getApiReportTotalsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiStatusRouteHandler: RouteHandler<typeof getApiStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiSystemConfigurationRouteHandler: RouteHandler<
  typeof patchApiSystemConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiSystemConfigurationRouteHandler: RouteHandler<
  typeof putApiSystemConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSystemConfigurationRouteHandler: RouteHandler<
  typeof getApiSystemConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSystemAuditLogRouteHandler: RouteHandler<
  typeof postApiSystemAuditLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSystemAuditLogSearchRouteHandler: RouteHandler<
  typeof postApiSystemAuditLogSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSystemAuditLogAuditLogIdRouteHandler: RouteHandler<
  typeof getApiSystemAuditLogAuditLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSystemEventLogSearchRouteHandler: RouteHandler<
  typeof postApiSystemEventLogSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSystemEventLogEventLogIdRouteHandler: RouteHandler<
  typeof getApiSystemEventLogEventLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSystemLoginRecordSearchRouteHandler: RouteHandler<
  typeof postApiSystemLoginRecordSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSystemReindexRouteHandler: RouteHandler<
  typeof postApiSystemReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSystemReindexRouteHandler: RouteHandler<
  typeof getApiSystemReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSystemVersionRouteHandler: RouteHandler<
  typeof getApiSystemVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSystemWebhookAttemptLogWebhookAttemptLogIdRouteHandler: RouteHandler<
  typeof getApiSystemWebhookAttemptLogWebhookAttemptLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSystemWebhookEventLogSearchRouteHandler: RouteHandler<
  typeof postApiSystemWebhookEventLogSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSystemWebhookEventLogWebhookEventLogIdRouteHandler: RouteHandler<
  typeof getApiSystemWebhookEventLogWebhookEventLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTenantRouteHandler: RouteHandler<typeof postApiTenantRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTenantRouteHandler: RouteHandler<typeof getApiTenantRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTenantManagerRouteHandler: RouteHandler<
  typeof patchApiTenantManagerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTenantManagerRouteHandler: RouteHandler<
  typeof putApiTenantManagerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTenantManagerRouteHandler: RouteHandler<
  typeof getApiTenantManagerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTenantManagerIdentityProviderTypeRouteHandler: RouteHandler<
  typeof postApiTenantManagerIdentityProviderTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTenantManagerIdentityProviderTypeRouteHandler: RouteHandler<
  typeof deleteApiTenantManagerIdentityProviderTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTenantManagerIdentityProviderTypeRouteHandler: RouteHandler<
  typeof patchApiTenantManagerIdentityProviderTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTenantManagerIdentityProviderTypeRouteHandler: RouteHandler<
  typeof putApiTenantManagerIdentityProviderTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTenantPasswordValidationRulesRouteHandler: RouteHandler<
  typeof getApiTenantPasswordValidationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTenantPasswordValidationRulesTenantIdRouteHandler: RouteHandler<
  typeof getApiTenantPasswordValidationRulesTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTenantSearchRouteHandler: RouteHandler<
  typeof postApiTenantSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTenantTenantIdRouteHandler: RouteHandler<
  typeof postApiTenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTenantTenantIdRouteHandler: RouteHandler<
  typeof deleteApiTenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTenantTenantIdRouteHandler: RouteHandler<
  typeof patchApiTenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTenantTenantIdRouteHandler: RouteHandler<
  typeof getApiTenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTenantTenantIdRouteHandler: RouteHandler<
  typeof putApiTenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiThemeRouteHandler: RouteHandler<typeof postApiThemeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiThemeRouteHandler: RouteHandler<typeof getApiThemeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiThemeSearchRouteHandler: RouteHandler<typeof postApiThemeSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiThemeThemeIdRouteHandler: RouteHandler<
  typeof postApiThemeThemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiThemeThemeIdRouteHandler: RouteHandler<
  typeof deleteApiThemeThemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiThemeThemeIdRouteHandler: RouteHandler<
  typeof patchApiThemeThemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiThemeThemeIdRouteHandler: RouteHandler<typeof getApiThemeThemeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiThemeThemeIdRouteHandler: RouteHandler<typeof putApiThemeThemeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiTwoFactorLoginRouteHandler: RouteHandler<
  typeof postApiTwoFactorLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTwoFactorSecretRouteHandler: RouteHandler<
  typeof getApiTwoFactorSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTwoFactorSendRouteHandler: RouteHandler<
  typeof postApiTwoFactorSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTwoFactorSendTwoFactorIdRouteHandler: RouteHandler<
  typeof postApiTwoFactorSendTwoFactorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTwoFactorStartRouteHandler: RouteHandler<
  typeof postApiTwoFactorStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTwoFactorStatusRouteHandler: RouteHandler<
  typeof postApiTwoFactorStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTwoFactorStatusTwoFactorTrustIdRouteHandler: RouteHandler<
  typeof getApiTwoFactorStatusTwoFactorTrustIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserRouteHandler: RouteHandler<typeof postApiUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserRouteHandler: RouteHandler<typeof getApiUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserActionRouteHandler: RouteHandler<typeof postApiUserActionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserActionRouteHandler: RouteHandler<typeof getApiUserActionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiUserActionReasonRouteHandler: RouteHandler<
  typeof postApiUserActionReasonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserActionReasonRouteHandler: RouteHandler<
  typeof getApiUserActionReasonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserActionReasonUserActionReasonIdRouteHandler: RouteHandler<
  typeof postApiUserActionReasonUserActionReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUserActionReasonUserActionReasonIdRouteHandler: RouteHandler<
  typeof deleteApiUserActionReasonUserActionReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiUserActionReasonUserActionReasonIdRouteHandler: RouteHandler<
  typeof patchApiUserActionReasonUserActionReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserActionReasonUserActionReasonIdRouteHandler: RouteHandler<
  typeof getApiUserActionReasonUserActionReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserActionReasonUserActionReasonIdRouteHandler: RouteHandler<
  typeof putApiUserActionReasonUserActionReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserActionUserActionIdRouteHandler: RouteHandler<
  typeof postApiUserActionUserActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUserActionUserActionIdRouteHandler: RouteHandler<
  typeof deleteApiUserActionUserActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiUserActionUserActionIdRouteHandler: RouteHandler<
  typeof patchApiUserActionUserActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserActionUserActionIdRouteHandler: RouteHandler<
  typeof putApiUserActionUserActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserActionUserActionIdRouteHandler: RouteHandler<
  typeof getApiUserActionUserActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserAction2RouteHandler: RouteHandler<typeof postApiUserAction2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserAction2RouteHandler: RouteHandler<typeof getApiUserAction2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiUserActionActionIdRouteHandler: RouteHandler<
  typeof deleteApiUserActionActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserActionActionIdRouteHandler: RouteHandler<
  typeof putApiUserActionActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserActionActionIdRouteHandler: RouteHandler<
  typeof getApiUserActionActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUserBulkRouteHandler: RouteHandler<typeof deleteApiUserBulkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiUserChangePasswordRouteHandler: RouteHandler<
  typeof postApiUserChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserChangePasswordRouteHandler: RouteHandler<
  typeof getApiUserChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserChangePasswordChangePasswordIdRouteHandler: RouteHandler<
  typeof postApiUserChangePasswordChangePasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserChangePasswordChangePasswordIdRouteHandler: RouteHandler<
  typeof getApiUserChangePasswordChangePasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserCommentRouteHandler: RouteHandler<typeof postApiUserCommentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiUserCommentSearchRouteHandler: RouteHandler<
  typeof postApiUserCommentSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserCommentUserIdRouteHandler: RouteHandler<
  typeof getApiUserCommentUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserConsentRouteHandler: RouteHandler<typeof postApiUserConsentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserConsentRouteHandler: RouteHandler<typeof getApiUserConsentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiUserConsentUserConsentIdRouteHandler: RouteHandler<
  typeof postApiUserConsentUserConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiUserConsentUserConsentIdRouteHandler: RouteHandler<
  typeof patchApiUserConsentUserConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserConsentUserConsentIdRouteHandler: RouteHandler<
  typeof getApiUserConsentUserConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUserConsentUserConsentIdRouteHandler: RouteHandler<
  typeof deleteApiUserConsentUserConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserConsentUserConsentIdRouteHandler: RouteHandler<
  typeof putApiUserConsentUserConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserFamilyRouteHandler: RouteHandler<typeof postApiUserFamilyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserFamilyRouteHandler: RouteHandler<typeof getApiUserFamilyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserFamilyPendingRouteHandler: RouteHandler<
  typeof getApiUserFamilyPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserFamilyRequestRouteHandler: RouteHandler<
  typeof postApiUserFamilyRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserFamilyFamilyIdRouteHandler: RouteHandler<
  typeof putApiUserFamilyFamilyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserFamilyFamilyIdRouteHandler: RouteHandler<
  typeof postApiUserFamilyFamilyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserFamilyFamilyIdRouteHandler: RouteHandler<
  typeof getApiUserFamilyFamilyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUserFamilyFamilyIdUserIdRouteHandler: RouteHandler<
  typeof deleteApiUserFamilyFamilyIdUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserForgotPasswordRouteHandler: RouteHandler<
  typeof postApiUserForgotPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserImportRouteHandler: RouteHandler<typeof postApiUserImportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserRecentLoginRouteHandler: RouteHandler<
  typeof getApiUserRecentLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserRefreshTokenImportRouteHandler: RouteHandler<
  typeof postApiUserRefreshTokenImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserRegistrationRouteHandler: RouteHandler<
  typeof postApiUserRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiUserRegistrationUserIdRouteHandler: RouteHandler<
  typeof patchApiUserRegistrationUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserRegistrationUserIdRouteHandler: RouteHandler<
  typeof postApiUserRegistrationUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserRegistrationUserIdRouteHandler: RouteHandler<
  typeof putApiUserRegistrationUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUserRegistrationUserIdApplicationIdRouteHandler: RouteHandler<
  typeof deleteApiUserRegistrationUserIdApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserRegistrationUserIdApplicationIdRouteHandler: RouteHandler<
  typeof getApiUserRegistrationUserIdApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserSearchRouteHandler: RouteHandler<typeof getApiUserSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiUserSearchRouteHandler: RouteHandler<typeof postApiUserSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiUserSearchRouteHandler: RouteHandler<typeof putApiUserSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiUserTwoFactorRecoveryCodeUserIdRouteHandler: RouteHandler<
  typeof postApiUserTwoFactorRecoveryCodeUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserTwoFactorRecoveryCodeUserIdRouteHandler: RouteHandler<
  typeof getApiUserTwoFactorRecoveryCodeUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUserTwoFactorUserIdRouteHandler: RouteHandler<
  typeof deleteApiUserTwoFactorUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserTwoFactorUserIdRouteHandler: RouteHandler<
  typeof postApiUserTwoFactorUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserTwoFactorUserIdRouteHandler: RouteHandler<
  typeof putApiUserTwoFactorUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserVerifyEmailRouteHandler: RouteHandler<
  typeof putApiUserVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserVerifyEmailRouteHandler: RouteHandler<
  typeof postApiUserVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserVerifyRegistrationRouteHandler: RouteHandler<
  typeof putApiUserVerifyRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserVerifyRegistrationRouteHandler: RouteHandler<
  typeof postApiUserVerifyRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUserUserIdRouteHandler: RouteHandler<typeof postApiUserUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiUserUserIdRouteHandler: RouteHandler<
  typeof deleteApiUserUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiUserUserIdRouteHandler: RouteHandler<typeof patchApiUserUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiUserUserIdRouteHandler: RouteHandler<typeof putApiUserUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserUserIdRouteHandler: RouteHandler<typeof getApiUserUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiWebauthnRouteHandler: RouteHandler<typeof deleteApiWebauthnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiWebauthnRouteHandler: RouteHandler<typeof getApiWebauthnRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebauthnAssertRouteHandler: RouteHandler<
  typeof postApiWebauthnAssertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebauthnImportRouteHandler: RouteHandler<
  typeof postApiWebauthnImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebauthnLoginRouteHandler: RouteHandler<
  typeof postApiWebauthnLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebauthnRegisterCompleteRouteHandler: RouteHandler<
  typeof postApiWebauthnRegisterCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebauthnRegisterStartRouteHandler: RouteHandler<
  typeof postApiWebauthnRegisterStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebauthnStartRouteHandler: RouteHandler<
  typeof postApiWebauthnStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiWebauthnIdRouteHandler: RouteHandler<
  typeof deleteApiWebauthnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebauthnIdRouteHandler: RouteHandler<typeof getApiWebauthnIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiWebhookRouteHandler: RouteHandler<typeof postApiWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhookRouteHandler: RouteHandler<typeof getApiWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebhookSearchRouteHandler: RouteHandler<
  typeof postApiWebhookSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhookSearchRouteHandler: RouteHandler<
  typeof getApiWebhookSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebhookWebhookIdRouteHandler: RouteHandler<
  typeof postApiWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiWebhookWebhookIdRouteHandler: RouteHandler<
  typeof deleteApiWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiWebhookWebhookIdRouteHandler: RouteHandler<
  typeof patchApiWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhookWebhookIdRouteHandler: RouteHandler<
  typeof getApiWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiWebhookWebhookIdRouteHandler: RouteHandler<
  typeof putApiWebhookWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
