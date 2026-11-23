import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getV1ConnectedAppsClientsClientIdRouteHandler: RouteHandler<
  typeof getV1ConnectedAppsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConnectedAppsClientsClientIdRouteHandler: RouteHandler<
  typeof putV1ConnectedAppsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectedAppsClientsClientIdRouteHandler: RouteHandler<
  typeof deleteV1ConnectedAppsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectedAppsClientsSearchRouteHandler: RouteHandler<
  typeof postV1ConnectedAppsClientsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectedAppsClientsRouteHandler: RouteHandler<
  typeof postV1ConnectedAppsClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectedAppsClientsClientIdSecretsRotateStartRouteHandler: RouteHandler<
  typeof postV1ConnectedAppsClientsClientIdSecretsRotateStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectedAppsClientsClientIdSecretsRotateCancelRouteHandler: RouteHandler<
  typeof postV1ConnectedAppsClientsClientIdSecretsRotateCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectedAppsClientsClientIdSecretsRotateRouteHandler: RouteHandler<
  typeof postV1ConnectedAppsClientsClientIdSecretsRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler: RouteHandler<
  typeof putV1B2bScimOrganizationIdConnectionConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler: RouteHandler<
  typeof deleteV1B2bScimOrganizationIdConnectionConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bScimOrganizationIdConnectionConnectionIdRouteHandler: RouteHandler<
  typeof getV1B2bScimOrganizationIdConnectionConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRouteHandler: RouteHandler<
  typeof postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRouteHandler: RouteHandler<
  typeof postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRouteHandler: RouteHandler<
  typeof postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bScimOrganizationIdConnectionRouteHandler: RouteHandler<
  typeof postV1B2bScimOrganizationIdConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bScimOrganizationIdConnectionRouteHandler: RouteHandler<
  typeof getV1B2bScimOrganizationIdConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOrganizationsRouteHandler: RouteHandler<
  typeof postV1B2bOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof putV1B2bOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof deleteV1B2bOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOrganizationsSearchRouteHandler: RouteHandler<
  typeof postV1B2bOrganizationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMetricsRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdConnectedAppsRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdConnectedAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bOrganizationsOrganizationIdExternalIdRouteHandler: RouteHandler<
  typeof deleteV1B2bOrganizationsOrganizationIdExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bOrganizationsOrganizationIdMembersMemberIdRouteHandler: RouteHandler<
  typeof putV1B2bOrganizationsOrganizationIdMembersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRouteHandler: RouteHandler<
  typeof deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRouteHandler: RouteHandler<
  typeof putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRouteHandler: RouteHandler<
  typeof deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRouteHandler: RouteHandler<
  typeof deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOrganizationsMembersSearchRouteHandler: RouteHandler<
  typeof postV1B2bOrganizationsMembersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRouteHandler: RouteHandler<
  typeof deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsMembersDangerouslyGetMemberIdRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsMembersDangerouslyGetMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRouteHandler: RouteHandler<
  typeof postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRouteHandler: RouteHandler<
  typeof postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRouteHandler: RouteHandler<
  typeof deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOrganizationsOrganizationIdMembersRouteHandler: RouteHandler<
  typeof postV1B2bOrganizationsOrganizationIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMemberRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRouteHandler: RouteHandler<
  typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRouteHandler: RouteHandler<
  typeof postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bIdpOauthAuthorizeStartRouteHandler: RouteHandler<
  typeof postV1B2bIdpOauthAuthorizeStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bIdpOauthAuthorizeRouteHandler: RouteHandler<
  typeof postV1B2bIdpOauthAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersRouteHandler: RouteHandler<typeof postV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdRouteHandler: RouteHandler<typeof getV1UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdRouteHandler: RouteHandler<typeof putV1UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersUserIdRouteHandler: RouteHandler<
  typeof deleteV1UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersSearchRouteHandler: RouteHandler<typeof postV1UsersSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdExchangePrimaryFactorRouteHandler: RouteHandler<
  typeof putV1UsersUserIdExchangePrimaryFactorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersEmailsEmailIdRouteHandler: RouteHandler<
  typeof deleteV1UsersEmailsEmailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersPhoneNumbersPhoneIdRouteHandler: RouteHandler<
  typeof deleteV1UsersPhoneNumbersPhoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRouteHandler: RouteHandler<
  typeof deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRouteHandler: RouteHandler<
  typeof deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersTotpsTotpIdRouteHandler: RouteHandler<
  typeof deleteV1UsersTotpsTotpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersCryptoWalletsCryptoWalletIdRouteHandler: RouteHandler<
  typeof deleteV1UsersCryptoWalletsCryptoWalletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersPasswordsPasswordIdRouteHandler: RouteHandler<
  typeof deleteV1UsersPasswordsPasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersOauthOauthUserRegistrationIdRouteHandler: RouteHandler<
  typeof deleteV1UsersOauthOauthUserRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersUserIdExternalIdRouteHandler: RouteHandler<
  typeof deleteV1UsersUserIdExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdConnectedAppsRouteHandler: RouteHandler<
  typeof getV1UsersUserIdConnectedAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRouteHandler: RouteHandler<
  typeof postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SessionsRouteHandler: RouteHandler<typeof getV1SessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionsAuthenticateRouteHandler: RouteHandler<
  typeof postV1SessionsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionsRevokeRouteHandler: RouteHandler<
  typeof postV1SessionsRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionsMigrateRouteHandler: RouteHandler<
  typeof postV1SessionsMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionsExchangeAccessTokenRouteHandler: RouteHandler<
  typeof postV1SessionsExchangeAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SessionsJwksProjectIdRouteHandler: RouteHandler<
  typeof getV1SessionsJwksProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionsAttestRouteHandler: RouteHandler<
  typeof postV1SessionsAttestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bSessionsRouteHandler: RouteHandler<typeof getV1B2bSessionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1B2bSessionsAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bSessionsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSessionsRevokeRouteHandler: RouteHandler<
  typeof postV1B2bSessionsRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSessionsExchangeRouteHandler: RouteHandler<
  typeof postV1B2bSessionsExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSessionsExchangeAccessTokenRouteHandler: RouteHandler<
  typeof postV1B2bSessionsExchangeAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSessionsAttestRouteHandler: RouteHandler<
  typeof postV1B2bSessionsAttestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSessionsMigrateRouteHandler: RouteHandler<
  typeof postV1B2bSessionsMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bSessionsJwksProjectIdRouteHandler: RouteHandler<
  typeof getV1B2bSessionsJwksProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bImpersonationAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bImpersonationAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bRbacPolicyRouteHandler: RouteHandler<typeof getV1B2bRbacPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1B2bRbacOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getV1B2bRbacOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bRbacOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof putV1B2bRbacOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bRecoveryCodesRecoverRouteHandler: RouteHandler<
  typeof postV1B2bRecoveryCodesRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bRecoveryCodesOrganizationIdMemberIdRouteHandler: RouteHandler<
  typeof getV1B2bRecoveryCodesOrganizationIdMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bRecoveryCodesRotateRouteHandler: RouteHandler<
  typeof postV1B2bRecoveryCodesRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bTotpRouteHandler: RouteHandler<typeof postV1B2bTotpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bTotpAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bTotpAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bTotpMigrateRouteHandler: RouteHandler<
  typeof postV1B2bTotpMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RbacPolicyRouteHandler: RouteHandler<typeof getV1RbacPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CryptoWalletsAuthenticateStartRouteHandler: RouteHandler<
  typeof postV1CryptoWalletsAuthenticateStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CryptoWalletsAuthenticateRouteHandler: RouteHandler<
  typeof postV1CryptoWalletsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DebugWhoamiRouteHandler: RouteHandler<typeof getV1DebugWhoamiRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1B2bDiscoveryIntermediateSessionsExchangeRouteHandler: RouteHandler<
  typeof postV1B2bDiscoveryIntermediateSessionsExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bDiscoveryOrganizationsCreateRouteHandler: RouteHandler<
  typeof postV1B2bDiscoveryOrganizationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bDiscoveryOrganizationsRouteHandler: RouteHandler<
  typeof postV1B2bDiscoveryOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FingerprintLookupRouteHandler: RouteHandler<
  typeof postV1FingerprintLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RulesSetRouteHandler: RouteHandler<typeof postV1RulesSetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RulesListRouteHandler: RouteHandler<typeof postV1RulesListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VerdictReasonsOverrideRouteHandler: RouteHandler<
  typeof postV1VerdictReasonsOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VerdictReasonsListRouteHandler: RouteHandler<
  typeof postV1VerdictReasonsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EmailRiskRouteHandler: RouteHandler<typeof postV1EmailRiskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IdpOauthAuthorizeStartRouteHandler: RouteHandler<
  typeof postV1IdpOauthAuthorizeStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IdpOauthAuthorizeRouteHandler: RouteHandler<
  typeof postV1IdpOauthAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ImpersonationAuthenticateRouteHandler: RouteHandler<
  typeof postV1ImpersonationAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1M2mClientsClientIdRouteHandler: RouteHandler<
  typeof getV1M2mClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1M2mClientsClientIdRouteHandler: RouteHandler<
  typeof putV1M2mClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1M2mClientsClientIdRouteHandler: RouteHandler<
  typeof deleteV1M2mClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1M2mClientsSearchRouteHandler: RouteHandler<
  typeof postV1M2mClientsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1M2mClientsRouteHandler: RouteHandler<typeof postV1M2mClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1M2mClientsClientIdSecretsRotateStartRouteHandler: RouteHandler<
  typeof postV1M2mClientsClientIdSecretsRotateStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1M2mClientsClientIdSecretsRotateCancelRouteHandler: RouteHandler<
  typeof postV1M2mClientsClientIdSecretsRotateCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1M2mClientsClientIdSecretsRotateRouteHandler: RouteHandler<
  typeof postV1M2mClientsClientIdSecretsRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MagicLinksAuthenticateRouteHandler: RouteHandler<
  typeof postV1MagicLinksAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MagicLinksRouteHandler: RouteHandler<typeof postV1MagicLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1MagicLinksEmailSendRouteHandler: RouteHandler<
  typeof postV1MagicLinksEmailSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MagicLinksEmailLoginOrCreateRouteHandler: RouteHandler<
  typeof postV1MagicLinksEmailLoginOrCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MagicLinksEmailInviteRouteHandler: RouteHandler<
  typeof postV1MagicLinksEmailInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MagicLinksEmailRevokeInviteRouteHandler: RouteHandler<
  typeof postV1MagicLinksEmailRevokeInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bMagicLinksAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bMagicLinksAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bMagicLinksEmailLoginOrSignupRouteHandler: RouteHandler<
  typeof postV1B2bMagicLinksEmailLoginOrSignupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bMagicLinksEmailInviteRouteHandler: RouteHandler<
  typeof postV1B2bMagicLinksEmailInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bMagicLinksEmailDiscoverySendRouteHandler: RouteHandler<
  typeof postV1B2bMagicLinksEmailDiscoverySendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bMagicLinksDiscoveryAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bMagicLinksDiscoveryAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOauthAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bOauthAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOauthDiscoveryAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bOauthDiscoveryAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOtpsSmsSendRouteHandler: RouteHandler<
  typeof postV1B2bOtpsSmsSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOtpsSmsAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bOtpsSmsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOtpsEmailLoginOrSignupRouteHandler: RouteHandler<
  typeof postV1B2bOtpsEmailLoginOrSignupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOtpsEmailAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bOtpsEmailAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOtpsEmailDiscoverySendRouteHandler: RouteHandler<
  typeof postV1B2bOtpsEmailDiscoverySendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bOtpsEmailDiscoveryAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bOtpsEmailDiscoveryAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsRouteHandler: RouteHandler<typeof postV1PasswordsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsAuthenticateRouteHandler: RouteHandler<
  typeof postV1PasswordsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsStrengthCheckRouteHandler: RouteHandler<
  typeof postV1PasswordsStrengthCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsMigrateRouteHandler: RouteHandler<
  typeof postV1PasswordsMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsEmailResetStartRouteHandler: RouteHandler<
  typeof postV1PasswordsEmailResetStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsEmailResetRouteHandler: RouteHandler<
  typeof postV1PasswordsEmailResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsExistingPasswordResetRouteHandler: RouteHandler<
  typeof postV1PasswordsExistingPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PasswordsSessionResetRouteHandler: RouteHandler<
  typeof postV1PasswordsSessionResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsStrengthCheckRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsStrengthCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsMigrateRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsEmailResetStartRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsEmailResetStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsEmailResetRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsEmailResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsEmailRequireResetRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsEmailRequireResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsSessionResetRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsSessionResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsExistingPasswordResetRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsExistingPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsDiscoveryAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsDiscoveryAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsDiscoveryEmailResetStartRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsDiscoveryEmailResetStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bPasswordsDiscoveryEmailResetRouteHandler: RouteHandler<
  typeof postV1B2bPasswordsDiscoveryEmailResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OauthAttachRouteHandler: RouteHandler<typeof postV1OauthAttachRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1OauthAuthenticateRouteHandler: RouteHandler<
  typeof postV1OauthAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OtpsAuthenticateRouteHandler: RouteHandler<
  typeof postV1OtpsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OtpsSmsSendRouteHandler: RouteHandler<typeof postV1OtpsSmsSendRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1OtpsSmsLoginOrCreateRouteHandler: RouteHandler<
  typeof postV1OtpsSmsLoginOrCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OtpsWhatsappSendRouteHandler: RouteHandler<
  typeof postV1OtpsWhatsappSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OtpsWhatsappLoginOrCreateRouteHandler: RouteHandler<
  typeof postV1OtpsWhatsappLoginOrCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OtpsEmailSendRouteHandler: RouteHandler<
  typeof postV1OtpsEmailSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OtpsEmailLoginOrCreateRouteHandler: RouteHandler<
  typeof postV1OtpsEmailLoginOrCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsMetricsRouteHandler: RouteHandler<
  typeof getV1ProjectsMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1B2bSsoOrganizationIdRouteHandler: RouteHandler<
  typeof getV1B2bSsoOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSsoAuthenticateRouteHandler: RouteHandler<
  typeof postV1B2bSsoAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSsoOidcOrganizationIdRouteHandler: RouteHandler<
  typeof postV1B2bSsoOidcOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSsoSamlOrganizationIdRouteHandler: RouteHandler<
  typeof postV1B2bSsoSamlOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRouteHandler: RouteHandler<
  typeof putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRouteHandler: RouteHandler<
  typeof deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1B2bSsoExternalOrganizationIdRouteHandler: RouteHandler<
  typeof postV1B2bSsoExternalOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TotpsRouteHandler: RouteHandler<typeof postV1TotpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TotpsAuthenticateRouteHandler: RouteHandler<
  typeof postV1TotpsAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TotpsRecoveryCodesRouteHandler: RouteHandler<
  typeof postV1TotpsRecoveryCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TotpsRecoverRouteHandler: RouteHandler<typeof postV1TotpsRecoverRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1WebauthnRegisterStartRouteHandler: RouteHandler<
  typeof postV1WebauthnRegisterStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebauthnRegisterRouteHandler: RouteHandler<
  typeof postV1WebauthnRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebauthnAuthenticateStartRouteHandler: RouteHandler<
  typeof postV1WebauthnAuthenticateStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebauthnAuthenticateRouteHandler: RouteHandler<
  typeof postV1WebauthnAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WebauthnWebauthnRegistrationIdRouteHandler: RouteHandler<
  typeof putV1WebauthnWebauthnRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebauthnCredentialsUserIdDomainRouteHandler: RouteHandler<
  typeof getV1WebauthnCredentialsUserIdDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
