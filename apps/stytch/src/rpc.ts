import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ConnectedAppsClientsClientId(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connected_apps.clients[':client_id'].$get(args, options))
}

export async function putV1ConnectedAppsClientsClientId(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connected_apps.clients[':client_id'].$put(args, options))
}

export async function deleteV1ConnectedAppsClientsClientId(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connected_apps.clients[':client_id'].$delete(args, options))
}

export async function postV1ConnectedAppsClientsSearch(
  args: InferRequestType<typeof client.v1.connected_apps.clients.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connected_apps.clients.search.$post(args, options))
}

export async function postV1ConnectedAppsClients(
  args: InferRequestType<typeof client.v1.connected_apps.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connected_apps.clients.$post(args, options))
}

export async function postV1ConnectedAppsClientsClientIdSecretsRotateStart(
  args: InferRequestType<
    (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connected_apps.clients[':client_id'].secrets.rotate.start.$post(args, options),
  )
}

export async function postV1ConnectedAppsClientsClientIdSecretsRotateCancel(
  args: InferRequestType<
    (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connected_apps.clients[':client_id'].secrets.rotate.cancel.$post(args, options),
  )
}

export async function postV1ConnectedAppsClientsClientIdSecretsRotate(
  args: InferRequestType<
    (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connected_apps.clients[':client_id'].secrets.rotate.$post(args, options),
  )
}

export async function getV1B2bScimOrganizationIdConnectionConnectionId(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$get(args, options),
  )
}

export async function putV1B2bScimOrganizationIdConnectionConnectionId(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$put(args, options),
  )
}

export async function deleteV1B2bScimOrganizationIdConnectionConnectionId(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$delete(args, options),
  )
}

export async function postV1B2bScimOrganizationIdConnectionConnectionIdRotateStart(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.start.$post(
      args,
      options,
    ),
  )
}

export async function postV1B2bScimOrganizationIdConnectionConnectionIdRotateComplete(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.complete.$post(
      args,
      options,
    ),
  )
}

export async function postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancel(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.cancel.$post(
      args,
      options,
    ),
  )
}

export async function getV1B2bScimOrganizationIdConnection(
  args: InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.scim[':organization_id'].connection.$get(args, options))
}

export async function postV1B2bScimOrganizationIdConnection(
  args: InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.scim[':organization_id'].connection.$post(args, options))
}

export async function postV1B2bOrganizations(
  args: InferRequestType<typeof client.v1.b2b.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.organizations.$post(args, options))
}

export async function getV1B2bOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.organizations[':organization_id'].$get(args, options))
}

export async function putV1B2bOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.organizations[':organization_id'].$put(args, options))
}

export async function deleteV1B2bOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.organizations[':organization_id'].$delete(args, options))
}

export async function postV1B2bOrganizationsSearch(
  args: InferRequestType<typeof client.v1.b2b.organizations.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.organizations.search.$post(args, options))
}

export async function getV1B2bOrganizationsOrganizationIdMetrics(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].metrics.$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdConnectedApps(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].connected_apps.$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].connected_apps[':connected_app_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1B2bOrganizationsOrganizationIdExternalId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].external_id.$delete(args, options),
  )
}

export async function putV1B2bOrganizationsOrganizationIdMembersMemberId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].$put(args, options),
  )
}

export async function deleteV1B2bOrganizationsOrganizationIdMembersMemberId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].$delete(args, options),
  )
}

export async function putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivate(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].reactivate.$put(
      args,
      options,
    ),
  )
}

export async function deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members.mfa_phone_numbers[':member_id'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotp(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].totp.$delete(
      args,
      options,
    ),
  )
}

export async function postV1B2bOrganizationsMembersSearch(
  args: InferRequestType<typeof client.v1.b2b.organizations.members.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.organizations.members.search.$post(args, options))
}

export async function deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members.passwords[
      ':member_password_id'
    ].$delete(args, options),
  )
}

export async function getV1B2bOrganizationsMembersDangerouslyGetMemberId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations.members.dangerously_get[':member_id'].$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProviders(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].oidc_providers.$get(
      args,
      options,
    ),
  )
}

export async function postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmail(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[
      ':member_id'
    ].unlink_retired_email.$post(args, options),
  )
}

export async function postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdate(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].start_email_update.$post(
      args,
      options,
    ),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedApps(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].connected_apps.$get(
      args,
      options,
    ),
  )
}

export async function deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalId(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].external_id.$delete(
      args,
      options,
    ),
  )
}

export async function postV1B2bOrganizationsOrganizationIdMembers(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members.$post(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMember(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].member.$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogle(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[
      ':member_id'
    ].oauth_providers.google.$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoft(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[
      ':member_id'
    ].oauth_providers.microsoft.$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlack(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[
      ':member_id'
    ].oauth_providers.slack.$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspot(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[
      ':member_id'
    ].oauth_providers.hubspot.$get(args, options),
  )
}

export async function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithub(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[
      ':member_id'
    ].oauth_providers.github.$get(args, options),
  )
}

export async function postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevoke(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.organizations[':organization_id'].members[':member_id'].connected_apps[
      ':connected_app_id'
    ].revoke.$post(args, options),
  )
}

export async function postV1B2bIdpOauthAuthorizeStart(
  args: InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.idp.oauth.authorize.start.$post(args, options))
}

export async function postV1B2bIdpOauthAuthorize(
  args: InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.idp.oauth.authorize.$post(args, options))
}

export async function postV1Users(
  args: InferRequestType<typeof client.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.$post(args, options))
}

export async function getV1UsersUserId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].$get(args, options))
}

export async function putV1UsersUserId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].$put(args, options))
}

export async function deleteV1UsersUserId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].$delete(args, options))
}

export async function postV1UsersSearch(
  args: InferRequestType<typeof client.v1.users.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.search.$post(args, options))
}

export async function putV1UsersUserIdExchangePrimaryFactor(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].exchange_primary_factor.$put(args, options),
  )
}

export async function deleteV1UsersEmailsEmailId(
  args: InferRequestType<(typeof client.v1.users.emails)[':email_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.emails[':email_id'].$delete(args, options))
}

export async function deleteV1UsersPhoneNumbersPhoneId(
  args: InferRequestType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.phone_numbers[':phone_id'].$delete(args, options))
}

export async function deleteV1UsersWebauthnRegistrationsWebauthnRegistrationId(
  args: InferRequestType<
    (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users.webauthn_registrations[':webauthn_registration_id'].$delete(args, options),
  )
}

export async function deleteV1UsersBiometricRegistrationsBiometricRegistrationId(
  args: InferRequestType<
    (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users.biometric_registrations[':biometric_registration_id'].$delete(args, options),
  )
}

export async function deleteV1UsersTotpsTotpId(
  args: InferRequestType<(typeof client.v1.users.totps)[':totp_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.totps[':totp_id'].$delete(args, options))
}

export async function deleteV1UsersCryptoWalletsCryptoWalletId(
  args: InferRequestType<(typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users.crypto_wallets[':crypto_wallet_id'].$delete(args, options),
  )
}

export async function deleteV1UsersPasswordsPasswordId(
  args: InferRequestType<(typeof client.v1.users.passwords)[':password_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.passwords[':password_id'].$delete(args, options))
}

export async function deleteV1UsersOauthOauthUserRegistrationId(
  args: InferRequestType<(typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users.oauth[':oauth_user_registration_id'].$delete(args, options),
  )
}

export async function deleteV1UsersUserIdExternalId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].external_id.$delete(args, options))
}

export async function getV1UsersUserIdConnectedApps(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].connected_apps.$get(args, options))
}

export async function postV1UsersUserIdConnectedAppsConnectedAppIdRevoke(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].connected_apps[':connected_app_id'].revoke.$post(args, options),
  )
}

export async function getV1Sessions(
  args: InferRequestType<typeof client.v1.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.$get(args, options))
}

export async function postV1SessionsAuthenticate(
  args: InferRequestType<typeof client.v1.sessions.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.authenticate.$post(args, options))
}

export async function postV1SessionsRevoke(
  args: InferRequestType<typeof client.v1.sessions.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.revoke.$post(args, options))
}

export async function postV1SessionsMigrate(
  args: InferRequestType<typeof client.v1.sessions.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.migrate.$post(args, options))
}

export async function postV1SessionsExchangeAccessToken(
  args: InferRequestType<typeof client.v1.sessions.exchange_access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.exchange_access_token.$post(args, options))
}

export async function getV1SessionsJwksProjectId(
  args: InferRequestType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.jwks[':project_id'].$get(args, options))
}

export async function postV1SessionsAttest(
  args: InferRequestType<typeof client.v1.sessions.attest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.attest.$post(args, options))
}

export async function getV1B2bSessions(
  args: InferRequestType<typeof client.v1.b2b.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.$get(args, options))
}

export async function postV1B2bSessionsAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.sessions.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.authenticate.$post(args, options))
}

export async function postV1B2bSessionsRevoke(
  args: InferRequestType<typeof client.v1.b2b.sessions.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.revoke.$post(args, options))
}

export async function postV1B2bSessionsExchange(
  args: InferRequestType<typeof client.v1.b2b.sessions.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.exchange.$post(args, options))
}

export async function postV1B2bSessionsExchangeAccessToken(
  args: InferRequestType<typeof client.v1.b2b.sessions.exchange_access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.exchange_access_token.$post(args, options))
}

export async function postV1B2bSessionsAttest(
  args: InferRequestType<typeof client.v1.b2b.sessions.attest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.attest.$post(args, options))
}

export async function postV1B2bSessionsMigrate(
  args: InferRequestType<typeof client.v1.b2b.sessions.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.migrate.$post(args, options))
}

export async function getV1B2bSessionsJwksProjectId(
  args: InferRequestType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sessions.jwks[':project_id'].$get(args, options))
}

export async function postV1B2bImpersonationAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.impersonation.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.impersonation.authenticate.$post(args, options))
}

export async function getV1B2bRbacPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.b2b.rbac.policy.$get(undefined, options))
}

export async function getV1B2bRbacOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.rbac.organizations[':organization_id'].$get(args, options),
  )
}

export async function putV1B2bRbacOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.rbac.organizations[':organization_id'].$put(args, options),
  )
}

export async function postV1B2bRecoveryCodesRecover(
  args: InferRequestType<typeof client.v1.b2b.recovery_codes.recover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.recovery_codes.recover.$post(args, options))
}

export async function getV1B2bRecoveryCodesOrganizationIdMemberId(
  args: InferRequestType<
    (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.recovery_codes[':organization_id'][':member_id'].$get(args, options),
  )
}

export async function postV1B2bRecoveryCodesRotate(
  args: InferRequestType<typeof client.v1.b2b.recovery_codes.rotate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.recovery_codes.rotate.$post(args, options))
}

export async function postV1B2bTotp(
  args: InferRequestType<typeof client.v1.b2b.totp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.totp.$post(args, options))
}

export async function postV1B2bTotpAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.totp.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.totp.authenticate.$post(args, options))
}

export async function postV1B2bTotpMigrate(
  args: InferRequestType<typeof client.v1.b2b.totp.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.totp.migrate.$post(args, options))
}

export async function getV1RbacPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.rbac.policy.$get(undefined, options))
}

export async function postV1CryptoWalletsAuthenticateStart(
  args: InferRequestType<typeof client.v1.crypto_wallets.authenticate.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.crypto_wallets.authenticate.start.$post(args, options))
}

export async function postV1CryptoWalletsAuthenticate(
  args: InferRequestType<typeof client.v1.crypto_wallets.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.crypto_wallets.authenticate.$post(args, options))
}

export async function getV1DebugWhoami(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.debug.whoami.$get(undefined, options))
}

export async function postV1B2bDiscoveryIntermediateSessionsExchange(
  args: InferRequestType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.discovery.intermediate_sessions.exchange.$post(args, options),
  )
}

export async function postV1B2bDiscoveryOrganizationsCreate(
  args: InferRequestType<typeof client.v1.b2b.discovery.organizations.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.discovery.organizations.create.$post(args, options))
}

export async function postV1B2bDiscoveryOrganizations(
  args: InferRequestType<typeof client.v1.b2b.discovery.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.discovery.organizations.$post(args, options))
}

export async function postV1FingerprintLookup(
  args: InferRequestType<typeof client.v1.fingerprint.lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fingerprint.lookup.$post(args, options))
}

export async function postV1RulesSet(
  args: InferRequestType<typeof client.v1.rules.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rules.set.$post(args, options))
}

export async function postV1RulesList(
  args: InferRequestType<typeof client.v1.rules.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rules.list.$post(args, options))
}

export async function postV1VerdictReasonsOverride(
  args: InferRequestType<typeof client.v1.verdict_reasons.override.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.verdict_reasons.override.$post(args, options))
}

export async function postV1VerdictReasonsList(
  args: InferRequestType<typeof client.v1.verdict_reasons.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.verdict_reasons.list.$post(args, options))
}

export async function postV1EmailRisk(
  args: InferRequestType<typeof client.v1.email.risk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.risk.$post(args, options))
}

export async function postV1IdpOauthAuthorizeStart(
  args: InferRequestType<typeof client.v1.idp.oauth.authorize.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.idp.oauth.authorize.start.$post(args, options))
}

export async function postV1IdpOauthAuthorize(
  args: InferRequestType<typeof client.v1.idp.oauth.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.idp.oauth.authorize.$post(args, options))
}

export async function postV1ImpersonationAuthenticate(
  args: InferRequestType<typeof client.v1.impersonation.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.impersonation.authenticate.$post(args, options))
}

export async function getV1M2mClientsClientId(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.m2m.clients[':client_id'].$get(args, options))
}

export async function putV1M2mClientsClientId(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.m2m.clients[':client_id'].$put(args, options))
}

export async function deleteV1M2mClientsClientId(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.m2m.clients[':client_id'].$delete(args, options))
}

export async function postV1M2mClientsSearch(
  args: InferRequestType<typeof client.v1.m2m.clients.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.m2m.clients.search.$post(args, options))
}

export async function postV1M2mClients(
  args: InferRequestType<typeof client.v1.m2m.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.m2m.clients.$post(args, options))
}

export async function postV1M2mClientsClientIdSecretsRotateStart(
  args: InferRequestType<
    (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.m2m.clients[':client_id'].secrets.rotate.start.$post(args, options),
  )
}

export async function postV1M2mClientsClientIdSecretsRotateCancel(
  args: InferRequestType<
    (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.m2m.clients[':client_id'].secrets.rotate.cancel.$post(args, options),
  )
}

export async function postV1M2mClientsClientIdSecretsRotate(
  args: InferRequestType<
    (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.m2m.clients[':client_id'].secrets.rotate.$post(args, options),
  )
}

export async function postV1MagicLinksAuthenticate(
  args: InferRequestType<typeof client.v1.magic_links.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.magic_links.authenticate.$post(args, options))
}

export async function postV1MagicLinks(
  args: InferRequestType<typeof client.v1.magic_links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.magic_links.$post(args, options))
}

export async function postV1MagicLinksEmailSend(
  args: InferRequestType<typeof client.v1.magic_links.email.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.magic_links.email.send.$post(args, options))
}

export async function postV1MagicLinksEmailLoginOrCreate(
  args: InferRequestType<typeof client.v1.magic_links.email.login_or_create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.magic_links.email.login_or_create.$post(args, options))
}

export async function postV1MagicLinksEmailInvite(
  args: InferRequestType<typeof client.v1.magic_links.email.invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.magic_links.email.invite.$post(args, options))
}

export async function postV1MagicLinksEmailRevokeInvite(
  args: InferRequestType<typeof client.v1.magic_links.email.revoke_invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.magic_links.email.revoke_invite.$post(args, options))
}

export async function postV1B2bMagicLinksAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.magic_links.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.magic_links.authenticate.$post(args, options))
}

export async function postV1B2bMagicLinksEmailLoginOrSignup(
  args: InferRequestType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.magic_links.email.login_or_signup.$post(args, options))
}

export async function postV1B2bMagicLinksEmailInvite(
  args: InferRequestType<typeof client.v1.b2b.magic_links.email.invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.magic_links.email.invite.$post(args, options))
}

export async function postV1B2bMagicLinksEmailDiscoverySend(
  args: InferRequestType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.magic_links.email.discovery.send.$post(args, options))
}

export async function postV1B2bMagicLinksDiscoveryAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.magic_links.discovery.authenticate.$post(args, options))
}

export async function postV1B2bOauthAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.oauth.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.oauth.authenticate.$post(args, options))
}

export async function postV1B2bOauthDiscoveryAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.oauth.discovery.authenticate.$post(args, options))
}

export async function postV1B2bOtpsSmsSend(
  args: InferRequestType<typeof client.v1.b2b.otps.sms.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.otps.sms.send.$post(args, options))
}

export async function postV1B2bOtpsSmsAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.otps.sms.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.otps.sms.authenticate.$post(args, options))
}

export async function postV1B2bOtpsEmailLoginOrSignup(
  args: InferRequestType<typeof client.v1.b2b.otps.email.login_or_signup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.otps.email.login_or_signup.$post(args, options))
}

export async function postV1B2bOtpsEmailAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.otps.email.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.otps.email.authenticate.$post(args, options))
}

export async function postV1B2bOtpsEmailDiscoverySend(
  args: InferRequestType<typeof client.v1.b2b.otps.email.discovery.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.otps.email.discovery.send.$post(args, options))
}

export async function postV1B2bOtpsEmailDiscoveryAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.otps.email.discovery.authenticate.$post(args, options))
}

export async function postV1Passwords(
  args: InferRequestType<typeof client.v1.passwords.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.$post(args, options))
}

export async function postV1PasswordsAuthenticate(
  args: InferRequestType<typeof client.v1.passwords.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.authenticate.$post(args, options))
}

export async function postV1PasswordsStrengthCheck(
  args: InferRequestType<typeof client.v1.passwords.strength_check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.strength_check.$post(args, options))
}

export async function postV1PasswordsMigrate(
  args: InferRequestType<typeof client.v1.passwords.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.migrate.$post(args, options))
}

export async function postV1PasswordsEmailResetStart(
  args: InferRequestType<typeof client.v1.passwords.email.reset.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.email.reset.start.$post(args, options))
}

export async function postV1PasswordsEmailReset(
  args: InferRequestType<typeof client.v1.passwords.email.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.email.reset.$post(args, options))
}

export async function postV1PasswordsExistingPasswordReset(
  args: InferRequestType<typeof client.v1.passwords.existing_password.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.existing_password.reset.$post(args, options))
}

export async function postV1PasswordsSessionReset(
  args: InferRequestType<typeof client.v1.passwords.session.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.passwords.session.reset.$post(args, options))
}

export async function postV1B2bPasswordsStrengthCheck(
  args: InferRequestType<typeof client.v1.b2b.passwords.strength_check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.strength_check.$post(args, options))
}

export async function postV1B2bPasswordsMigrate(
  args: InferRequestType<typeof client.v1.b2b.passwords.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.migrate.$post(args, options))
}

export async function postV1B2bPasswordsAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.passwords.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.authenticate.$post(args, options))
}

export async function postV1B2bPasswordsEmailResetStart(
  args: InferRequestType<typeof client.v1.b2b.passwords.email.reset.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.email.reset.start.$post(args, options))
}

export async function postV1B2bPasswordsEmailReset(
  args: InferRequestType<typeof client.v1.b2b.passwords.email.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.email.reset.$post(args, options))
}

export async function postV1B2bPasswordsEmailRequireReset(
  args: InferRequestType<typeof client.v1.b2b.passwords.email.require_reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.email.require_reset.$post(args, options))
}

export async function postV1B2bPasswordsSessionReset(
  args: InferRequestType<typeof client.v1.b2b.passwords.session.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.session.reset.$post(args, options))
}

export async function postV1B2bPasswordsExistingPasswordReset(
  args: InferRequestType<typeof client.v1.b2b.passwords.existing_password.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.existing_password.reset.$post(args, options))
}

export async function postV1B2bPasswordsDiscoveryAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.discovery.authenticate.$post(args, options))
}

export async function postV1B2bPasswordsDiscoveryEmailResetStart(
  args: InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.passwords.discovery.email.reset.start.$post(args, options),
  )
}

export async function postV1B2bPasswordsDiscoveryEmailReset(
  args: InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.passwords.discovery.email.reset.$post(args, options))
}

export async function postV1OauthAttach(
  args: InferRequestType<typeof client.v1.oauth.attach.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.attach.$post(args, options))
}

export async function postV1OauthAuthenticate(
  args: InferRequestType<typeof client.v1.oauth.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.authenticate.$post(args, options))
}

export async function postV1OtpsAuthenticate(
  args: InferRequestType<typeof client.v1.otps.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otps.authenticate.$post(args, options))
}

export async function postV1OtpsSmsSend(
  args: InferRequestType<typeof client.v1.otps.sms.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otps.sms.send.$post(args, options))
}

export async function postV1OtpsSmsLoginOrCreate(
  args: InferRequestType<typeof client.v1.otps.sms.login_or_create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otps.sms.login_or_create.$post(args, options))
}

export async function postV1OtpsWhatsappSend(
  args: InferRequestType<typeof client.v1.otps.whatsapp.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otps.whatsapp.send.$post(args, options))
}

export async function postV1OtpsWhatsappLoginOrCreate(
  args: InferRequestType<typeof client.v1.otps.whatsapp.login_or_create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otps.whatsapp.login_or_create.$post(args, options))
}

export async function postV1OtpsEmailSend(
  args: InferRequestType<typeof client.v1.otps.email.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otps.email.send.$post(args, options))
}

export async function postV1OtpsEmailLoginOrCreate(
  args: InferRequestType<typeof client.v1.otps.email.login_or_create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.otps.email.login_or_create.$post(args, options))
}

export async function getV1ProjectsMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.projects.metrics.$get(undefined, options))
}

export async function getV1B2bSsoOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sso[':organization_id'].$get(args, options))
}

export async function deleteV1B2bSsoOrganizationIdConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.sso[':organization_id'].connections[':connection_id'].$delete(args, options),
  )
}

export async function postV1B2bSsoAuthenticate(
  args: InferRequestType<typeof client.v1.b2b.sso.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sso.authenticate.$post(args, options))
}

export async function postV1B2bSsoOidcOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sso.oidc[':organization_id'].$post(args, options))
}

export async function putV1B2bSsoOidcOrganizationIdConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.sso.oidc[':organization_id'].connections[':connection_id'].$put(args, options),
  )
}

export async function postV1B2bSsoSamlOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sso.saml[':organization_id'].$post(args, options))
}

export async function putV1B2bSsoSamlOrganizationIdConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.sso.saml[':organization_id'].connections[':connection_id'].$put(args, options),
  )
}

export async function putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrl(
  args: InferRequestType<
    (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.sso.saml[':organization_id'].connections[':connection_id'].url.$put(
      args,
      options,
    ),
  )
}

export async function deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateId(
  args: InferRequestType<
    (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.sso.saml[':organization_id'].connections[
      ':connection_id'
    ].verification_certificates[':certificate_id'].$delete(args, options),
  )
}

export async function deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyId(
  args: InferRequestType<
    (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.sso.saml[':organization_id'].connections[
      ':connection_id'
    ].encryption_private_keys[':private_key_id'].$delete(args, options),
  )
}

export async function postV1B2bSsoExternalOrganizationId(
  args: InferRequestType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.b2b.sso.external[':organization_id'].$post(args, options))
}

export async function putV1B2bSsoExternalOrganizationIdConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.b2b.sso.external[':organization_id'].connections[':connection_id'].$put(
      args,
      options,
    ),
  )
}

export async function postV1Totps(
  args: InferRequestType<typeof client.v1.totps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.totps.$post(args, options))
}

export async function postV1TotpsAuthenticate(
  args: InferRequestType<typeof client.v1.totps.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.totps.authenticate.$post(args, options))
}

export async function postV1TotpsRecoveryCodes(
  args: InferRequestType<typeof client.v1.totps.recovery_codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.totps.recovery_codes.$post(args, options))
}

export async function postV1TotpsRecover(
  args: InferRequestType<typeof client.v1.totps.recover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.totps.recover.$post(args, options))
}

export async function postV1WebauthnRegisterStart(
  args: InferRequestType<typeof client.v1.webauthn.register.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webauthn.register.start.$post(args, options))
}

export async function postV1WebauthnRegister(
  args: InferRequestType<typeof client.v1.webauthn.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webauthn.register.$post(args, options))
}

export async function postV1WebauthnAuthenticateStart(
  args: InferRequestType<typeof client.v1.webauthn.authenticate.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webauthn.authenticate.start.$post(args, options))
}

export async function postV1WebauthnAuthenticate(
  args: InferRequestType<typeof client.v1.webauthn.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webauthn.authenticate.$post(args, options))
}

export async function putV1WebauthnWebauthnRegistrationId(
  args: InferRequestType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webauthn[':webauthn_registration_id'].$put(args, options))
}

export async function getV1WebauthnCredentialsUserIdDomain(
  args: InferRequestType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.webauthn.credentials[':user_id'][':domain'].$get(args, options),
  )
}
