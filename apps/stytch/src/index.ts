import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1B2bOrganizationsOrganizationIdExternalIdRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRoute,
  deleteV1B2bOrganizationsOrganizationIdRoute,
  deleteV1B2bScimOrganizationIdConnectionConnectionIdRoute,
  deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRoute,
  deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRoute,
  deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRoute,
  deleteV1ConnectedAppsClientsClientIdRoute,
  deleteV1M2mClientsClientIdRoute,
  deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRoute,
  deleteV1UsersCryptoWalletsCryptoWalletIdRoute,
  deleteV1UsersEmailsEmailIdRoute,
  deleteV1UsersOauthOauthUserRegistrationIdRoute,
  deleteV1UsersPasswordsPasswordIdRoute,
  deleteV1UsersPhoneNumbersPhoneIdRoute,
  deleteV1UsersTotpsTotpIdRoute,
  deleteV1UsersUserIdExternalIdRoute,
  deleteV1UsersUserIdRoute,
  deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRoute,
  getV1B2bOrganizationsMembersDangerouslyGetMemberIdRoute,
  getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRoute,
  getV1B2bOrganizationsOrganizationIdConnectedAppsRoute,
  getV1B2bOrganizationsOrganizationIdMemberRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRoute,
  getV1B2bOrganizationsOrganizationIdMetricsRoute,
  getV1B2bOrganizationsOrganizationIdRoute,
  getV1B2bRbacOrganizationsOrganizationIdRoute,
  getV1B2bRbacPolicyRoute,
  getV1B2bRecoveryCodesOrganizationIdMemberIdRoute,
  getV1B2bScimOrganizationIdConnectionConnectionIdRoute,
  getV1B2bScimOrganizationIdConnectionRoute,
  getV1B2bSessionsJwksProjectIdRoute,
  getV1B2bSessionsRoute,
  getV1B2bSsoOrganizationIdRoute,
  getV1ConnectedAppsClientsClientIdRoute,
  getV1DebugWhoamiRoute,
  getV1M2mClientsClientIdRoute,
  getV1ProjectsMetricsRoute,
  getV1RbacPolicyRoute,
  getV1SessionsJwksProjectIdRoute,
  getV1SessionsRoute,
  getV1UsersUserIdConnectedAppsRoute,
  getV1UsersUserIdRoute,
  getV1WebauthnCredentialsUserIdDomainRoute,
  postV1B2bDiscoveryIntermediateSessionsExchangeRoute,
  postV1B2bDiscoveryOrganizationsCreateRoute,
  postV1B2bDiscoveryOrganizationsRoute,
  postV1B2bIdpOauthAuthorizeRoute,
  postV1B2bIdpOauthAuthorizeStartRoute,
  postV1B2bImpersonationAuthenticateRoute,
  postV1B2bMagicLinksAuthenticateRoute,
  postV1B2bMagicLinksDiscoveryAuthenticateRoute,
  postV1B2bMagicLinksEmailDiscoverySendRoute,
  postV1B2bMagicLinksEmailInviteRoute,
  postV1B2bMagicLinksEmailLoginOrSignupRoute,
  postV1B2bOauthAuthenticateRoute,
  postV1B2bOauthDiscoveryAuthenticateRoute,
  postV1B2bOrganizationsMembersSearchRoute,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRoute,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRoute,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRoute,
  postV1B2bOrganizationsOrganizationIdMembersRoute,
  postV1B2bOrganizationsRoute,
  postV1B2bOrganizationsSearchRoute,
  postV1B2bOtpsEmailAuthenticateRoute,
  postV1B2bOtpsEmailDiscoveryAuthenticateRoute,
  postV1B2bOtpsEmailDiscoverySendRoute,
  postV1B2bOtpsEmailLoginOrSignupRoute,
  postV1B2bOtpsSmsAuthenticateRoute,
  postV1B2bOtpsSmsSendRoute,
  postV1B2bPasswordsAuthenticateRoute,
  postV1B2bPasswordsDiscoveryAuthenticateRoute,
  postV1B2bPasswordsDiscoveryEmailResetRoute,
  postV1B2bPasswordsDiscoveryEmailResetStartRoute,
  postV1B2bPasswordsEmailRequireResetRoute,
  postV1B2bPasswordsEmailResetRoute,
  postV1B2bPasswordsEmailResetStartRoute,
  postV1B2bPasswordsExistingPasswordResetRoute,
  postV1B2bPasswordsMigrateRoute,
  postV1B2bPasswordsSessionResetRoute,
  postV1B2bPasswordsStrengthCheckRoute,
  postV1B2bRecoveryCodesRecoverRoute,
  postV1B2bRecoveryCodesRotateRoute,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRoute,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRoute,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRoute,
  postV1B2bScimOrganizationIdConnectionRoute,
  postV1B2bSessionsAttestRoute,
  postV1B2bSessionsAuthenticateRoute,
  postV1B2bSessionsExchangeAccessTokenRoute,
  postV1B2bSessionsExchangeRoute,
  postV1B2bSessionsMigrateRoute,
  postV1B2bSessionsRevokeRoute,
  postV1B2bSsoAuthenticateRoute,
  postV1B2bSsoExternalOrganizationIdRoute,
  postV1B2bSsoOidcOrganizationIdRoute,
  postV1B2bSsoSamlOrganizationIdRoute,
  postV1B2bTotpAuthenticateRoute,
  postV1B2bTotpMigrateRoute,
  postV1B2bTotpRoute,
  postV1ConnectedAppsClientsClientIdSecretsRotateCancelRoute,
  postV1ConnectedAppsClientsClientIdSecretsRotateRoute,
  postV1ConnectedAppsClientsClientIdSecretsRotateStartRoute,
  postV1ConnectedAppsClientsRoute,
  postV1ConnectedAppsClientsSearchRoute,
  postV1CryptoWalletsAuthenticateRoute,
  postV1CryptoWalletsAuthenticateStartRoute,
  postV1EmailRiskRoute,
  postV1FingerprintLookupRoute,
  postV1IdpOauthAuthorizeRoute,
  postV1IdpOauthAuthorizeStartRoute,
  postV1ImpersonationAuthenticateRoute,
  postV1M2mClientsClientIdSecretsRotateCancelRoute,
  postV1M2mClientsClientIdSecretsRotateRoute,
  postV1M2mClientsClientIdSecretsRotateStartRoute,
  postV1M2mClientsRoute,
  postV1M2mClientsSearchRoute,
  postV1MagicLinksAuthenticateRoute,
  postV1MagicLinksEmailInviteRoute,
  postV1MagicLinksEmailLoginOrCreateRoute,
  postV1MagicLinksEmailRevokeInviteRoute,
  postV1MagicLinksEmailSendRoute,
  postV1MagicLinksRoute,
  postV1OauthAttachRoute,
  postV1OauthAuthenticateRoute,
  postV1OtpsAuthenticateRoute,
  postV1OtpsEmailLoginOrCreateRoute,
  postV1OtpsEmailSendRoute,
  postV1OtpsSmsLoginOrCreateRoute,
  postV1OtpsSmsSendRoute,
  postV1OtpsWhatsappLoginOrCreateRoute,
  postV1OtpsWhatsappSendRoute,
  postV1PasswordsAuthenticateRoute,
  postV1PasswordsEmailResetRoute,
  postV1PasswordsEmailResetStartRoute,
  postV1PasswordsExistingPasswordResetRoute,
  postV1PasswordsMigrateRoute,
  postV1PasswordsRoute,
  postV1PasswordsSessionResetRoute,
  postV1PasswordsStrengthCheckRoute,
  postV1RulesListRoute,
  postV1RulesSetRoute,
  postV1SessionsAttestRoute,
  postV1SessionsAuthenticateRoute,
  postV1SessionsExchangeAccessTokenRoute,
  postV1SessionsMigrateRoute,
  postV1SessionsRevokeRoute,
  postV1TotpsAuthenticateRoute,
  postV1TotpsRecoverRoute,
  postV1TotpsRecoveryCodesRoute,
  postV1TotpsRoute,
  postV1UsersRoute,
  postV1UsersSearchRoute,
  postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRoute,
  postV1VerdictReasonsListRoute,
  postV1VerdictReasonsOverrideRoute,
  postV1WebauthnAuthenticateRoute,
  postV1WebauthnAuthenticateStartRoute,
  postV1WebauthnRegisterRoute,
  postV1WebauthnRegisterStartRoute,
  putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRoute,
  putV1B2bOrganizationsOrganizationIdMembersMemberIdRoute,
  putV1B2bOrganizationsOrganizationIdRoute,
  putV1B2bRbacOrganizationsOrganizationIdRoute,
  putV1B2bScimOrganizationIdConnectionConnectionIdRoute,
  putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRoute,
  putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRoute,
  putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRoute,
  putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRoute,
  putV1ConnectedAppsClientsClientIdRoute,
  putV1M2mClientsClientIdRoute,
  putV1UsersUserIdExchangePrimaryFactorRoute,
  putV1UsersUserIdRoute,
  putV1WebauthnWebauthnRegistrationIdRoute,
} from './routes'
import {
  deleteV1B2bOrganizationsOrganizationIdExternalIdRouteHandler,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRouteHandler,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRouteHandler,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRouteHandler,
  deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRouteHandler,
  deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRouteHandler,
  deleteV1B2bOrganizationsOrganizationIdRouteHandler,
  deleteV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler,
  deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRouteHandler,
  deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRouteHandler,
  deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRouteHandler,
  deleteV1ConnectedAppsClientsClientIdRouteHandler,
  deleteV1M2mClientsClientIdRouteHandler,
  deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRouteHandler,
  deleteV1UsersCryptoWalletsCryptoWalletIdRouteHandler,
  deleteV1UsersEmailsEmailIdRouteHandler,
  deleteV1UsersOauthOauthUserRegistrationIdRouteHandler,
  deleteV1UsersPasswordsPasswordIdRouteHandler,
  deleteV1UsersPhoneNumbersPhoneIdRouteHandler,
  deleteV1UsersTotpsTotpIdRouteHandler,
  deleteV1UsersUserIdExternalIdRouteHandler,
  deleteV1UsersUserIdRouteHandler,
  deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRouteHandler,
  getV1B2bOrganizationsMembersDangerouslyGetMemberIdRouteHandler,
  getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRouteHandler,
  getV1B2bOrganizationsOrganizationIdConnectedAppsRouteHandler,
  getV1B2bOrganizationsOrganizationIdMemberRouteHandler,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRouteHandler,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRouteHandler,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRouteHandler,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRouteHandler,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRouteHandler,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRouteHandler,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRouteHandler,
  getV1B2bOrganizationsOrganizationIdMetricsRouteHandler,
  getV1B2bOrganizationsOrganizationIdRouteHandler,
  getV1B2bRbacOrganizationsOrganizationIdRouteHandler,
  getV1B2bRbacPolicyRouteHandler,
  getV1B2bRecoveryCodesOrganizationIdMemberIdRouteHandler,
  getV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler,
  getV1B2bScimOrganizationIdConnectionRouteHandler,
  getV1B2bSessionsJwksProjectIdRouteHandler,
  getV1B2bSessionsRouteHandler,
  getV1B2bSsoOrganizationIdRouteHandler,
  getV1ConnectedAppsClientsClientIdRouteHandler,
  getV1DebugWhoamiRouteHandler,
  getV1M2mClientsClientIdRouteHandler,
  getV1ProjectsMetricsRouteHandler,
  getV1RbacPolicyRouteHandler,
  getV1SessionsJwksProjectIdRouteHandler,
  getV1SessionsRouteHandler,
  getV1UsersUserIdConnectedAppsRouteHandler,
  getV1UsersUserIdRouteHandler,
  getV1WebauthnCredentialsUserIdDomainRouteHandler,
  postV1B2bDiscoveryIntermediateSessionsExchangeRouteHandler,
  postV1B2bDiscoveryOrganizationsCreateRouteHandler,
  postV1B2bDiscoveryOrganizationsRouteHandler,
  postV1B2bIdpOauthAuthorizeRouteHandler,
  postV1B2bIdpOauthAuthorizeStartRouteHandler,
  postV1B2bImpersonationAuthenticateRouteHandler,
  postV1B2bMagicLinksAuthenticateRouteHandler,
  postV1B2bMagicLinksDiscoveryAuthenticateRouteHandler,
  postV1B2bMagicLinksEmailDiscoverySendRouteHandler,
  postV1B2bMagicLinksEmailInviteRouteHandler,
  postV1B2bMagicLinksEmailLoginOrSignupRouteHandler,
  postV1B2bOauthAuthenticateRouteHandler,
  postV1B2bOauthDiscoveryAuthenticateRouteHandler,
  postV1B2bOrganizationsMembersSearchRouteHandler,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRouteHandler,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRouteHandler,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRouteHandler,
  postV1B2bOrganizationsOrganizationIdMembersRouteHandler,
  postV1B2bOrganizationsRouteHandler,
  postV1B2bOrganizationsSearchRouteHandler,
  postV1B2bOtpsEmailAuthenticateRouteHandler,
  postV1B2bOtpsEmailDiscoveryAuthenticateRouteHandler,
  postV1B2bOtpsEmailDiscoverySendRouteHandler,
  postV1B2bOtpsEmailLoginOrSignupRouteHandler,
  postV1B2bOtpsSmsAuthenticateRouteHandler,
  postV1B2bOtpsSmsSendRouteHandler,
  postV1B2bPasswordsAuthenticateRouteHandler,
  postV1B2bPasswordsDiscoveryAuthenticateRouteHandler,
  postV1B2bPasswordsDiscoveryEmailResetRouteHandler,
  postV1B2bPasswordsDiscoveryEmailResetStartRouteHandler,
  postV1B2bPasswordsEmailRequireResetRouteHandler,
  postV1B2bPasswordsEmailResetRouteHandler,
  postV1B2bPasswordsEmailResetStartRouteHandler,
  postV1B2bPasswordsExistingPasswordResetRouteHandler,
  postV1B2bPasswordsMigrateRouteHandler,
  postV1B2bPasswordsSessionResetRouteHandler,
  postV1B2bPasswordsStrengthCheckRouteHandler,
  postV1B2bRecoveryCodesRecoverRouteHandler,
  postV1B2bRecoveryCodesRotateRouteHandler,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRouteHandler,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRouteHandler,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRouteHandler,
  postV1B2bScimOrganizationIdConnectionRouteHandler,
  postV1B2bSessionsAttestRouteHandler,
  postV1B2bSessionsAuthenticateRouteHandler,
  postV1B2bSessionsExchangeAccessTokenRouteHandler,
  postV1B2bSessionsExchangeRouteHandler,
  postV1B2bSessionsMigrateRouteHandler,
  postV1B2bSessionsRevokeRouteHandler,
  postV1B2bSsoAuthenticateRouteHandler,
  postV1B2bSsoExternalOrganizationIdRouteHandler,
  postV1B2bSsoOidcOrganizationIdRouteHandler,
  postV1B2bSsoSamlOrganizationIdRouteHandler,
  postV1B2bTotpAuthenticateRouteHandler,
  postV1B2bTotpMigrateRouteHandler,
  postV1B2bTotpRouteHandler,
  postV1ConnectedAppsClientsClientIdSecretsRotateCancelRouteHandler,
  postV1ConnectedAppsClientsClientIdSecretsRotateRouteHandler,
  postV1ConnectedAppsClientsClientIdSecretsRotateStartRouteHandler,
  postV1ConnectedAppsClientsRouteHandler,
  postV1ConnectedAppsClientsSearchRouteHandler,
  postV1CryptoWalletsAuthenticateRouteHandler,
  postV1CryptoWalletsAuthenticateStartRouteHandler,
  postV1EmailRiskRouteHandler,
  postV1FingerprintLookupRouteHandler,
  postV1IdpOauthAuthorizeRouteHandler,
  postV1IdpOauthAuthorizeStartRouteHandler,
  postV1ImpersonationAuthenticateRouteHandler,
  postV1M2mClientsClientIdSecretsRotateCancelRouteHandler,
  postV1M2mClientsClientIdSecretsRotateRouteHandler,
  postV1M2mClientsClientIdSecretsRotateStartRouteHandler,
  postV1M2mClientsRouteHandler,
  postV1M2mClientsSearchRouteHandler,
  postV1MagicLinksAuthenticateRouteHandler,
  postV1MagicLinksEmailInviteRouteHandler,
  postV1MagicLinksEmailLoginOrCreateRouteHandler,
  postV1MagicLinksEmailRevokeInviteRouteHandler,
  postV1MagicLinksEmailSendRouteHandler,
  postV1MagicLinksRouteHandler,
  postV1OauthAttachRouteHandler,
  postV1OauthAuthenticateRouteHandler,
  postV1OtpsAuthenticateRouteHandler,
  postV1OtpsEmailLoginOrCreateRouteHandler,
  postV1OtpsEmailSendRouteHandler,
  postV1OtpsSmsLoginOrCreateRouteHandler,
  postV1OtpsSmsSendRouteHandler,
  postV1OtpsWhatsappLoginOrCreateRouteHandler,
  postV1OtpsWhatsappSendRouteHandler,
  postV1PasswordsAuthenticateRouteHandler,
  postV1PasswordsEmailResetRouteHandler,
  postV1PasswordsEmailResetStartRouteHandler,
  postV1PasswordsExistingPasswordResetRouteHandler,
  postV1PasswordsMigrateRouteHandler,
  postV1PasswordsRouteHandler,
  postV1PasswordsSessionResetRouteHandler,
  postV1PasswordsStrengthCheckRouteHandler,
  postV1RulesListRouteHandler,
  postV1RulesSetRouteHandler,
  postV1SessionsAttestRouteHandler,
  postV1SessionsAuthenticateRouteHandler,
  postV1SessionsExchangeAccessTokenRouteHandler,
  postV1SessionsMigrateRouteHandler,
  postV1SessionsRevokeRouteHandler,
  postV1TotpsAuthenticateRouteHandler,
  postV1TotpsRecoverRouteHandler,
  postV1TotpsRecoveryCodesRouteHandler,
  postV1TotpsRouteHandler,
  postV1UsersRouteHandler,
  postV1UsersSearchRouteHandler,
  postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRouteHandler,
  postV1VerdictReasonsListRouteHandler,
  postV1VerdictReasonsOverrideRouteHandler,
  postV1WebauthnAuthenticateRouteHandler,
  postV1WebauthnAuthenticateStartRouteHandler,
  postV1WebauthnRegisterRouteHandler,
  postV1WebauthnRegisterStartRouteHandler,
  putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRouteHandler,
  putV1B2bOrganizationsOrganizationIdMembersMemberIdRouteHandler,
  putV1B2bOrganizationsOrganizationIdRouteHandler,
  putV1B2bRbacOrganizationsOrganizationIdRouteHandler,
  putV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler,
  putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRouteHandler,
  putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRouteHandler,
  putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRouteHandler,
  putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRouteHandler,
  putV1ConnectedAppsClientsClientIdRouteHandler,
  putV1M2mClientsClientIdRouteHandler,
  putV1UsersUserIdExchangePrimaryFactorRouteHandler,
  putV1UsersUserIdRouteHandler,
  putV1WebauthnWebauthnRegistrationIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ConnectedAppsClientsClientIdRoute, getV1ConnectedAppsClientsClientIdRouteHandler)
  .openapi(putV1ConnectedAppsClientsClientIdRoute, putV1ConnectedAppsClientsClientIdRouteHandler)
  .openapi(
    deleteV1ConnectedAppsClientsClientIdRoute,
    deleteV1ConnectedAppsClientsClientIdRouteHandler,
  )
  .openapi(postV1ConnectedAppsClientsSearchRoute, postV1ConnectedAppsClientsSearchRouteHandler)
  .openapi(postV1ConnectedAppsClientsRoute, postV1ConnectedAppsClientsRouteHandler)
  .openapi(
    postV1ConnectedAppsClientsClientIdSecretsRotateStartRoute,
    postV1ConnectedAppsClientsClientIdSecretsRotateStartRouteHandler,
  )
  .openapi(
    postV1ConnectedAppsClientsClientIdSecretsRotateCancelRoute,
    postV1ConnectedAppsClientsClientIdSecretsRotateCancelRouteHandler,
  )
  .openapi(
    postV1ConnectedAppsClientsClientIdSecretsRotateRoute,
    postV1ConnectedAppsClientsClientIdSecretsRotateRouteHandler,
  )
  .openapi(
    putV1B2bScimOrganizationIdConnectionConnectionIdRoute,
    putV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler,
  )
  .openapi(
    deleteV1B2bScimOrganizationIdConnectionConnectionIdRoute,
    deleteV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler,
  )
  .openapi(
    getV1B2bScimOrganizationIdConnectionConnectionIdRoute,
    getV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler,
  )
  .openapi(
    postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRoute,
    postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRouteHandler,
  )
  .openapi(
    postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRoute,
    postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRouteHandler,
  )
  .openapi(
    postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRoute,
    postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRouteHandler,
  )
  .openapi(
    postV1B2bScimOrganizationIdConnectionRoute,
    postV1B2bScimOrganizationIdConnectionRouteHandler,
  )
  .openapi(
    getV1B2bScimOrganizationIdConnectionRoute,
    getV1B2bScimOrganizationIdConnectionRouteHandler,
  )
  .openapi(postV1B2bOrganizationsRoute, postV1B2bOrganizationsRouteHandler)
  .openapi(
    getV1B2bOrganizationsOrganizationIdRoute,
    getV1B2bOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    putV1B2bOrganizationsOrganizationIdRoute,
    putV1B2bOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    deleteV1B2bOrganizationsOrganizationIdRoute,
    deleteV1B2bOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(postV1B2bOrganizationsSearchRoute, postV1B2bOrganizationsSearchRouteHandler)
  .openapi(
    getV1B2bOrganizationsOrganizationIdMetricsRoute,
    getV1B2bOrganizationsOrganizationIdMetricsRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdConnectedAppsRoute,
    getV1B2bOrganizationsOrganizationIdConnectedAppsRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRoute,
    getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRouteHandler,
  )
  .openapi(
    deleteV1B2bOrganizationsOrganizationIdExternalIdRoute,
    deleteV1B2bOrganizationsOrganizationIdExternalIdRouteHandler,
  )
  .openapi(
    putV1B2bOrganizationsOrganizationIdMembersMemberIdRoute,
    putV1B2bOrganizationsOrganizationIdMembersMemberIdRouteHandler,
  )
  .openapi(
    deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRoute,
    deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRouteHandler,
  )
  .openapi(
    putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRoute,
    putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRouteHandler,
  )
  .openapi(
    deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRoute,
    deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRouteHandler,
  )
  .openapi(
    deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRoute,
    deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRouteHandler,
  )
  .openapi(
    postV1B2bOrganizationsMembersSearchRoute,
    postV1B2bOrganizationsMembersSearchRouteHandler,
  )
  .openapi(
    deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRoute,
    deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsMembersDangerouslyGetMemberIdRoute,
    getV1B2bOrganizationsMembersDangerouslyGetMemberIdRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRoute,
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRouteHandler,
  )
  .openapi(
    postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRoute,
    postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRouteHandler,
  )
  .openapi(
    postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRoute,
    postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRoute,
    getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRouteHandler,
  )
  .openapi(
    deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRoute,
    deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRouteHandler,
  )
  .openapi(
    postV1B2bOrganizationsOrganizationIdMembersRoute,
    postV1B2bOrganizationsOrganizationIdMembersRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMemberRoute,
    getV1B2bOrganizationsOrganizationIdMemberRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRoute,
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRoute,
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRoute,
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRoute,
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRouteHandler,
  )
  .openapi(
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRoute,
    getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRouteHandler,
  )
  .openapi(
    postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRoute,
    postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRouteHandler,
  )
  .openapi(postV1B2bIdpOauthAuthorizeStartRoute, postV1B2bIdpOauthAuthorizeStartRouteHandler)
  .openapi(postV1B2bIdpOauthAuthorizeRoute, postV1B2bIdpOauthAuthorizeRouteHandler)
  .openapi(postV1UsersRoute, postV1UsersRouteHandler)
  .openapi(getV1UsersUserIdRoute, getV1UsersUserIdRouteHandler)
  .openapi(putV1UsersUserIdRoute, putV1UsersUserIdRouteHandler)
  .openapi(deleteV1UsersUserIdRoute, deleteV1UsersUserIdRouteHandler)
  .openapi(postV1UsersSearchRoute, postV1UsersSearchRouteHandler)
  .openapi(
    putV1UsersUserIdExchangePrimaryFactorRoute,
    putV1UsersUserIdExchangePrimaryFactorRouteHandler,
  )
  .openapi(deleteV1UsersEmailsEmailIdRoute, deleteV1UsersEmailsEmailIdRouteHandler)
  .openapi(deleteV1UsersPhoneNumbersPhoneIdRoute, deleteV1UsersPhoneNumbersPhoneIdRouteHandler)
  .openapi(
    deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRoute,
    deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRouteHandler,
  )
  .openapi(
    deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRoute,
    deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRouteHandler,
  )
  .openapi(deleteV1UsersTotpsTotpIdRoute, deleteV1UsersTotpsTotpIdRouteHandler)
  .openapi(
    deleteV1UsersCryptoWalletsCryptoWalletIdRoute,
    deleteV1UsersCryptoWalletsCryptoWalletIdRouteHandler,
  )
  .openapi(deleteV1UsersPasswordsPasswordIdRoute, deleteV1UsersPasswordsPasswordIdRouteHandler)
  .openapi(
    deleteV1UsersOauthOauthUserRegistrationIdRoute,
    deleteV1UsersOauthOauthUserRegistrationIdRouteHandler,
  )
  .openapi(deleteV1UsersUserIdExternalIdRoute, deleteV1UsersUserIdExternalIdRouteHandler)
  .openapi(getV1UsersUserIdConnectedAppsRoute, getV1UsersUserIdConnectedAppsRouteHandler)
  .openapi(
    postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRoute,
    postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRouteHandler,
  )
  .openapi(getV1SessionsRoute, getV1SessionsRouteHandler)
  .openapi(postV1SessionsAuthenticateRoute, postV1SessionsAuthenticateRouteHandler)
  .openapi(postV1SessionsRevokeRoute, postV1SessionsRevokeRouteHandler)
  .openapi(postV1SessionsMigrateRoute, postV1SessionsMigrateRouteHandler)
  .openapi(postV1SessionsExchangeAccessTokenRoute, postV1SessionsExchangeAccessTokenRouteHandler)
  .openapi(getV1SessionsJwksProjectIdRoute, getV1SessionsJwksProjectIdRouteHandler)
  .openapi(postV1SessionsAttestRoute, postV1SessionsAttestRouteHandler)
  .openapi(getV1B2bSessionsRoute, getV1B2bSessionsRouteHandler)
  .openapi(postV1B2bSessionsAuthenticateRoute, postV1B2bSessionsAuthenticateRouteHandler)
  .openapi(postV1B2bSessionsRevokeRoute, postV1B2bSessionsRevokeRouteHandler)
  .openapi(postV1B2bSessionsExchangeRoute, postV1B2bSessionsExchangeRouteHandler)
  .openapi(
    postV1B2bSessionsExchangeAccessTokenRoute,
    postV1B2bSessionsExchangeAccessTokenRouteHandler,
  )
  .openapi(postV1B2bSessionsAttestRoute, postV1B2bSessionsAttestRouteHandler)
  .openapi(postV1B2bSessionsMigrateRoute, postV1B2bSessionsMigrateRouteHandler)
  .openapi(getV1B2bSessionsJwksProjectIdRoute, getV1B2bSessionsJwksProjectIdRouteHandler)
  .openapi(postV1B2bImpersonationAuthenticateRoute, postV1B2bImpersonationAuthenticateRouteHandler)
  .openapi(getV1B2bRbacPolicyRoute, getV1B2bRbacPolicyRouteHandler)
  .openapi(
    getV1B2bRbacOrganizationsOrganizationIdRoute,
    getV1B2bRbacOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    putV1B2bRbacOrganizationsOrganizationIdRoute,
    putV1B2bRbacOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(postV1B2bRecoveryCodesRecoverRoute, postV1B2bRecoveryCodesRecoverRouteHandler)
  .openapi(
    getV1B2bRecoveryCodesOrganizationIdMemberIdRoute,
    getV1B2bRecoveryCodesOrganizationIdMemberIdRouteHandler,
  )
  .openapi(postV1B2bRecoveryCodesRotateRoute, postV1B2bRecoveryCodesRotateRouteHandler)
  .openapi(postV1B2bTotpRoute, postV1B2bTotpRouteHandler)
  .openapi(postV1B2bTotpAuthenticateRoute, postV1B2bTotpAuthenticateRouteHandler)
  .openapi(postV1B2bTotpMigrateRoute, postV1B2bTotpMigrateRouteHandler)
  .openapi(getV1RbacPolicyRoute, getV1RbacPolicyRouteHandler)
  .openapi(
    postV1CryptoWalletsAuthenticateStartRoute,
    postV1CryptoWalletsAuthenticateStartRouteHandler,
  )
  .openapi(postV1CryptoWalletsAuthenticateRoute, postV1CryptoWalletsAuthenticateRouteHandler)
  .openapi(getV1DebugWhoamiRoute, getV1DebugWhoamiRouteHandler)
  .openapi(
    postV1B2bDiscoveryIntermediateSessionsExchangeRoute,
    postV1B2bDiscoveryIntermediateSessionsExchangeRouteHandler,
  )
  .openapi(
    postV1B2bDiscoveryOrganizationsCreateRoute,
    postV1B2bDiscoveryOrganizationsCreateRouteHandler,
  )
  .openapi(postV1B2bDiscoveryOrganizationsRoute, postV1B2bDiscoveryOrganizationsRouteHandler)
  .openapi(postV1FingerprintLookupRoute, postV1FingerprintLookupRouteHandler)
  .openapi(postV1RulesSetRoute, postV1RulesSetRouteHandler)
  .openapi(postV1RulesListRoute, postV1RulesListRouteHandler)
  .openapi(postV1VerdictReasonsOverrideRoute, postV1VerdictReasonsOverrideRouteHandler)
  .openapi(postV1VerdictReasonsListRoute, postV1VerdictReasonsListRouteHandler)
  .openapi(postV1EmailRiskRoute, postV1EmailRiskRouteHandler)
  .openapi(postV1IdpOauthAuthorizeStartRoute, postV1IdpOauthAuthorizeStartRouteHandler)
  .openapi(postV1IdpOauthAuthorizeRoute, postV1IdpOauthAuthorizeRouteHandler)
  .openapi(postV1ImpersonationAuthenticateRoute, postV1ImpersonationAuthenticateRouteHandler)
  .openapi(getV1M2mClientsClientIdRoute, getV1M2mClientsClientIdRouteHandler)
  .openapi(putV1M2mClientsClientIdRoute, putV1M2mClientsClientIdRouteHandler)
  .openapi(deleteV1M2mClientsClientIdRoute, deleteV1M2mClientsClientIdRouteHandler)
  .openapi(postV1M2mClientsSearchRoute, postV1M2mClientsSearchRouteHandler)
  .openapi(postV1M2mClientsRoute, postV1M2mClientsRouteHandler)
  .openapi(
    postV1M2mClientsClientIdSecretsRotateStartRoute,
    postV1M2mClientsClientIdSecretsRotateStartRouteHandler,
  )
  .openapi(
    postV1M2mClientsClientIdSecretsRotateCancelRoute,
    postV1M2mClientsClientIdSecretsRotateCancelRouteHandler,
  )
  .openapi(
    postV1M2mClientsClientIdSecretsRotateRoute,
    postV1M2mClientsClientIdSecretsRotateRouteHandler,
  )
  .openapi(postV1MagicLinksAuthenticateRoute, postV1MagicLinksAuthenticateRouteHandler)
  .openapi(postV1MagicLinksRoute, postV1MagicLinksRouteHandler)
  .openapi(postV1MagicLinksEmailSendRoute, postV1MagicLinksEmailSendRouteHandler)
  .openapi(postV1MagicLinksEmailLoginOrCreateRoute, postV1MagicLinksEmailLoginOrCreateRouteHandler)
  .openapi(postV1MagicLinksEmailInviteRoute, postV1MagicLinksEmailInviteRouteHandler)
  .openapi(postV1MagicLinksEmailRevokeInviteRoute, postV1MagicLinksEmailRevokeInviteRouteHandler)
  .openapi(postV1B2bMagicLinksAuthenticateRoute, postV1B2bMagicLinksAuthenticateRouteHandler)
  .openapi(
    postV1B2bMagicLinksEmailLoginOrSignupRoute,
    postV1B2bMagicLinksEmailLoginOrSignupRouteHandler,
  )
  .openapi(postV1B2bMagicLinksEmailInviteRoute, postV1B2bMagicLinksEmailInviteRouteHandler)
  .openapi(
    postV1B2bMagicLinksEmailDiscoverySendRoute,
    postV1B2bMagicLinksEmailDiscoverySendRouteHandler,
  )
  .openapi(
    postV1B2bMagicLinksDiscoveryAuthenticateRoute,
    postV1B2bMagicLinksDiscoveryAuthenticateRouteHandler,
  )
  .openapi(postV1B2bOauthAuthenticateRoute, postV1B2bOauthAuthenticateRouteHandler)
  .openapi(
    postV1B2bOauthDiscoveryAuthenticateRoute,
    postV1B2bOauthDiscoveryAuthenticateRouteHandler,
  )
  .openapi(postV1B2bOtpsSmsSendRoute, postV1B2bOtpsSmsSendRouteHandler)
  .openapi(postV1B2bOtpsSmsAuthenticateRoute, postV1B2bOtpsSmsAuthenticateRouteHandler)
  .openapi(postV1B2bOtpsEmailLoginOrSignupRoute, postV1B2bOtpsEmailLoginOrSignupRouteHandler)
  .openapi(postV1B2bOtpsEmailAuthenticateRoute, postV1B2bOtpsEmailAuthenticateRouteHandler)
  .openapi(postV1B2bOtpsEmailDiscoverySendRoute, postV1B2bOtpsEmailDiscoverySendRouteHandler)
  .openapi(
    postV1B2bOtpsEmailDiscoveryAuthenticateRoute,
    postV1B2bOtpsEmailDiscoveryAuthenticateRouteHandler,
  )
  .openapi(postV1PasswordsRoute, postV1PasswordsRouteHandler)
  .openapi(postV1PasswordsAuthenticateRoute, postV1PasswordsAuthenticateRouteHandler)
  .openapi(postV1PasswordsStrengthCheckRoute, postV1PasswordsStrengthCheckRouteHandler)
  .openapi(postV1PasswordsMigrateRoute, postV1PasswordsMigrateRouteHandler)
  .openapi(postV1PasswordsEmailResetStartRoute, postV1PasswordsEmailResetStartRouteHandler)
  .openapi(postV1PasswordsEmailResetRoute, postV1PasswordsEmailResetRouteHandler)
  .openapi(
    postV1PasswordsExistingPasswordResetRoute,
    postV1PasswordsExistingPasswordResetRouteHandler,
  )
  .openapi(postV1PasswordsSessionResetRoute, postV1PasswordsSessionResetRouteHandler)
  .openapi(postV1B2bPasswordsStrengthCheckRoute, postV1B2bPasswordsStrengthCheckRouteHandler)
  .openapi(postV1B2bPasswordsMigrateRoute, postV1B2bPasswordsMigrateRouteHandler)
  .openapi(postV1B2bPasswordsAuthenticateRoute, postV1B2bPasswordsAuthenticateRouteHandler)
  .openapi(postV1B2bPasswordsEmailResetStartRoute, postV1B2bPasswordsEmailResetStartRouteHandler)
  .openapi(postV1B2bPasswordsEmailResetRoute, postV1B2bPasswordsEmailResetRouteHandler)
  .openapi(
    postV1B2bPasswordsEmailRequireResetRoute,
    postV1B2bPasswordsEmailRequireResetRouteHandler,
  )
  .openapi(postV1B2bPasswordsSessionResetRoute, postV1B2bPasswordsSessionResetRouteHandler)
  .openapi(
    postV1B2bPasswordsExistingPasswordResetRoute,
    postV1B2bPasswordsExistingPasswordResetRouteHandler,
  )
  .openapi(
    postV1B2bPasswordsDiscoveryAuthenticateRoute,
    postV1B2bPasswordsDiscoveryAuthenticateRouteHandler,
  )
  .openapi(
    postV1B2bPasswordsDiscoveryEmailResetStartRoute,
    postV1B2bPasswordsDiscoveryEmailResetStartRouteHandler,
  )
  .openapi(
    postV1B2bPasswordsDiscoveryEmailResetRoute,
    postV1B2bPasswordsDiscoveryEmailResetRouteHandler,
  )
  .openapi(postV1OauthAttachRoute, postV1OauthAttachRouteHandler)
  .openapi(postV1OauthAuthenticateRoute, postV1OauthAuthenticateRouteHandler)
  .openapi(postV1OtpsAuthenticateRoute, postV1OtpsAuthenticateRouteHandler)
  .openapi(postV1OtpsSmsSendRoute, postV1OtpsSmsSendRouteHandler)
  .openapi(postV1OtpsSmsLoginOrCreateRoute, postV1OtpsSmsLoginOrCreateRouteHandler)
  .openapi(postV1OtpsWhatsappSendRoute, postV1OtpsWhatsappSendRouteHandler)
  .openapi(postV1OtpsWhatsappLoginOrCreateRoute, postV1OtpsWhatsappLoginOrCreateRouteHandler)
  .openapi(postV1OtpsEmailSendRoute, postV1OtpsEmailSendRouteHandler)
  .openapi(postV1OtpsEmailLoginOrCreateRoute, postV1OtpsEmailLoginOrCreateRouteHandler)
  .openapi(getV1ProjectsMetricsRoute, getV1ProjectsMetricsRouteHandler)
  .openapi(getV1B2bSsoOrganizationIdRoute, getV1B2bSsoOrganizationIdRouteHandler)
  .openapi(
    deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRoute,
    deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRouteHandler,
  )
  .openapi(postV1B2bSsoAuthenticateRoute, postV1B2bSsoAuthenticateRouteHandler)
  .openapi(postV1B2bSsoOidcOrganizationIdRoute, postV1B2bSsoOidcOrganizationIdRouteHandler)
  .openapi(
    putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRoute,
    putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRouteHandler,
  )
  .openapi(postV1B2bSsoSamlOrganizationIdRoute, postV1B2bSsoSamlOrganizationIdRouteHandler)
  .openapi(
    putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRoute,
    putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRouteHandler,
  )
  .openapi(
    putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRoute,
    putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRouteHandler,
  )
  .openapi(
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRoute,
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRouteHandler,
  )
  .openapi(
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRoute,
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRouteHandler,
  )
  .openapi(postV1B2bSsoExternalOrganizationIdRoute, postV1B2bSsoExternalOrganizationIdRouteHandler)
  .openapi(
    putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRoute,
    putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRouteHandler,
  )
  .openapi(postV1TotpsRoute, postV1TotpsRouteHandler)
  .openapi(postV1TotpsAuthenticateRoute, postV1TotpsAuthenticateRouteHandler)
  .openapi(postV1TotpsRecoveryCodesRoute, postV1TotpsRecoveryCodesRouteHandler)
  .openapi(postV1TotpsRecoverRoute, postV1TotpsRecoverRouteHandler)
  .openapi(postV1WebauthnRegisterStartRoute, postV1WebauthnRegisterStartRouteHandler)
  .openapi(postV1WebauthnRegisterRoute, postV1WebauthnRegisterRouteHandler)
  .openapi(postV1WebauthnAuthenticateStartRoute, postV1WebauthnAuthenticateStartRouteHandler)
  .openapi(postV1WebauthnAuthenticateRoute, postV1WebauthnAuthenticateRouteHandler)
  .openapi(
    putV1WebauthnWebauthnRegistrationIdRoute,
    putV1WebauthnWebauthnRegistrationIdRouteHandler,
  )
  .openapi(
    getV1WebauthnCredentialsUserIdDomainRoute,
    getV1WebauthnCredentialsUserIdDomainRouteHandler,
  )

export default app
