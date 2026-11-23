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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ConnectedAppsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConnectedAppsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectedAppsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsClientIdSecretsRotateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsClientIdSecretsRotateCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsClientIdSecretsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bScimOrganizationIdConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bScimOrganizationIdConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bScimOrganizationIdConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bScimOrganizationIdConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdConnectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bOrganizationsOrganizationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsMembersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsMembersDangerouslyGetMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1B2bIdpOauthAuthorizeStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bIdpOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdExchangePrimaryFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersPhoneNumbersPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersBiometricRegistrationsBiometricRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersTotpsTotpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersCryptoWalletsCryptoWalletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersPasswordsPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersOauthOauthUserRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdConnectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUserIdConnectedAppsConnectedAppIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsExchangeAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionsJwksProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsAttestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsExchangeAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsAttestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bSessionsJwksProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bImpersonationAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bRbacPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bRbacOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bRbacOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bRecoveryCodesRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bRecoveryCodesOrganizationIdMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bRecoveryCodesRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bTotpAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bTotpMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RbacPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CryptoWalletsAuthenticateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CryptoWalletsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebugWhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bDiscoveryIntermediateSessionsExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bDiscoveryOrganizationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bDiscoveryOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FingerprintLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RulesSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RulesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VerdictReasonsOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VerdictReasonsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdpOauthAuthorizeStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdpOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ImpersonationAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1M2mClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1M2mClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1M2mClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsClientIdSecretsRotateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsClientIdSecretsRotateCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsClientIdSecretsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksEmailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksEmailLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksEmailInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksEmailRevokeInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bMagicLinksAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bMagicLinksEmailLoginOrSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bMagicLinksEmailInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bMagicLinksEmailDiscoverySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bMagicLinksDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOauthAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOauthDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsSmsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsSmsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailLoginOrSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailDiscoverySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsStrengthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsEmailResetStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsEmailResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsExistingPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsSessionResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsStrengthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsEmailResetStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsEmailResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsEmailRequireResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsSessionResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsExistingPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsDiscoveryEmailResetStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsDiscoveryEmailResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsSmsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsSmsLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsWhatsappSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsWhatsappLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsEmailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsEmailLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bSsoOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSsoAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSsoOidcOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSsoSamlOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1B2bSsoExternalOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TotpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TotpsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TotpsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TotpsRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebauthnRegisterStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebauthnRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebauthnAuthenticateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebauthnAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WebauthnWebauthnRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebauthnCredentialsUserIdDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
