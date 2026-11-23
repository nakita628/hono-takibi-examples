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
  getOauth2DeviceValidateRoute,
  getOauth2UserinfoRoute,
  getWellKnownJwksJsonRoute,
  getWellKnownOpenidConfigurationRoute,
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
  postOauth2DeviceApproveRoute,
  postOauth2DeviceAuthorizeRoute,
  postOauth2DeviceUserCodeRoute,
  postOauth2IntrospectRoute,
  postOauth2TokenRoute,
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
} from './routes'
import {
  deleteApiApiKeyKeyIdRouteHandler,
  deleteApiApplicationApplicationIdRoleRoleIdRouteHandler,
  deleteApiApplicationApplicationIdRouteHandler,
  deleteApiApplicationApplicationIdScopeScopeIdRouteHandler,
  deleteApiCimdDomainDomainIdRouteHandler,
  deleteApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  deleteApiCimdRegistrationRegistrationIdRouteHandler,
  deleteApiConnectorConnectorIdRouteHandler,
  deleteApiConsentConsentIdRouteHandler,
  deleteApiEmailTemplateEmailTemplateIdRouteHandler,
  deleteApiEntityEntityIdGrantRouteHandler,
  deleteApiEntityEntityIdRouteHandler,
  deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  deleteApiEntityTypeEntityTypeIdRouteHandler,
  deleteApiFormFieldFieldIdRouteHandler,
  deleteApiFormFormIdRouteHandler,
  deleteApiGroupGroupIdRouteHandler,
  deleteApiGroupMemberRouteHandler,
  deleteApiIdentityProviderIdentityProviderIdRouteHandler,
  deleteApiIdentityProviderLinkRouteHandler,
  deleteApiIpAclIpAccessControlListIdRouteHandler,
  deleteApiJwtRefreshRouteHandler,
  deleteApiJwtRefreshTokenIdRouteHandler,
  deleteApiKeyKeyIdRouteHandler,
  deleteApiLambdaLambdaIdRouteHandler,
  deleteApiMessageTemplateMessageTemplateIdRouteHandler,
  deleteApiMessengerMessengerIdRouteHandler,
  deleteApiReactorRouteHandler,
  deleteApiTenantManagerIdentityProviderTypeRouteHandler,
  deleteApiTenantTenantIdRouteHandler,
  deleteApiThemeThemeIdRouteHandler,
  deleteApiUserActionActionIdRouteHandler,
  deleteApiUserActionReasonUserActionReasonIdRouteHandler,
  deleteApiUserActionUserActionIdRouteHandler,
  deleteApiUserBulkRouteHandler,
  deleteApiUserConsentUserConsentIdRouteHandler,
  deleteApiUserFamilyFamilyIdUserIdRouteHandler,
  deleteApiUserRegistrationUserIdApplicationIdRouteHandler,
  deleteApiUserTwoFactorUserIdRouteHandler,
  deleteApiUserUserIdRouteHandler,
  deleteApiWebauthnIdRouteHandler,
  deleteApiWebauthnRouteHandler,
  deleteApiWebhookWebhookIdRouteHandler,
  getApiApiKeyKeyIdRouteHandler,
  getApiApplicationApplicationIdOauthConfigurationRouteHandler,
  getApiApplicationApplicationIdRouteHandler,
  getApiApplicationApplicationIdScopeScopeIdRouteHandler,
  getApiApplicationRouteHandler,
  getApiCimdDomainDomainIdRouteHandler,
  getApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  getApiCimdDomainRouteHandler,
  getApiCimdRegistrationRegistrationIdRouteHandler,
  getApiConnectorConnectorIdRouteHandler,
  getApiConnectorRouteHandler,
  getApiConsentConsentIdRouteHandler,
  getApiConsentRouteHandler,
  getApiConsentSearchRouteHandler,
  getApiEmailTemplateEmailTemplateIdRouteHandler,
  getApiEmailTemplateRouteHandler,
  getApiEntityEntityIdGrantRouteHandler,
  getApiEntityEntityIdRouteHandler,
  getApiEntityGrantSearchRouteHandler,
  getApiEntitySearchRouteHandler,
  getApiEntityTypeEntityTypeIdRouteHandler,
  getApiEntityTypeRouteHandler,
  getApiEntityTypeSearchRouteHandler,
  getApiFormFieldFieldIdRouteHandler,
  getApiFormFieldRouteHandler,
  getApiFormFormIdRouteHandler,
  getApiFormRouteHandler,
  getApiGroupGroupIdRouteHandler,
  getApiGroupRouteHandler,
  getApiHealthRouteHandler,
  getApiIdentityProviderIdentityProviderIdRouteHandler,
  getApiIdentityProviderLinkPendingPendingLinkIdRouteHandler,
  getApiIdentityProviderLinkRouteHandler,
  getApiIdentityProviderLookupRouteHandler,
  getApiIdentityProviderRouteHandler,
  getApiIdentityProviderSearchRouteHandler,
  getApiIdentityProviderTestRouteHandler,
  getApiIntegrationRouteHandler,
  getApiIpAclIpAccessControlListIdRouteHandler,
  getApiIpAclSearchRouteHandler,
  getApiJwtIssueRouteHandler,
  getApiJwtPublicKeyRouteHandler,
  getApiJwtRefreshRouteHandler,
  getApiJwtRefreshTokenIdRouteHandler,
  getApiJwtValidateRouteHandler,
  getApiKeyKeyIdRouteHandler,
  getApiKeyRouteHandler,
  getApiKeySearchRouteHandler,
  getApiLambdaLambdaIdRouteHandler,
  getApiLambdaRouteHandler,
  getApiMessageTemplateMessageTemplateIdRouteHandler,
  getApiMessageTemplateRouteHandler,
  getApiMessengerMessengerIdRouteHandler,
  getApiMessengerRouteHandler,
  getApiReactorMetricsRouteHandler,
  getApiReactorRouteHandler,
  getApiReportDailyActiveUserRouteHandler,
  getApiReportLoginRouteHandler,
  getApiReportMonthlyActiveUserRouteHandler,
  getApiReportRegistrationRouteHandler,
  getApiReportTotalsRouteHandler,
  getApiStatusRouteHandler,
  getApiSystemAuditLogAuditLogIdRouteHandler,
  getApiSystemConfigurationRouteHandler,
  getApiSystemEventLogEventLogIdRouteHandler,
  getApiSystemReindexRouteHandler,
  getApiSystemVersionRouteHandler,
  getApiSystemWebhookAttemptLogWebhookAttemptLogIdRouteHandler,
  getApiSystemWebhookEventLogWebhookEventLogIdRouteHandler,
  getApiTenantManagerRouteHandler,
  getApiTenantPasswordValidationRulesRouteHandler,
  getApiTenantPasswordValidationRulesTenantIdRouteHandler,
  getApiTenantRouteHandler,
  getApiTenantTenantIdRouteHandler,
  getApiThemeRouteHandler,
  getApiThemeThemeIdRouteHandler,
  getApiTwoFactorSecretRouteHandler,
  getApiTwoFactorStatusTwoFactorTrustIdRouteHandler,
  getApiUserAction2RouteHandler,
  getApiUserActionActionIdRouteHandler,
  getApiUserActionReasonRouteHandler,
  getApiUserActionReasonUserActionReasonIdRouteHandler,
  getApiUserActionRouteHandler,
  getApiUserActionUserActionIdRouteHandler,
  getApiUserChangePasswordChangePasswordIdRouteHandler,
  getApiUserChangePasswordRouteHandler,
  getApiUserCommentUserIdRouteHandler,
  getApiUserConsentRouteHandler,
  getApiUserConsentUserConsentIdRouteHandler,
  getApiUserFamilyFamilyIdRouteHandler,
  getApiUserFamilyPendingRouteHandler,
  getApiUserFamilyRouteHandler,
  getApiUserRecentLoginRouteHandler,
  getApiUserRegistrationUserIdApplicationIdRouteHandler,
  getApiUserRouteHandler,
  getApiUserSearchRouteHandler,
  getApiUserTwoFactorRecoveryCodeUserIdRouteHandler,
  getApiUserUserIdRouteHandler,
  getApiWebauthnIdRouteHandler,
  getApiWebauthnRouteHandler,
  getApiWebhookRouteHandler,
  getApiWebhookSearchRouteHandler,
  getApiWebhookWebhookIdRouteHandler,
  getOauth2DeviceValidateRouteHandler,
  getOauth2UserinfoRouteHandler,
  getWellKnownJwksJsonRouteHandler,
  getWellKnownOpenidConfigurationRouteHandler,
  patchApiApiKeyKeyIdRouteHandler,
  patchApiApplicationApplicationIdRoleRoleIdRouteHandler,
  patchApiApplicationApplicationIdRouteHandler,
  patchApiApplicationApplicationIdScopeScopeIdRouteHandler,
  patchApiCimdDomainDomainIdRouteHandler,
  patchApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  patchApiConnectorConnectorIdRouteHandler,
  patchApiConsentConsentIdRouteHandler,
  patchApiEmailTemplateEmailTemplateIdRouteHandler,
  patchApiEntityEntityIdRouteHandler,
  patchApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  patchApiEntityTypeEntityTypeIdRouteHandler,
  patchApiFormFieldFieldIdRouteHandler,
  patchApiFormFormIdRouteHandler,
  patchApiGroupGroupIdRouteHandler,
  patchApiIdentityProviderIdentityProviderIdRouteHandler,
  patchApiIntegrationRouteHandler,
  patchApiIpAclAccessControlListIdRouteHandler,
  patchApiLambdaLambdaIdRouteHandler,
  patchApiMessageTemplateMessageTemplateIdRouteHandler,
  patchApiMessengerMessengerIdRouteHandler,
  patchApiSystemConfigurationRouteHandler,
  patchApiTenantManagerIdentityProviderTypeRouteHandler,
  patchApiTenantManagerRouteHandler,
  patchApiTenantTenantIdRouteHandler,
  patchApiThemeThemeIdRouteHandler,
  patchApiUserActionReasonUserActionReasonIdRouteHandler,
  patchApiUserActionUserActionIdRouteHandler,
  patchApiUserConsentUserConsentIdRouteHandler,
  patchApiUserRegistrationUserIdRouteHandler,
  patchApiUserUserIdRouteHandler,
  patchApiWebhookWebhookIdRouteHandler,
  postApiApiKeyKeyIdRouteHandler,
  postApiApiKeyRouteHandler,
  postApiApplicationApplicationIdRoleRoleIdRouteHandler,
  postApiApplicationApplicationIdRoleRouteHandler,
  postApiApplicationApplicationIdRouteHandler,
  postApiApplicationApplicationIdScopeRouteHandler,
  postApiApplicationApplicationIdScopeScopeIdRouteHandler,
  postApiApplicationRouteHandler,
  postApiApplicationSearchRouteHandler,
  postApiCimdDomainDomainIdRouteHandler,
  postApiCimdDomainDomainIdScopeRouteHandler,
  postApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  postApiCimdDomainRouteHandler,
  postApiCimdDomainSearchRouteHandler,
  postApiCimdRegistrationSearchRouteHandler,
  postApiConnectorConnectorIdRouteHandler,
  postApiConnectorRouteHandler,
  postApiConsentConsentIdRouteHandler,
  postApiConsentRouteHandler,
  postApiConsentSearchRouteHandler,
  postApiEmailSendEmailTemplateIdRouteHandler,
  postApiEmailTemplateEmailTemplateIdRouteHandler,
  postApiEmailTemplatePreviewRouteHandler,
  postApiEmailTemplateRouteHandler,
  postApiEmailTemplateSearchRouteHandler,
  postApiEntityEntityIdGrantRouteHandler,
  postApiEntityEntityIdRouteHandler,
  postApiEntityGrantSearchRouteHandler,
  postApiEntityRouteHandler,
  postApiEntitySearchRouteHandler,
  postApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  postApiEntityTypeEntityTypeIdPermissionRouteHandler,
  postApiEntityTypeEntityTypeIdRouteHandler,
  postApiEntityTypeRouteHandler,
  postApiEntityTypeSearchRouteHandler,
  postApiFormFieldFieldIdRouteHandler,
  postApiFormFieldRouteHandler,
  postApiFormFormIdRouteHandler,
  postApiFormRouteHandler,
  postApiGroupGroupIdRouteHandler,
  postApiGroupMemberRouteHandler,
  postApiGroupMemberSearchRouteHandler,
  postApiGroupRouteHandler,
  postApiGroupSearchRouteHandler,
  postApiIdentityProviderIdentityProviderIdRouteHandler,
  postApiIdentityProviderLinkRouteHandler,
  postApiIdentityProviderLoginRouteHandler,
  postApiIdentityProviderRouteHandler,
  postApiIdentityProviderSearchRouteHandler,
  postApiIdentityProviderStartRouteHandler,
  postApiIdentityProviderTestRouteHandler,
  postApiIdentityVerifyCompleteRouteHandler,
  postApiIdentityVerifyRouteHandler,
  postApiIdentityVerifySendRouteHandler,
  postApiIdentityVerifyStartRouteHandler,
  postApiIpAclAccessControlListIdRouteHandler,
  postApiIpAclRouteHandler,
  postApiIpAclSearchRouteHandler,
  postApiJwtReconcileRouteHandler,
  postApiJwtRefreshRouteHandler,
  postApiJwtVendRouteHandler,
  postApiKeyGenerateKeyIdRouteHandler,
  postApiKeyGenerateRouteHandler,
  postApiKeyImportKeyIdRouteHandler,
  postApiKeyImportRouteHandler,
  postApiKeySearchRouteHandler,
  postApiLambdaLambdaIdRouteHandler,
  postApiLambdaRouteHandler,
  postApiLambdaSearchRouteHandler,
  postApiLoginRouteHandler,
  postApiLogoutRouteHandler,
  postApiMessageTemplateMessageTemplateIdRouteHandler,
  postApiMessageTemplatePreviewRouteHandler,
  postApiMessageTemplateRouteHandler,
  postApiMessengerMessengerIdRouteHandler,
  postApiMessengerRouteHandler,
  postApiPasswordlessLoginRouteHandler,
  postApiPasswordlessSendRouteHandler,
  postApiPasswordlessStartRouteHandler,
  postApiReactorRouteHandler,
  postApiSystemAuditLogRouteHandler,
  postApiSystemAuditLogSearchRouteHandler,
  postApiSystemEventLogSearchRouteHandler,
  postApiSystemLoginRecordSearchRouteHandler,
  postApiSystemReindexRouteHandler,
  postApiSystemWebhookEventLogSearchRouteHandler,
  postApiTenantManagerIdentityProviderTypeRouteHandler,
  postApiTenantRouteHandler,
  postApiTenantSearchRouteHandler,
  postApiTenantTenantIdRouteHandler,
  postApiThemeRouteHandler,
  postApiThemeSearchRouteHandler,
  postApiThemeThemeIdRouteHandler,
  postApiTwoFactorLoginRouteHandler,
  postApiTwoFactorSendRouteHandler,
  postApiTwoFactorSendTwoFactorIdRouteHandler,
  postApiTwoFactorStartRouteHandler,
  postApiTwoFactorStatusRouteHandler,
  postApiUserAction2RouteHandler,
  postApiUserActionReasonRouteHandler,
  postApiUserActionReasonUserActionReasonIdRouteHandler,
  postApiUserActionRouteHandler,
  postApiUserActionUserActionIdRouteHandler,
  postApiUserChangePasswordChangePasswordIdRouteHandler,
  postApiUserChangePasswordRouteHandler,
  postApiUserCommentRouteHandler,
  postApiUserCommentSearchRouteHandler,
  postApiUserConsentRouteHandler,
  postApiUserConsentUserConsentIdRouteHandler,
  postApiUserFamilyFamilyIdRouteHandler,
  postApiUserFamilyRequestRouteHandler,
  postApiUserFamilyRouteHandler,
  postApiUserForgotPasswordRouteHandler,
  postApiUserImportRouteHandler,
  postApiUserRefreshTokenImportRouteHandler,
  postApiUserRegistrationRouteHandler,
  postApiUserRegistrationUserIdRouteHandler,
  postApiUserRouteHandler,
  postApiUserSearchRouteHandler,
  postApiUserTwoFactorRecoveryCodeUserIdRouteHandler,
  postApiUserTwoFactorUserIdRouteHandler,
  postApiUserUserIdRouteHandler,
  postApiUserVerifyEmailRouteHandler,
  postApiUserVerifyRegistrationRouteHandler,
  postApiWebauthnAssertRouteHandler,
  postApiWebauthnImportRouteHandler,
  postApiWebauthnLoginRouteHandler,
  postApiWebauthnRegisterCompleteRouteHandler,
  postApiWebauthnRegisterStartRouteHandler,
  postApiWebauthnStartRouteHandler,
  postApiWebhookRouteHandler,
  postApiWebhookSearchRouteHandler,
  postApiWebhookWebhookIdRouteHandler,
  postOauth2DeviceApproveRouteHandler,
  postOauth2DeviceAuthorizeRouteHandler,
  postOauth2DeviceUserCodeRouteHandler,
  postOauth2IntrospectRouteHandler,
  postOauth2TokenRouteHandler,
  putApiApiKeyKeyIdRouteHandler,
  putApiApplicationApplicationIdRoleRoleIdRouteHandler,
  putApiApplicationApplicationIdRouteHandler,
  putApiApplicationApplicationIdScopeScopeIdRouteHandler,
  putApiCimdDomainDomainIdRouteHandler,
  putApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  putApiConnectorConnectorIdRouteHandler,
  putApiConsentConsentIdRouteHandler,
  putApiEmailTemplateEmailTemplateIdRouteHandler,
  putApiEntityEntityIdRouteHandler,
  putApiEntitySearchRouteHandler,
  putApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  putApiEntityTypeEntityTypeIdRouteHandler,
  putApiFormFieldFieldIdRouteHandler,
  putApiFormFormIdRouteHandler,
  putApiGroupGroupIdRouteHandler,
  putApiGroupMemberRouteHandler,
  putApiIdentityProviderIdentityProviderIdRouteHandler,
  putApiIntegrationRouteHandler,
  putApiIpAclAccessControlListIdRouteHandler,
  putApiKeyKeyIdRouteHandler,
  putApiLambdaLambdaIdRouteHandler,
  putApiLoginRouteHandler,
  putApiLoginUserIdApplicationIdRouteHandler,
  putApiMessageTemplateMessageTemplateIdRouteHandler,
  putApiMessengerMessengerIdRouteHandler,
  putApiReactorRouteHandler,
  putApiSystemConfigurationRouteHandler,
  putApiTenantManagerIdentityProviderTypeRouteHandler,
  putApiTenantManagerRouteHandler,
  putApiTenantTenantIdRouteHandler,
  putApiThemeThemeIdRouteHandler,
  putApiUserActionActionIdRouteHandler,
  putApiUserActionReasonUserActionReasonIdRouteHandler,
  putApiUserActionUserActionIdRouteHandler,
  putApiUserConsentUserConsentIdRouteHandler,
  putApiUserFamilyFamilyIdRouteHandler,
  putApiUserRegistrationUserIdRouteHandler,
  putApiUserSearchRouteHandler,
  putApiUserTwoFactorUserIdRouteHandler,
  putApiUserUserIdRouteHandler,
  putApiUserVerifyEmailRouteHandler,
  putApiUserVerifyRegistrationRouteHandler,
  putApiWebhookWebhookIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWellKnownJwksJsonRoute, getWellKnownJwksJsonRouteHandler)
  .openapi(getWellKnownOpenidConfigurationRoute, getWellKnownOpenidConfigurationRouteHandler)
  .openapi(postApiApiKeyRoute, postApiApiKeyRouteHandler)
  .openapi(postApiApiKeyKeyIdRoute, postApiApiKeyKeyIdRouteHandler)
  .openapi(deleteApiApiKeyKeyIdRoute, deleteApiApiKeyKeyIdRouteHandler)
  .openapi(patchApiApiKeyKeyIdRoute, patchApiApiKeyKeyIdRouteHandler)
  .openapi(getApiApiKeyKeyIdRoute, getApiApiKeyKeyIdRouteHandler)
  .openapi(putApiApiKeyKeyIdRoute, putApiApiKeyKeyIdRouteHandler)
  .openapi(postApiApplicationRoute, postApiApplicationRouteHandler)
  .openapi(getApiApplicationRoute, getApiApplicationRouteHandler)
  .openapi(postApiApplicationSearchRoute, postApiApplicationSearchRouteHandler)
  .openapi(postApiApplicationApplicationIdRoute, postApiApplicationApplicationIdRouteHandler)
  .openapi(deleteApiApplicationApplicationIdRoute, deleteApiApplicationApplicationIdRouteHandler)
  .openapi(patchApiApplicationApplicationIdRoute, patchApiApplicationApplicationIdRouteHandler)
  .openapi(putApiApplicationApplicationIdRoute, putApiApplicationApplicationIdRouteHandler)
  .openapi(getApiApplicationApplicationIdRoute, getApiApplicationApplicationIdRouteHandler)
  .openapi(
    getApiApplicationApplicationIdOauthConfigurationRoute,
    getApiApplicationApplicationIdOauthConfigurationRouteHandler,
  )
  .openapi(
    postApiApplicationApplicationIdRoleRoute,
    postApiApplicationApplicationIdRoleRouteHandler,
  )
  .openapi(
    postApiApplicationApplicationIdRoleRoleIdRoute,
    postApiApplicationApplicationIdRoleRoleIdRouteHandler,
  )
  .openapi(
    deleteApiApplicationApplicationIdRoleRoleIdRoute,
    deleteApiApplicationApplicationIdRoleRoleIdRouteHandler,
  )
  .openapi(
    patchApiApplicationApplicationIdRoleRoleIdRoute,
    patchApiApplicationApplicationIdRoleRoleIdRouteHandler,
  )
  .openapi(
    putApiApplicationApplicationIdRoleRoleIdRoute,
    putApiApplicationApplicationIdRoleRoleIdRouteHandler,
  )
  .openapi(
    postApiApplicationApplicationIdScopeRoute,
    postApiApplicationApplicationIdScopeRouteHandler,
  )
  .openapi(
    postApiApplicationApplicationIdScopeScopeIdRoute,
    postApiApplicationApplicationIdScopeScopeIdRouteHandler,
  )
  .openapi(
    deleteApiApplicationApplicationIdScopeScopeIdRoute,
    deleteApiApplicationApplicationIdScopeScopeIdRouteHandler,
  )
  .openapi(
    patchApiApplicationApplicationIdScopeScopeIdRoute,
    patchApiApplicationApplicationIdScopeScopeIdRouteHandler,
  )
  .openapi(
    getApiApplicationApplicationIdScopeScopeIdRoute,
    getApiApplicationApplicationIdScopeScopeIdRouteHandler,
  )
  .openapi(
    putApiApplicationApplicationIdScopeScopeIdRoute,
    putApiApplicationApplicationIdScopeScopeIdRouteHandler,
  )
  .openapi(postApiCimdDomainRoute, postApiCimdDomainRouteHandler)
  .openapi(getApiCimdDomainRoute, getApiCimdDomainRouteHandler)
  .openapi(postApiCimdDomainSearchRoute, postApiCimdDomainSearchRouteHandler)
  .openapi(postApiCimdDomainDomainIdRoute, postApiCimdDomainDomainIdRouteHandler)
  .openapi(deleteApiCimdDomainDomainIdRoute, deleteApiCimdDomainDomainIdRouteHandler)
  .openapi(patchApiCimdDomainDomainIdRoute, patchApiCimdDomainDomainIdRouteHandler)
  .openapi(getApiCimdDomainDomainIdRoute, getApiCimdDomainDomainIdRouteHandler)
  .openapi(putApiCimdDomainDomainIdRoute, putApiCimdDomainDomainIdRouteHandler)
  .openapi(postApiCimdDomainDomainIdScopeRoute, postApiCimdDomainDomainIdScopeRouteHandler)
  .openapi(
    postApiCimdDomainDomainIdScopeScopeIdRoute,
    postApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  )
  .openapi(
    deleteApiCimdDomainDomainIdScopeScopeIdRoute,
    deleteApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  )
  .openapi(
    patchApiCimdDomainDomainIdScopeScopeIdRoute,
    patchApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  )
  .openapi(
    getApiCimdDomainDomainIdScopeScopeIdRoute,
    getApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  )
  .openapi(
    putApiCimdDomainDomainIdScopeScopeIdRoute,
    putApiCimdDomainDomainIdScopeScopeIdRouteHandler,
  )
  .openapi(postApiCimdRegistrationSearchRoute, postApiCimdRegistrationSearchRouteHandler)
  .openapi(
    deleteApiCimdRegistrationRegistrationIdRoute,
    deleteApiCimdRegistrationRegistrationIdRouteHandler,
  )
  .openapi(
    getApiCimdRegistrationRegistrationIdRoute,
    getApiCimdRegistrationRegistrationIdRouteHandler,
  )
  .openapi(postApiConnectorRoute, postApiConnectorRouteHandler)
  .openapi(getApiConnectorRoute, getApiConnectorRouteHandler)
  .openapi(postApiConnectorConnectorIdRoute, postApiConnectorConnectorIdRouteHandler)
  .openapi(deleteApiConnectorConnectorIdRoute, deleteApiConnectorConnectorIdRouteHandler)
  .openapi(patchApiConnectorConnectorIdRoute, patchApiConnectorConnectorIdRouteHandler)
  .openapi(getApiConnectorConnectorIdRoute, getApiConnectorConnectorIdRouteHandler)
  .openapi(putApiConnectorConnectorIdRoute, putApiConnectorConnectorIdRouteHandler)
  .openapi(postApiConsentRoute, postApiConsentRouteHandler)
  .openapi(getApiConsentRoute, getApiConsentRouteHandler)
  .openapi(postApiConsentSearchRoute, postApiConsentSearchRouteHandler)
  .openapi(getApiConsentSearchRoute, getApiConsentSearchRouteHandler)
  .openapi(postApiConsentConsentIdRoute, postApiConsentConsentIdRouteHandler)
  .openapi(deleteApiConsentConsentIdRoute, deleteApiConsentConsentIdRouteHandler)
  .openapi(patchApiConsentConsentIdRoute, patchApiConsentConsentIdRouteHandler)
  .openapi(getApiConsentConsentIdRoute, getApiConsentConsentIdRouteHandler)
  .openapi(putApiConsentConsentIdRoute, putApiConsentConsentIdRouteHandler)
  .openapi(postApiEmailSendEmailTemplateIdRoute, postApiEmailSendEmailTemplateIdRouteHandler)
  .openapi(postApiEmailTemplateRoute, postApiEmailTemplateRouteHandler)
  .openapi(getApiEmailTemplateRoute, getApiEmailTemplateRouteHandler)
  .openapi(postApiEmailTemplatePreviewRoute, postApiEmailTemplatePreviewRouteHandler)
  .openapi(postApiEmailTemplateSearchRoute, postApiEmailTemplateSearchRouteHandler)
  .openapi(
    postApiEmailTemplateEmailTemplateIdRoute,
    postApiEmailTemplateEmailTemplateIdRouteHandler,
  )
  .openapi(
    deleteApiEmailTemplateEmailTemplateIdRoute,
    deleteApiEmailTemplateEmailTemplateIdRouteHandler,
  )
  .openapi(
    patchApiEmailTemplateEmailTemplateIdRoute,
    patchApiEmailTemplateEmailTemplateIdRouteHandler,
  )
  .openapi(getApiEmailTemplateEmailTemplateIdRoute, getApiEmailTemplateEmailTemplateIdRouteHandler)
  .openapi(putApiEmailTemplateEmailTemplateIdRoute, putApiEmailTemplateEmailTemplateIdRouteHandler)
  .openapi(postApiEntityRoute, postApiEntityRouteHandler)
  .openapi(postApiEntityGrantSearchRoute, postApiEntityGrantSearchRouteHandler)
  .openapi(getApiEntityGrantSearchRoute, getApiEntityGrantSearchRouteHandler)
  .openapi(postApiEntitySearchRoute, postApiEntitySearchRouteHandler)
  .openapi(getApiEntitySearchRoute, getApiEntitySearchRouteHandler)
  .openapi(putApiEntitySearchRoute, putApiEntitySearchRouteHandler)
  .openapi(postApiEntityTypeRoute, postApiEntityTypeRouteHandler)
  .openapi(getApiEntityTypeRoute, getApiEntityTypeRouteHandler)
  .openapi(postApiEntityTypeSearchRoute, postApiEntityTypeSearchRouteHandler)
  .openapi(getApiEntityTypeSearchRoute, getApiEntityTypeSearchRouteHandler)
  .openapi(postApiEntityTypeEntityTypeIdRoute, postApiEntityTypeEntityTypeIdRouteHandler)
  .openapi(deleteApiEntityTypeEntityTypeIdRoute, deleteApiEntityTypeEntityTypeIdRouteHandler)
  .openapi(patchApiEntityTypeEntityTypeIdRoute, patchApiEntityTypeEntityTypeIdRouteHandler)
  .openapi(getApiEntityTypeEntityTypeIdRoute, getApiEntityTypeEntityTypeIdRouteHandler)
  .openapi(putApiEntityTypeEntityTypeIdRoute, putApiEntityTypeEntityTypeIdRouteHandler)
  .openapi(
    postApiEntityTypeEntityTypeIdPermissionRoute,
    postApiEntityTypeEntityTypeIdPermissionRouteHandler,
  )
  .openapi(
    postApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
    postApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  )
  .openapi(
    deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
    deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  )
  .openapi(
    patchApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
    patchApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  )
  .openapi(
    putApiEntityTypeEntityTypeIdPermissionPermissionIdRoute,
    putApiEntityTypeEntityTypeIdPermissionPermissionIdRouteHandler,
  )
  .openapi(postApiEntityEntityIdRoute, postApiEntityEntityIdRouteHandler)
  .openapi(deleteApiEntityEntityIdRoute, deleteApiEntityEntityIdRouteHandler)
  .openapi(patchApiEntityEntityIdRoute, patchApiEntityEntityIdRouteHandler)
  .openapi(getApiEntityEntityIdRoute, getApiEntityEntityIdRouteHandler)
  .openapi(putApiEntityEntityIdRoute, putApiEntityEntityIdRouteHandler)
  .openapi(deleteApiEntityEntityIdGrantRoute, deleteApiEntityEntityIdGrantRouteHandler)
  .openapi(getApiEntityEntityIdGrantRoute, getApiEntityEntityIdGrantRouteHandler)
  .openapi(postApiEntityEntityIdGrantRoute, postApiEntityEntityIdGrantRouteHandler)
  .openapi(postApiFormRoute, postApiFormRouteHandler)
  .openapi(getApiFormRoute, getApiFormRouteHandler)
  .openapi(postApiFormFieldRoute, postApiFormFieldRouteHandler)
  .openapi(getApiFormFieldRoute, getApiFormFieldRouteHandler)
  .openapi(postApiFormFieldFieldIdRoute, postApiFormFieldFieldIdRouteHandler)
  .openapi(deleteApiFormFieldFieldIdRoute, deleteApiFormFieldFieldIdRouteHandler)
  .openapi(patchApiFormFieldFieldIdRoute, patchApiFormFieldFieldIdRouteHandler)
  .openapi(getApiFormFieldFieldIdRoute, getApiFormFieldFieldIdRouteHandler)
  .openapi(putApiFormFieldFieldIdRoute, putApiFormFieldFieldIdRouteHandler)
  .openapi(postApiFormFormIdRoute, postApiFormFormIdRouteHandler)
  .openapi(deleteApiFormFormIdRoute, deleteApiFormFormIdRouteHandler)
  .openapi(patchApiFormFormIdRoute, patchApiFormFormIdRouteHandler)
  .openapi(getApiFormFormIdRoute, getApiFormFormIdRouteHandler)
  .openapi(putApiFormFormIdRoute, putApiFormFormIdRouteHandler)
  .openapi(postApiGroupRoute, postApiGroupRouteHandler)
  .openapi(getApiGroupRoute, getApiGroupRouteHandler)
  .openapi(postApiGroupMemberRoute, postApiGroupMemberRouteHandler)
  .openapi(deleteApiGroupMemberRoute, deleteApiGroupMemberRouteHandler)
  .openapi(putApiGroupMemberRoute, putApiGroupMemberRouteHandler)
  .openapi(postApiGroupMemberSearchRoute, postApiGroupMemberSearchRouteHandler)
  .openapi(postApiGroupSearchRoute, postApiGroupSearchRouteHandler)
  .openapi(postApiGroupGroupIdRoute, postApiGroupGroupIdRouteHandler)
  .openapi(deleteApiGroupGroupIdRoute, deleteApiGroupGroupIdRouteHandler)
  .openapi(patchApiGroupGroupIdRoute, patchApiGroupGroupIdRouteHandler)
  .openapi(getApiGroupGroupIdRoute, getApiGroupGroupIdRouteHandler)
  .openapi(putApiGroupGroupIdRoute, putApiGroupGroupIdRouteHandler)
  .openapi(getApiHealthRoute, getApiHealthRouteHandler)
  .openapi(postApiIdentityProviderRoute, postApiIdentityProviderRouteHandler)
  .openapi(getApiIdentityProviderRoute, getApiIdentityProviderRouteHandler)
  .openapi(postApiIdentityProviderLinkRoute, postApiIdentityProviderLinkRouteHandler)
  .openapi(deleteApiIdentityProviderLinkRoute, deleteApiIdentityProviderLinkRouteHandler)
  .openapi(getApiIdentityProviderLinkRoute, getApiIdentityProviderLinkRouteHandler)
  .openapi(
    getApiIdentityProviderLinkPendingPendingLinkIdRoute,
    getApiIdentityProviderLinkPendingPendingLinkIdRouteHandler,
  )
  .openapi(postApiIdentityProviderLoginRoute, postApiIdentityProviderLoginRouteHandler)
  .openapi(getApiIdentityProviderLookupRoute, getApiIdentityProviderLookupRouteHandler)
  .openapi(postApiIdentityProviderSearchRoute, postApiIdentityProviderSearchRouteHandler)
  .openapi(getApiIdentityProviderSearchRoute, getApiIdentityProviderSearchRouteHandler)
  .openapi(postApiIdentityProviderStartRoute, postApiIdentityProviderStartRouteHandler)
  .openapi(getApiIdentityProviderTestRoute, getApiIdentityProviderTestRouteHandler)
  .openapi(postApiIdentityProviderTestRoute, postApiIdentityProviderTestRouteHandler)
  .openapi(
    postApiIdentityProviderIdentityProviderIdRoute,
    postApiIdentityProviderIdentityProviderIdRouteHandler,
  )
  .openapi(
    deleteApiIdentityProviderIdentityProviderIdRoute,
    deleteApiIdentityProviderIdentityProviderIdRouteHandler,
  )
  .openapi(
    patchApiIdentityProviderIdentityProviderIdRoute,
    patchApiIdentityProviderIdentityProviderIdRouteHandler,
  )
  .openapi(
    getApiIdentityProviderIdentityProviderIdRoute,
    getApiIdentityProviderIdentityProviderIdRouteHandler,
  )
  .openapi(
    putApiIdentityProviderIdentityProviderIdRoute,
    putApiIdentityProviderIdentityProviderIdRouteHandler,
  )
  .openapi(postApiIdentityVerifyRoute, postApiIdentityVerifyRouteHandler)
  .openapi(postApiIdentityVerifyCompleteRoute, postApiIdentityVerifyCompleteRouteHandler)
  .openapi(postApiIdentityVerifySendRoute, postApiIdentityVerifySendRouteHandler)
  .openapi(postApiIdentityVerifyStartRoute, postApiIdentityVerifyStartRouteHandler)
  .openapi(patchApiIntegrationRoute, patchApiIntegrationRouteHandler)
  .openapi(putApiIntegrationRoute, putApiIntegrationRouteHandler)
  .openapi(getApiIntegrationRoute, getApiIntegrationRouteHandler)
  .openapi(postApiIpAclRoute, postApiIpAclRouteHandler)
  .openapi(postApiIpAclSearchRoute, postApiIpAclSearchRouteHandler)
  .openapi(getApiIpAclSearchRoute, getApiIpAclSearchRouteHandler)
  .openapi(postApiIpAclAccessControlListIdRoute, postApiIpAclAccessControlListIdRouteHandler)
  .openapi(patchApiIpAclAccessControlListIdRoute, patchApiIpAclAccessControlListIdRouteHandler)
  .openapi(putApiIpAclAccessControlListIdRoute, putApiIpAclAccessControlListIdRouteHandler)
  .openapi(
    deleteApiIpAclIpAccessControlListIdRoute,
    deleteApiIpAclIpAccessControlListIdRouteHandler,
  )
  .openapi(getApiIpAclIpAccessControlListIdRoute, getApiIpAclIpAccessControlListIdRouteHandler)
  .openapi(getApiJwtIssueRoute, getApiJwtIssueRouteHandler)
  .openapi(getApiJwtPublicKeyRoute, getApiJwtPublicKeyRouteHandler)
  .openapi(postApiJwtReconcileRoute, postApiJwtReconcileRouteHandler)
  .openapi(postApiJwtRefreshRoute, postApiJwtRefreshRouteHandler)
  .openapi(getApiJwtRefreshRoute, getApiJwtRefreshRouteHandler)
  .openapi(deleteApiJwtRefreshRoute, deleteApiJwtRefreshRouteHandler)
  .openapi(getApiJwtRefreshTokenIdRoute, getApiJwtRefreshTokenIdRouteHandler)
  .openapi(deleteApiJwtRefreshTokenIdRoute, deleteApiJwtRefreshTokenIdRouteHandler)
  .openapi(getApiJwtValidateRoute, getApiJwtValidateRouteHandler)
  .openapi(postApiJwtVendRoute, postApiJwtVendRouteHandler)
  .openapi(getApiKeyRoute, getApiKeyRouteHandler)
  .openapi(postApiKeyGenerateRoute, postApiKeyGenerateRouteHandler)
  .openapi(postApiKeyGenerateKeyIdRoute, postApiKeyGenerateKeyIdRouteHandler)
  .openapi(postApiKeyImportRoute, postApiKeyImportRouteHandler)
  .openapi(postApiKeyImportKeyIdRoute, postApiKeyImportKeyIdRouteHandler)
  .openapi(postApiKeySearchRoute, postApiKeySearchRouteHandler)
  .openapi(getApiKeySearchRoute, getApiKeySearchRouteHandler)
  .openapi(deleteApiKeyKeyIdRoute, deleteApiKeyKeyIdRouteHandler)
  .openapi(getApiKeyKeyIdRoute, getApiKeyKeyIdRouteHandler)
  .openapi(putApiKeyKeyIdRoute, putApiKeyKeyIdRouteHandler)
  .openapi(postApiLambdaRoute, postApiLambdaRouteHandler)
  .openapi(getApiLambdaRoute, getApiLambdaRouteHandler)
  .openapi(postApiLambdaSearchRoute, postApiLambdaSearchRouteHandler)
  .openapi(postApiLambdaLambdaIdRoute, postApiLambdaLambdaIdRouteHandler)
  .openapi(deleteApiLambdaLambdaIdRoute, deleteApiLambdaLambdaIdRouteHandler)
  .openapi(patchApiLambdaLambdaIdRoute, patchApiLambdaLambdaIdRouteHandler)
  .openapi(getApiLambdaLambdaIdRoute, getApiLambdaLambdaIdRouteHandler)
  .openapi(putApiLambdaLambdaIdRoute, putApiLambdaLambdaIdRouteHandler)
  .openapi(postApiLoginRoute, postApiLoginRouteHandler)
  .openapi(putApiLoginRoute, putApiLoginRouteHandler)
  .openapi(putApiLoginUserIdApplicationIdRoute, putApiLoginUserIdApplicationIdRouteHandler)
  .openapi(postApiLogoutRoute, postApiLogoutRouteHandler)
  .openapi(postApiMessageTemplateRoute, postApiMessageTemplateRouteHandler)
  .openapi(getApiMessageTemplateRoute, getApiMessageTemplateRouteHandler)
  .openapi(postApiMessageTemplatePreviewRoute, postApiMessageTemplatePreviewRouteHandler)
  .openapi(
    postApiMessageTemplateMessageTemplateIdRoute,
    postApiMessageTemplateMessageTemplateIdRouteHandler,
  )
  .openapi(
    deleteApiMessageTemplateMessageTemplateIdRoute,
    deleteApiMessageTemplateMessageTemplateIdRouteHandler,
  )
  .openapi(
    patchApiMessageTemplateMessageTemplateIdRoute,
    patchApiMessageTemplateMessageTemplateIdRouteHandler,
  )
  .openapi(
    getApiMessageTemplateMessageTemplateIdRoute,
    getApiMessageTemplateMessageTemplateIdRouteHandler,
  )
  .openapi(
    putApiMessageTemplateMessageTemplateIdRoute,
    putApiMessageTemplateMessageTemplateIdRouteHandler,
  )
  .openapi(postApiMessengerRoute, postApiMessengerRouteHandler)
  .openapi(getApiMessengerRoute, getApiMessengerRouteHandler)
  .openapi(postApiMessengerMessengerIdRoute, postApiMessengerMessengerIdRouteHandler)
  .openapi(deleteApiMessengerMessengerIdRoute, deleteApiMessengerMessengerIdRouteHandler)
  .openapi(patchApiMessengerMessengerIdRoute, patchApiMessengerMessengerIdRouteHandler)
  .openapi(getApiMessengerMessengerIdRoute, getApiMessengerMessengerIdRouteHandler)
  .openapi(putApiMessengerMessengerIdRoute, putApiMessengerMessengerIdRouteHandler)
  .openapi(postApiPasswordlessLoginRoute, postApiPasswordlessLoginRouteHandler)
  .openapi(postApiPasswordlessSendRoute, postApiPasswordlessSendRouteHandler)
  .openapi(postApiPasswordlessStartRoute, postApiPasswordlessStartRouteHandler)
  .openapi(postApiReactorRoute, postApiReactorRouteHandler)
  .openapi(deleteApiReactorRoute, deleteApiReactorRouteHandler)
  .openapi(putApiReactorRoute, putApiReactorRouteHandler)
  .openapi(getApiReactorRoute, getApiReactorRouteHandler)
  .openapi(getApiReactorMetricsRoute, getApiReactorMetricsRouteHandler)
  .openapi(getApiReportDailyActiveUserRoute, getApiReportDailyActiveUserRouteHandler)
  .openapi(getApiReportLoginRoute, getApiReportLoginRouteHandler)
  .openapi(getApiReportMonthlyActiveUserRoute, getApiReportMonthlyActiveUserRouteHandler)
  .openapi(getApiReportRegistrationRoute, getApiReportRegistrationRouteHandler)
  .openapi(getApiReportTotalsRoute, getApiReportTotalsRouteHandler)
  .openapi(getApiStatusRoute, getApiStatusRouteHandler)
  .openapi(patchApiSystemConfigurationRoute, patchApiSystemConfigurationRouteHandler)
  .openapi(putApiSystemConfigurationRoute, putApiSystemConfigurationRouteHandler)
  .openapi(getApiSystemConfigurationRoute, getApiSystemConfigurationRouteHandler)
  .openapi(postApiSystemAuditLogRoute, postApiSystemAuditLogRouteHandler)
  .openapi(postApiSystemAuditLogSearchRoute, postApiSystemAuditLogSearchRouteHandler)
  .openapi(getApiSystemAuditLogAuditLogIdRoute, getApiSystemAuditLogAuditLogIdRouteHandler)
  .openapi(postApiSystemEventLogSearchRoute, postApiSystemEventLogSearchRouteHandler)
  .openapi(getApiSystemEventLogEventLogIdRoute, getApiSystemEventLogEventLogIdRouteHandler)
  .openapi(postApiSystemLoginRecordSearchRoute, postApiSystemLoginRecordSearchRouteHandler)
  .openapi(postApiSystemReindexRoute, postApiSystemReindexRouteHandler)
  .openapi(getApiSystemReindexRoute, getApiSystemReindexRouteHandler)
  .openapi(getApiSystemVersionRoute, getApiSystemVersionRouteHandler)
  .openapi(
    getApiSystemWebhookAttemptLogWebhookAttemptLogIdRoute,
    getApiSystemWebhookAttemptLogWebhookAttemptLogIdRouteHandler,
  )
  .openapi(postApiSystemWebhookEventLogSearchRoute, postApiSystemWebhookEventLogSearchRouteHandler)
  .openapi(
    getApiSystemWebhookEventLogWebhookEventLogIdRoute,
    getApiSystemWebhookEventLogWebhookEventLogIdRouteHandler,
  )
  .openapi(postApiTenantRoute, postApiTenantRouteHandler)
  .openapi(getApiTenantRoute, getApiTenantRouteHandler)
  .openapi(patchApiTenantManagerRoute, patchApiTenantManagerRouteHandler)
  .openapi(putApiTenantManagerRoute, putApiTenantManagerRouteHandler)
  .openapi(getApiTenantManagerRoute, getApiTenantManagerRouteHandler)
  .openapi(
    postApiTenantManagerIdentityProviderTypeRoute,
    postApiTenantManagerIdentityProviderTypeRouteHandler,
  )
  .openapi(
    deleteApiTenantManagerIdentityProviderTypeRoute,
    deleteApiTenantManagerIdentityProviderTypeRouteHandler,
  )
  .openapi(
    patchApiTenantManagerIdentityProviderTypeRoute,
    patchApiTenantManagerIdentityProviderTypeRouteHandler,
  )
  .openapi(
    putApiTenantManagerIdentityProviderTypeRoute,
    putApiTenantManagerIdentityProviderTypeRouteHandler,
  )
  .openapi(
    getApiTenantPasswordValidationRulesRoute,
    getApiTenantPasswordValidationRulesRouteHandler,
  )
  .openapi(
    getApiTenantPasswordValidationRulesTenantIdRoute,
    getApiTenantPasswordValidationRulesTenantIdRouteHandler,
  )
  .openapi(postApiTenantSearchRoute, postApiTenantSearchRouteHandler)
  .openapi(postApiTenantTenantIdRoute, postApiTenantTenantIdRouteHandler)
  .openapi(deleteApiTenantTenantIdRoute, deleteApiTenantTenantIdRouteHandler)
  .openapi(patchApiTenantTenantIdRoute, patchApiTenantTenantIdRouteHandler)
  .openapi(getApiTenantTenantIdRoute, getApiTenantTenantIdRouteHandler)
  .openapi(putApiTenantTenantIdRoute, putApiTenantTenantIdRouteHandler)
  .openapi(postApiThemeRoute, postApiThemeRouteHandler)
  .openapi(getApiThemeRoute, getApiThemeRouteHandler)
  .openapi(postApiThemeSearchRoute, postApiThemeSearchRouteHandler)
  .openapi(postApiThemeThemeIdRoute, postApiThemeThemeIdRouteHandler)
  .openapi(deleteApiThemeThemeIdRoute, deleteApiThemeThemeIdRouteHandler)
  .openapi(patchApiThemeThemeIdRoute, patchApiThemeThemeIdRouteHandler)
  .openapi(getApiThemeThemeIdRoute, getApiThemeThemeIdRouteHandler)
  .openapi(putApiThemeThemeIdRoute, putApiThemeThemeIdRouteHandler)
  .openapi(postApiTwoFactorLoginRoute, postApiTwoFactorLoginRouteHandler)
  .openapi(getApiTwoFactorSecretRoute, getApiTwoFactorSecretRouteHandler)
  .openapi(postApiTwoFactorSendRoute, postApiTwoFactorSendRouteHandler)
  .openapi(postApiTwoFactorSendTwoFactorIdRoute, postApiTwoFactorSendTwoFactorIdRouteHandler)
  .openapi(postApiTwoFactorStartRoute, postApiTwoFactorStartRouteHandler)
  .openapi(postApiTwoFactorStatusRoute, postApiTwoFactorStatusRouteHandler)
  .openapi(
    getApiTwoFactorStatusTwoFactorTrustIdRoute,
    getApiTwoFactorStatusTwoFactorTrustIdRouteHandler,
  )
  .openapi(postApiUserRoute, postApiUserRouteHandler)
  .openapi(getApiUserRoute, getApiUserRouteHandler)
  .openapi(postApiUserActionRoute, postApiUserActionRouteHandler)
  .openapi(getApiUserActionRoute, getApiUserActionRouteHandler)
  .openapi(postApiUserActionReasonRoute, postApiUserActionReasonRouteHandler)
  .openapi(getApiUserActionReasonRoute, getApiUserActionReasonRouteHandler)
  .openapi(
    postApiUserActionReasonUserActionReasonIdRoute,
    postApiUserActionReasonUserActionReasonIdRouteHandler,
  )
  .openapi(
    deleteApiUserActionReasonUserActionReasonIdRoute,
    deleteApiUserActionReasonUserActionReasonIdRouteHandler,
  )
  .openapi(
    patchApiUserActionReasonUserActionReasonIdRoute,
    patchApiUserActionReasonUserActionReasonIdRouteHandler,
  )
  .openapi(
    getApiUserActionReasonUserActionReasonIdRoute,
    getApiUserActionReasonUserActionReasonIdRouteHandler,
  )
  .openapi(
    putApiUserActionReasonUserActionReasonIdRoute,
    putApiUserActionReasonUserActionReasonIdRouteHandler,
  )
  .openapi(postApiUserActionUserActionIdRoute, postApiUserActionUserActionIdRouteHandler)
  .openapi(deleteApiUserActionUserActionIdRoute, deleteApiUserActionUserActionIdRouteHandler)
  .openapi(patchApiUserActionUserActionIdRoute, patchApiUserActionUserActionIdRouteHandler)
  .openapi(putApiUserActionUserActionIdRoute, putApiUserActionUserActionIdRouteHandler)
  .openapi(getApiUserActionUserActionIdRoute, getApiUserActionUserActionIdRouteHandler)
  .openapi(postApiUserAction2Route, postApiUserAction2RouteHandler)
  .openapi(getApiUserAction2Route, getApiUserAction2RouteHandler)
  .openapi(deleteApiUserActionActionIdRoute, deleteApiUserActionActionIdRouteHandler)
  .openapi(putApiUserActionActionIdRoute, putApiUserActionActionIdRouteHandler)
  .openapi(getApiUserActionActionIdRoute, getApiUserActionActionIdRouteHandler)
  .openapi(deleteApiUserBulkRoute, deleteApiUserBulkRouteHandler)
  .openapi(postApiUserChangePasswordRoute, postApiUserChangePasswordRouteHandler)
  .openapi(getApiUserChangePasswordRoute, getApiUserChangePasswordRouteHandler)
  .openapi(
    postApiUserChangePasswordChangePasswordIdRoute,
    postApiUserChangePasswordChangePasswordIdRouteHandler,
  )
  .openapi(
    getApiUserChangePasswordChangePasswordIdRoute,
    getApiUserChangePasswordChangePasswordIdRouteHandler,
  )
  .openapi(postApiUserCommentRoute, postApiUserCommentRouteHandler)
  .openapi(postApiUserCommentSearchRoute, postApiUserCommentSearchRouteHandler)
  .openapi(getApiUserCommentUserIdRoute, getApiUserCommentUserIdRouteHandler)
  .openapi(postApiUserConsentRoute, postApiUserConsentRouteHandler)
  .openapi(getApiUserConsentRoute, getApiUserConsentRouteHandler)
  .openapi(postApiUserConsentUserConsentIdRoute, postApiUserConsentUserConsentIdRouteHandler)
  .openapi(patchApiUserConsentUserConsentIdRoute, patchApiUserConsentUserConsentIdRouteHandler)
  .openapi(getApiUserConsentUserConsentIdRoute, getApiUserConsentUserConsentIdRouteHandler)
  .openapi(deleteApiUserConsentUserConsentIdRoute, deleteApiUserConsentUserConsentIdRouteHandler)
  .openapi(putApiUserConsentUserConsentIdRoute, putApiUserConsentUserConsentIdRouteHandler)
  .openapi(postApiUserFamilyRoute, postApiUserFamilyRouteHandler)
  .openapi(getApiUserFamilyRoute, getApiUserFamilyRouteHandler)
  .openapi(getApiUserFamilyPendingRoute, getApiUserFamilyPendingRouteHandler)
  .openapi(postApiUserFamilyRequestRoute, postApiUserFamilyRequestRouteHandler)
  .openapi(putApiUserFamilyFamilyIdRoute, putApiUserFamilyFamilyIdRouteHandler)
  .openapi(postApiUserFamilyFamilyIdRoute, postApiUserFamilyFamilyIdRouteHandler)
  .openapi(getApiUserFamilyFamilyIdRoute, getApiUserFamilyFamilyIdRouteHandler)
  .openapi(deleteApiUserFamilyFamilyIdUserIdRoute, deleteApiUserFamilyFamilyIdUserIdRouteHandler)
  .openapi(postApiUserForgotPasswordRoute, postApiUserForgotPasswordRouteHandler)
  .openapi(postApiUserImportRoute, postApiUserImportRouteHandler)
  .openapi(getApiUserRecentLoginRoute, getApiUserRecentLoginRouteHandler)
  .openapi(postApiUserRefreshTokenImportRoute, postApiUserRefreshTokenImportRouteHandler)
  .openapi(postApiUserRegistrationRoute, postApiUserRegistrationRouteHandler)
  .openapi(patchApiUserRegistrationUserIdRoute, patchApiUserRegistrationUserIdRouteHandler)
  .openapi(postApiUserRegistrationUserIdRoute, postApiUserRegistrationUserIdRouteHandler)
  .openapi(putApiUserRegistrationUserIdRoute, putApiUserRegistrationUserIdRouteHandler)
  .openapi(
    deleteApiUserRegistrationUserIdApplicationIdRoute,
    deleteApiUserRegistrationUserIdApplicationIdRouteHandler,
  )
  .openapi(
    getApiUserRegistrationUserIdApplicationIdRoute,
    getApiUserRegistrationUserIdApplicationIdRouteHandler,
  )
  .openapi(getApiUserSearchRoute, getApiUserSearchRouteHandler)
  .openapi(postApiUserSearchRoute, postApiUserSearchRouteHandler)
  .openapi(putApiUserSearchRoute, putApiUserSearchRouteHandler)
  .openapi(
    postApiUserTwoFactorRecoveryCodeUserIdRoute,
    postApiUserTwoFactorRecoveryCodeUserIdRouteHandler,
  )
  .openapi(
    getApiUserTwoFactorRecoveryCodeUserIdRoute,
    getApiUserTwoFactorRecoveryCodeUserIdRouteHandler,
  )
  .openapi(deleteApiUserTwoFactorUserIdRoute, deleteApiUserTwoFactorUserIdRouteHandler)
  .openapi(postApiUserTwoFactorUserIdRoute, postApiUserTwoFactorUserIdRouteHandler)
  .openapi(putApiUserTwoFactorUserIdRoute, putApiUserTwoFactorUserIdRouteHandler)
  .openapi(putApiUserVerifyEmailRoute, putApiUserVerifyEmailRouteHandler)
  .openapi(postApiUserVerifyEmailRoute, postApiUserVerifyEmailRouteHandler)
  .openapi(putApiUserVerifyRegistrationRoute, putApiUserVerifyRegistrationRouteHandler)
  .openapi(postApiUserVerifyRegistrationRoute, postApiUserVerifyRegistrationRouteHandler)
  .openapi(postApiUserUserIdRoute, postApiUserUserIdRouteHandler)
  .openapi(deleteApiUserUserIdRoute, deleteApiUserUserIdRouteHandler)
  .openapi(patchApiUserUserIdRoute, patchApiUserUserIdRouteHandler)
  .openapi(putApiUserUserIdRoute, putApiUserUserIdRouteHandler)
  .openapi(getApiUserUserIdRoute, getApiUserUserIdRouteHandler)
  .openapi(deleteApiWebauthnRoute, deleteApiWebauthnRouteHandler)
  .openapi(getApiWebauthnRoute, getApiWebauthnRouteHandler)
  .openapi(postApiWebauthnAssertRoute, postApiWebauthnAssertRouteHandler)
  .openapi(postApiWebauthnImportRoute, postApiWebauthnImportRouteHandler)
  .openapi(postApiWebauthnLoginRoute, postApiWebauthnLoginRouteHandler)
  .openapi(postApiWebauthnRegisterCompleteRoute, postApiWebauthnRegisterCompleteRouteHandler)
  .openapi(postApiWebauthnRegisterStartRoute, postApiWebauthnRegisterStartRouteHandler)
  .openapi(postApiWebauthnStartRoute, postApiWebauthnStartRouteHandler)
  .openapi(deleteApiWebauthnIdRoute, deleteApiWebauthnIdRouteHandler)
  .openapi(getApiWebauthnIdRoute, getApiWebauthnIdRouteHandler)
  .openapi(postApiWebhookRoute, postApiWebhookRouteHandler)
  .openapi(getApiWebhookRoute, getApiWebhookRouteHandler)
  .openapi(postApiWebhookSearchRoute, postApiWebhookSearchRouteHandler)
  .openapi(getApiWebhookSearchRoute, getApiWebhookSearchRouteHandler)
  .openapi(postApiWebhookWebhookIdRoute, postApiWebhookWebhookIdRouteHandler)
  .openapi(deleteApiWebhookWebhookIdRoute, deleteApiWebhookWebhookIdRouteHandler)
  .openapi(patchApiWebhookWebhookIdRoute, patchApiWebhookWebhookIdRouteHandler)
  .openapi(getApiWebhookWebhookIdRoute, getApiWebhookWebhookIdRouteHandler)
  .openapi(putApiWebhookWebhookIdRoute, putApiWebhookWebhookIdRouteHandler)
  .openapi(postOauth2DeviceApproveRoute, postOauth2DeviceApproveRouteHandler)
  .openapi(postOauth2DeviceUserCodeRoute, postOauth2DeviceUserCodeRouteHandler)
  .openapi(getOauth2DeviceValidateRoute, getOauth2DeviceValidateRouteHandler)
  .openapi(postOauth2DeviceAuthorizeRoute, postOauth2DeviceAuthorizeRouteHandler)
  .openapi(postOauth2IntrospectRoute, postOauth2IntrospectRouteHandler)
  .openapi(postOauth2TokenRoute, postOauth2TokenRouteHandler)
  .openapi(getOauth2UserinfoRoute, getOauth2UserinfoRouteHandler)

export default app
